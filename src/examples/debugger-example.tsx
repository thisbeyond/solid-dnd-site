import {
  DragDropProvider,
  DragDropSensors,
  DragOverlay,
  createDraggable,
  createDroppable,
  DragDropDebugger,
} from "@thisbeyond/solid-dnd";
import { createSignal, Show } from "solid-js";

const Draggable = () => {
  const draggable = createDraggable(1);
  return (
    <div
      use:draggable
      class="draggable"
      classList={{ "opacity-25": draggable.isActiveDraggable }}
    >
      Draggable
    </div>
  );
};

const Droppable = (props) => {
  const droppable = createDroppable(props.id);
  return (
    <div
      use:droppable
      class="droppable"
      classList={{ "!droppable-accept": droppable.isActiveDroppable }}
    >
      Droppable {props.id}
      {props.children}
    </div>
  );
};

export const DebuggerExample = () => {
  const [where, setWhere] = createSignal(1);
  return (
    <DragDropProvider
      onDragEnd={({ droppable }) => droppable && setWhere(droppable.id)}
    >
      <DragDropDebugger />

      <DragDropSensors />
      <Droppable id={1}>
        <Show when={where() === 1}>
          <Draggable />
        </Show>
      </Droppable>
      <Droppable id={2}>
        <Show when={where() === 2}>
          <Draggable />
        </Show>
      </Droppable>
      <DragOverlay>
        <div class="draggable flex h-20 items-center bg-orange-500">
          Drag Overlay!
        </div>
      </DragOverlay>
    </DragDropProvider>
  );
};
