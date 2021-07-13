import {
  DragDropContext,
  DragDropSensors,
  DragOverlay,
  SortableContext,
  createSortable,
  closestLayoutCenter,
  useDragDropContext,
  transformLayout,
} from "@thisbeyond/solid-dnd";
import { createSignal, For } from "solid-js";

const Sortable = (props) => {
  const sortable = createSortable({ id: props.item });
  return (
    <div
      use:sortable
      class="sortable"
      classList={{ "opacity-25": sortable.isActiveDraggable }}
    >
      {`Sortable ${props.item}`}
    </div>
  );
};

export const SortableListExample = () => {
  const [items, setItems] = createSignal([1, 2, 3]);
  const [activeItem, setActiveItem] = createSignal(null);
  const ids = () => items();

  const onDragStart = ({ draggable }) => setActiveItem(draggable.id);

  const onDragEnd = ({ draggable, droppable }) => {
    if (draggable && droppable) {
      const currentItems = ids();
      const fromIndex = currentItems.indexOf(draggable.id);
      const toIndex = currentItems.indexOf(droppable.id);
      if (fromIndex !== toIndex) {
        const updatedItems = currentItems.slice();
        updatedItems.splice(toIndex, 0, ...updatedItems.splice(fromIndex, 1));
        setItems(updatedItems);
      }
    }
    setActiveItem(null);
  };

  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      collisionDetectionAlgorithm={closestLayoutCenter}
    >
      <DragDropSensors />
      <SortableContext ids={ids()}>
        <For each={items()}>{(item) => <Sortable item={item} />}</For>
      </SortableContext>
      <DragOverlay>
        <div class="sortable">{`Sortable ${activeItem()}`}</div>
      </DragOverlay>
      <Debug />
    </DragDropContext>
  );
};

const Debug = () => {
  const [state, { activeDraggable }] = useDragDropContext();

  const droppableLayouts = () => {
    const layouts = [];
    const transformedLayouts = [];
    for (const droppable of Object.values(state.droppables)) {
      layouts.push(droppable.layout);
      transformedLayouts.push(
        transformLayout({
          layout: droppable.layout,
          transform: droppable.transform,
        })
      );
    }
    const draggable = activeDraggable();
    let draggableLayout = null;
    if (draggable) {
      draggableLayout = transformLayout({
        layout: draggable.layout,
        transform: draggable.transform,
      });
    }

    return {
      layouts,
      transformedLayouts,
      draggableLayout,
    };
  };

  return (
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <For each={droppableLayouts().transformedLayouts}>
        {(layout, index) => {
          const style = {
            position: "absolute",
            top: Math.round(layout.top) + "px",
            left: Math.round(layout.left) + "px",
            width: Math.round(layout.width) + "px",
            height: Math.round(layout.height) + "px",
          };
          return (
            <div class="border-2 border-red-500" style={style}>
              {index()}
            </div>
          );
        }}
      </For>
      {droppableLayouts().draggableLayout ? (
        <div
          class="border-2 border-blue-500"
          style={{
            position: "absolute",
            top: Math.round(droppableLayouts().draggableLayout.top) + "px",
            left: Math.round(droppableLayouts().draggableLayout.left) + "px",
            width: Math.round(droppableLayouts().draggableLayout.width) + "px",
            height:
              Math.round(droppableLayouts().draggableLayout.height) + "px",
          }}
        />
      ) : null}
    </div>
  );
};
