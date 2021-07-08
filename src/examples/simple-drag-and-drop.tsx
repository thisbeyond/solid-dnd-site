import {
  DragDropContext,
  DragDropSensors,
  createDraggable,
  createDroppable,
} from "@thisbeyond/solid-dnd";

const Draggable = () => {
  const draggable = createDraggable({ id: 1 });
  return <div use:draggable>Draggable</div>;
};

const Droppable = () => {
  const droppable = createDroppable({ id: 1 });
  return <div use:droppable>Droppable.</div>;
};

export const SimpleDragAndDrop = () => {
  return (
    <DragDropContext>
      <DragDropSensors />
      <div>
        <Draggable />
        <Droppable />
      </div>
    </DragDropContext>
  );
};
