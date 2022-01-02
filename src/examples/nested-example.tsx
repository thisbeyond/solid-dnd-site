// @ts-nocheck
import { batch, Component, For, Show } from "solid-js";
import { createStore } from "solid-js/store";
import {
  DragDropContext,
  DragDropSensors,
  createDraggable,
  createDroppable,
} from "@thisbeyond/solid-dnd";

import "./nested-example.css";

declare module "solid-js" {
  namespace JSX {
    interface Directives {
      ["draggable"];
      ["droppable"];
    }
  }
}

type Item = {
  id: string | number;
  items?: Item[];
  path?: Array<string | number>;
};

const Item: Component<Item> = (props) => {
  const draggable = createDraggable({ id: props.id, data: { ...props } });
  const droppable = createDroppable({ id: props.id, data: { ...props } });
  return (
    <div
      use:droppable
      class="item"
      classList={{
        dropping: droppable.isActiveDroppable,
        dragging: draggable.isActiveDraggable,
      }}
    >
      <div use:draggable class="grab">
        {props.id}
      </div>
      <Show when={props.items && props.items != 0}>
        <div class="children">
          <For each={props.items}>
            {(item, index) => (
              <Item {...item} path={[...props.path, index(), "items"]} />
            )}
          </For>
        </div>
      </Show>
      <div class="item-droppable" />
    </div>
  );
};

export const NestedExample = () => {
  const [data, setData] = createStore<{ items: Item[] }>({
    items: [
      {
        id: "node_1",
        items: [
          { id: "node_1_1", items: [] },
          {
            id: "node_1_2",
            items: [
              {
                id: "node_1_2_1",
                items: [
                  { id: "node_1_2_1_1", items: [] },
                  { id: "node_1_2_1_2", items: [] },
                  { id: "node_1_2_1_3", items: [] },
                  { id: "node_1_2_1_4", items: [] },
                  { id: "node_1_2_1_5", items: [] },
                ],
              },
            ],
          },
          { id: "node_1_3", items: [] },
          { id: "node_1_4", items: [] },
          { id: "node_1_5", items: [] },
        ],
      },
      { id: "node_2", items: [] },
      { id: "node_3", items: [] },
    ],
  });
  const onDragEnd = ({ draggable, droppable }) => {
    if (draggable && droppable) {
      batch(() => {
        setData("items", ...draggable.data.path.slice(0, -2), (items) => {
          let arr = [...items];
          arr.splice(draggable.data.path[draggable.data.path.length - 2], 1);
          return arr;
        });
        setData("items", ...droppable.data.path, (items) => {
          return [...items, { ...draggable.data, path: droppable.data.path }];
        });
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DragDropSensors />
      <section class="w-full">
        <Item id="root" name="root" items={data.items} path={[]} />
      </section>
    </DragDropContext>
  );
};
