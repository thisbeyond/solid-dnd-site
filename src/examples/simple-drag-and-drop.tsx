import { DragDropContext, createDraggable } from "@thisbeyond/solid-dnd";

const Draggable = () => {
  const draggable = createDraggable({ id: 1 });
  return <div use:draggable>Drag me!</div>;
};

export const SimpleDragAndDrop = () => {
  return (
    <DragDropContext>
      <div>
        <Draggable />
      </div>
    </DragDropContext>
  );
};
