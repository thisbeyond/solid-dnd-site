import {
  DragDropContext,
  DragDropSensors,
  createDraggable,
  createDroppable,
} from "@thisbeyond/solid-dnd";

const Draggable = () => {
  const draggable = createDraggable({ id: 1 });
  return (
    <div use:draggable class="draggable">
      Draggable
    </div>
  );
};

const Droppable = () => {
  const droppable = createDroppable({ id: 1 });
  return (
    <div
      use:droppable
      class="droppable"
      classList={{ "!droppable-active": droppable.isActiveDroppable }}
    >
      Droppable.
    </div>
  );
};

export const SimpleDragAndDrop = () => {
  let ref;

  const onDragEnd = ({ draggable, droppable }) => {
    if (droppable) {
      droppable.node.append(draggable.node);
    } else {
      ref.append(draggable.node);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DragDropSensors />
      <div ref={ref} class="min-h-15">
        <Draggable />
      </div>
      <Droppable />
    </DragDropContext>
  );
};
