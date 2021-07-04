import {
  DragDropContext,
  DragDropSensors,
  useDragDropContext,
  createDraggable,
  createDroppable,
  transformStyle,
} from "@thisbeyond/solid-dnd";
import cc from "classcat";

export const Hero = () => {
  return (
    <div class="pt-34 px-20 container mx-auto flex flex-wrap flex-col lg:flex-row">
      <div class="flex-1 flex flex-col w-full justify-center items-center text-center lg:items-start lg:text-left">
        <h1 class="mb-6 lg:my-4 text-3xl sm:text-5xl font-bold leading-tight sm:whitespace-nowrap">
          Drag 'till you drop.
        </h1>
        <p class="leading-normal text-xl sm:text-2xl mb-8">
          A lightweight, performant, extensible drag and drop toolkit for&nbsp;
          <a href="https://solidjs.com/">Solid</a>.
        </p>
        <div class="flex space-x-6">
          <div class="text-sm sm:text-base whitespace-nowrap cursor-move bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg transform transition hover:scale-105 duration-300 ease-in-out">
            Go on, drag me!
          </div>
        </div>
      </div>

      <div class="w-full py-6 text-center flex flex-1">
        <Demo />
      </div>
    </div>
  );
};

const Draggable = (props) => {
  const draggable = createDraggable({ id: props.id });

  const style = () => {
    return {
      "z-index": draggable.isActiveDraggable() ? "1" : null,
      ...transformStyle({ translate: draggable.translate }),
    };
  };
  const innerStyle = () => {
    return {
      "box-shadow": draggable.isActiveDraggable()
        ? "-1px 0 15px 0 rgba(34, 33, 81, 0.01), 0px 15px 15px 0 rgba(34, 33, 81, 0.25)"
        : null,
    };
  };
  return (
    <div ref={draggable.ref} {...draggable.dragActivators} style={style()}>
      <div
        class="w-max text-sm sm:text-base whitespace-nowrap cursor-move bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg transform transition hover:scale-105"
        style={innerStyle()}
      >
        Go on, drag me!
      </div>
    </div>
  );
};

const Droppable = () => {
  const droppable = createDroppable({ id: "1" });

  return (
    <div
      {...droppable}
      class={cc([
        "flex items-center justify-center w-3/5 border-3 border-dashed rounded-lg",
        droppable.isActiveDroppable() ? "shadow-inner-lg" : "",
      ])}
    >
      Drop here.
    </div>
  );
};

const Sandbox = () => {
  const [, { onDragEnd }] = useDragDropContext();
  let draggablesContainer;

  onDragEnd(({ draggable, droppable }) => {
    if (droppable) {
      droppable.node.append(draggable.node);
    } else if (draggable.node.parentElement !== draggablesContainer) {
      draggablesContainer.append(draggable.node);
    }
  });
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        "align-items": "space-around",
        "justify-content": "center",
        "font-weight": "bold",
      }}
    >
      <div
        ref={draggablesContainer}
        style={{
          display: "flex",
          "flex-direction": "column",
          "padding-top": "50px",
        }}
      >
        <Draggable id={"1"} />
      </div>
      <Droppable />
    </div>
  );
};

export const Demo = () => {
  return (
    <DragDropContext>
      <DragDropSensors>
        <Sandbox />
      </DragDropSensors>
    </DragDropContext>
  );
};
