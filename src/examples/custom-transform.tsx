import {
  DragDropProvider,
  DragDropSensors,
  createDraggable,
  transformStyle,
} from "@thisbeyond/solid-dnd";

const Draggable = () => {
  const draggable = createDraggable(1);

  const customTransformStyle = (transform) => {
    const sign = transform.x >= 0 ? "+" : "-";
    return {
      translate: `${transform.x}px ${transform.y}px 0px`,
      rotate: `z ${draggable.isActiveDraggable ? `${sign}15deg` : "0deg"}`,
    };
  };

  return (
    <div
      class="draggable"
      ref={draggable.ref}
      style={customTransformStyle(draggable.transform)}
      {...draggable.dragActivators}
    >
      Draggable
    </div>
  );
};

export const CustomTransformExample = () => {
  return (
    <DragDropProvider>
      <DragDropSensors />
      <div class="min-h-15">
        <Draggable />
      </div>
    </DragDropProvider>
  );
};
