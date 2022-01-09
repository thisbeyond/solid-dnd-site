import {
  DragDropProvider,
  DragDropSensors,
  DragOverlay,
  SortableProvider,
  createSortable,
  closestLayoutCenter,
} from "@thisbeyond/solid-dnd";
import { createSignal, For } from "solid-js";

const Sortable = (props) => {
  const sortable = createSortable(props.item);
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
    <DragDropProvider
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      collisionDetectionAlgorithm={closestLayoutCenter}
    >
      <DragDropSensors />
      <SortableProvider ids={ids()}>
        <For each={items()}>{(item) => <Sortable item={item} />}</For>
      </SortableProvider>
      <DragOverlay>
        <div class="sortable">{`Sortable ${activeItem()}`}</div>
      </DragOverlay>
    </DragDropProvider>
  );
};
