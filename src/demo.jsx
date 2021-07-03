import {
  DragDropContext,
  DragDropSensors,
  useDragDropContext,
  createDraggable,
  createDroppable,
  transformStyle,
} from "@thisbeyond/solid-dnd";

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
  const shadow = () => {
    return `
      inset 
      rgba(${
        droppable.isActiveDroppable() ? 0 : 201
      }, 211, 219, 0.5) 0 0 0 3px, 
      rgba(255, 255, 255, 0) 0 0 0 1px, 
      rgba(201, 211, 219, 0.25) 20px 14px 24px
    `;
  };
  const style = () => ({
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    background: "white",
    "border-radius": "10px",
    width: "300px",
    height: "300px",
    "box-shadow": shadow(),
  });
  return (
    <div {...droppable} style={style()}>
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
          width: "300px",
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
