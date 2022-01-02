import {
  DragDropContext,
  DragDropSensors,
  DragOverlay,
  SortableContext,
  createSortable,
  closestLayoutCenter,
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

const Column = (props) => {
  const ids = () => props.items;
  return (
    <div>
      <SortableContext ids={ids()}>
        <For each={props.items}>{(item) => <Sortable item={item} />}</For>
      </SortableContext>
    </div>
  );
};

export const MultipleListsExample = () => {
  const [items, setItems] = createSignal([
    [1, 2, 3],
    [4, 5, 6],
  ]);
  const [activeItem, setActiveItem] = createSignal(null);

  // Alternative
  // const ids = items().flat()
  // Maintain a single sequence of item ids.
  // Update transform algorithm for createSortable (perhaps allow a custom one
  // to start with, or allow specifying an algorithm option).
  // The

  const onDragStart = ({ draggable }) => setActiveItem(draggable.id);
  const onDragOver = ({ draggable, droppable }) => {
    // Detect container and setItems if container changed.
    console.log("OVER", draggable?.id, droppable?.id);
  };

  const onDragEnd = ({ draggable, droppable }) => {
    if (draggable && droppable) {
      //   const currentItems = ids();
      //   const fromIndex = currentItems.indexOf(draggable.id);
      //   const toIndex = currentItems.indexOf(droppable.id);
      //   if (fromIndex !== toIndex) {
      //     const updatedItems = currentItems.slice();
      //     updatedItems.splice(toIndex, 0, ...updatedItems.splice(fromIndex, 1));
      //     setItems(updatedItems);
      //   }
      // }
      setActiveItem(null);
    }
  };

  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      collisionDetectionAlgorithm={closestLayoutCenter}
    >
      <DragDropSensors />
      <div class={"flex gap-1"}>
        <For each={items()}>{(items) => <Column items={items} />}</For>
      </div>
      <DragOverlay>
        <div class="sortable">{`Sortable ${activeItem()}`}</div>
      </DragOverlay>
      ;
    </DragDropContext>
  );
};
