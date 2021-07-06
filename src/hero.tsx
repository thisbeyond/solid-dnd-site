import {
  DragDropContext,
  DragDropSensors,
  useDragDropContext,
  createDraggable,
  createDroppable,
} from "@thisbeyond/solid-dnd";
import cc from "classcat";

export const Hero = () => {
  let draggablesContainer;

  const onDragEnd = ({ draggable, droppable }) => {
    if (droppable) {
      droppable.node.append(draggable.node);
    } else if (draggable.node.parentElement !== draggablesContainer) {
      draggablesContainer.append(draggable.node);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DragDropSensors>
        <div
          class={
            "pt-34 px-8 sm:px-20 container mx-auto flex flex-wrap flex-col " +
            "lg:flex-row"
          }
        >
          <div
            class={
              "flex-1 flex flex-col w-full justify-center items-center " +
              "text-center lg:items-start lg:text-left"
            }
          >
            <h1
              class={
                "mb-6 lg:my-4 text-3xl sm:text-5xl font-bold leading-tight " +
                "sm:whitespace-nowrap"
              }
            >
              Drag 'till you drop.
            </h1>
            <p class="leading-normal text-xl sm:text-2xl mb-8">
              A lightweight, performant, extensible drag and drop toolkit
              for&nbsp;
              <a href="https://solidjs.com/">Solid</a>.
            </p>
            <div ref={draggablesContainer} class="flex min-h-30">
              <Draggable id={1} />
            </div>
          </div>

          <div class="py-6 lg:px-10 justify-center flex flex-1 min-h-15rem">
            <Droppable id={1} />
          </div>
        </div>
      </DragDropSensors>
    </DragDropContext>
  );
};

const Draggable = (props) => {
  const draggable = createDraggable({ id: props.id });
  return (
    <div use:draggable>
      <div
        class={cc([
          "w-max text-sm sm:text-base whitespace-nowrap cursor-move bg-white",
          "text-gray-800 font-bold rounded-full my-6 py-4 px-8",
          "transform transition hover:scale-105",
          draggable.isActiveDraggable ? "shadow-2xl z-50" : "shadow-md z-10",
        ])}
        style={{ "touch-action": "none" }}
      >
        Go on, drag me!
      </div>
    </div>
  );
};

const Droppable = (props) => {
  const droppable = createDroppable({ id: props.id });
  return (
    <div
      use:droppable
      class={cc([
        "flex-1 flex flex-col items-center justify-center",
        "border-3 border-dashed rounded-lg",
        droppable.isActiveDroppable ? "shadow-inner-lg" : "",
      ])}
    >
      Drop here.
    </div>
  );
};
