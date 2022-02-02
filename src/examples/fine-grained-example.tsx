import {
  DragDropProvider,
  DragDropSensors,
  createDraggable,
  createDroppable,
  transformStyle,
} from "@thisbeyond/solid-dnd";

const Draggable = () => {
  const draggable = createDraggable(1);
  return (
    <div
      ref={draggable.ref}
      style={transformStyle(draggable.transform)}
      class="draggable-container"
    >
      <div class="content">Draggable</div>
      <div class="handle" {...draggable.dragActivators}>
        ✪
      </div>
    </div>
  );
};

const Droppable = () => {
  const droppable = createDroppable(1);
  return (
    <div
      ref={droppable.ref}
      class="droppable"
      classList={{ "!droppable-accept": droppable.isActiveDroppable }}
    >
      Droppable.
    </div>
  );
};

export const FineGrainedExample = () => {
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
