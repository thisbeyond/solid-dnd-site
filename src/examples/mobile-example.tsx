import {
  DragDropProvider,
  DragDropSensors,
  createDraggable,
} from "@thisbeyond/solid-dnd";

const Draggable = () => {
  const draggable = createDraggable(1);
  return (
    <div
      use:draggable
      class="draggable"
      // Specify CSS "touch-action: none" to support dragging on touchscreens.
      style={{ "touch-action": "none" }}
    >
      Draggable
    </div>
  );
};

export const MobileExample = () => {
  return (
    <DragDropProvider>
      <DragDropSensors />
      <div class="min-h-25">
        <div class="hint">
          To support dragging on touchscreens, specify{" "}
          <span class="highlight">"touch-action: none"</span> on the draggable
          element.
        </div>
        <Draggable />
      </div>
    </DragDropProvider>
  );
};
