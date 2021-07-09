import {
  DragDropContext,
  DragDropSensors,
  DragOverlay,
  createDraggable,
  createDroppable,
} from "@thisbeyond/solid-dnd";

const Draggable = () => {
  const draggable = createDraggable({ id: 1 });
  return (
    <div
      use:draggable={{ transform: false }}
      class="draggable"
      classList={{ "opacity-25": draggable.isActiveDraggable }}
    >
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
      classList={{ "!droppable-accept": droppable.isActiveDroppable }}
    >
      Droppable.
    </div>
  );
};

export const DragOverlayExample = () => {
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
      <DragOverlay>
        <div class="draggable">Drag overlay!</div>
      </DragOverlay>
    </DragDropContext>
  );
};
