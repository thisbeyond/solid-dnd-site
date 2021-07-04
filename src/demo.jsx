import {
  DragDropContext,
  DragDropSensors,
  useDragDropContext,
  createDraggable,
  createDroppable,
  transformStyle,
} from "@thisbeyond/solid-dnd";
import cc from "classcat";

const Draggable = (props) => {
  const draggable = createDraggable({ id: props.id });

  const style = () => {
    return {
      margin: "20px 40px",
      cursor: "move",
      color: "white",
      background: "black",
      "border-radius": "5px",
      padding: "16px 32px",
      width: "max-content",
      "box-shadow": draggable.isActiveDraggable()
        ? "-1px 0 15px 0 rgba(34, 33, 81, 0.01), 0px 15px 15px 0 rgba(34, 33, 81, 0.25)"
        : null,
      "z-index": draggable.isActiveDraggable() ? "1" : null,
      ...transformStyle({ translate: draggable.translate }),
    };
  };
  return (
    <div ref={draggable.ref} {...draggable.dragActivators} style={style()}>
      {`Drag me!`}
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
