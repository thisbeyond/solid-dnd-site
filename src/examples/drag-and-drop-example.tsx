import {
  DragDropProvider,
  DragDropSensors,
  createDraggable,
  createDroppable,
} from "@thisbeyond/solid-dnd";

const Draggable = () => {
  const draggable = createDraggable(1);
  return (
    <div use:draggable class="draggable">
      Draggable
    </div>
  );
};

const Droppable = () => {
  const droppable = createDroppable(1);
  return (
    <div
      use:droppable
      class="droppable"
      classList={{ "!droppable-accept": droppable.isActiveDroppable }}
    >
      Droppable.
    </div>
  );
};

export const DragAndDropExample = () => {
  let ref;

  const onDragEnd = ({ draggable, droppable }) => {
    if (droppable) {
      droppable.node.append(draggable.node);
    } else {
      ref.append(draggable.node);
    }
  };

  return (
    <DragDropProvider onDragEnd={onDragEnd}>
      <DragDropSensors />
      <div ref={ref} class="min-h-15">
        <Draggable />
      </div>
      <Droppable />
    </DragDropProvider>
  );
};
