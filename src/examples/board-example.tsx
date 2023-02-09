import {
  DragDropProvider,
  DragDropSensors,
  DragOverlay,
  SortableProvider,
  createSortable,
  closestCenter,
  maybeTransformStyle,
  Id,
  DragEventHandler,
  Draggable,
  Droppable,
  CollisionDetector,
} from "@thisbeyond/solid-dnd";
import { batch, For, onMount, VoidComponent } from "solid-js";
import { createStore } from "solid-js/store";
import Big from "big.js";

export const ORDER_DELTA = 1000;

interface Base {
  id: Id;
  name: string;
  type: "group" | "item";
  order: string;
  color?: string;
}

interface Group extends Base {
  type: "group";
}

interface Item extends Base {
  type: "item";
  group: Id;
}

type Entity = Group | Item;

const sortByOrder = (entities: Entity[]) => {
  const sorted = entities.map((item) => ({ order: new Big(item.order), item }));
  sorted.sort((a, b) => a.order.cmp(b.order));
  return sorted.map((entry) => entry.item);
};

const Item: VoidComponent<{
  id: Id;
  name: string;
  group: Id;
}> = (props) => {
  const sortable = createSortable(props.id, {
    type: "item",
    group: props.group,
  });
  return (
    <div
      use:sortable
      class="sortable"
      classList={{ "opacity-25": sortable.isActiveDraggable }}
    >
      {props.name}
    </div>
  );
};

const ItemOverlay: VoidComponent<{ name: string }> = (props) => {
  return <div class="sortable">{props.name}</div>;
};

const Group: VoidComponent<{ id: Id; name: string; items: Item[] }> = (
  props
) => {
  const sortable = createSortable(props.id, { type: "group" });
  const sortedItemIds = () => props.items.map((item) => item.id);

  return (
    <div
      ref={sortable.ref}
      style={maybeTransformStyle(sortable.transform)}
      classList={{ "opacity-25": sortable.isActiveDraggable }}
    >
      <div class="column-header" {...sortable.dragActivators}>
        {props.name}
      </div>
      <div class="column bg-gray-100">
        <SortableProvider ids={sortedItemIds()}>
          <For each={props.items}>
            {(item) => (
              <Item id={item.id} name={item.name} group={item.group} />
            )}
          </For>
        </SortableProvider>
      </div>
    </div>
  );
};

const GroupOverlay: VoidComponent<{ name: string; items: Item[] }> = (
  props
) => {
  return (
    <div>
      <div class="column-header">{props.name}</div>
      <div class="column bg-gray-100">
        <For each={props.items}>
          {(item) => <ItemOverlay name={item.name} />}
        </For>
      </div>
    </div>
  );
};

export const BoardExample = () => {
  const [entities, setEntities] = createStore<Record<Id, Entity>>({});

  let nextOrder = 0;

  const getNextOrder = () => {
    nextOrder += ORDER_DELTA;
    return nextOrder.toString();
  };

  const addGroup = (id: Id, name: string, color?: string) => {
    setEntities(id, {
      id,
      name,
      color: color,
      type: "group",
      order: getNextOrder(),
    });
  };

  const addItem = (id: Id, name: string, group: Id, color?: string) => {
    setEntities(id, {
      id,
      name,
      group,
      color: color,
      type: "item",
      order: getNextOrder(),
    });
  };

  const setup = () => {
    batch(() => {
      addGroup(1, "Todo");
      addGroup(2, "In Progress");
      addGroup(3, "Done");
      addItem(4, "Make waves", 1);
      addItem(5, "Party!.", 1);
      addItem(6, "Meet friends.", 2);
      addItem(7, "Do shopping.", 3);
    });
  };

  onMount(setup);

  const groups = () =>
    sortByOrder(
      Object.values(entities).filter((item) => item.type === "group")
    ) as Group[];

  const groupIds = () => groups().map((group) => group.id);

  const groupOrders = () => groups().map((group) => group.order);

  const groupItems = (groupId: Id) =>
    sortByOrder(
      Object.values(entities).filter(
        (entity) => entity.type === "item" && entity.group === groupId
      )
    ) as Item[];

  const groupItemIds = (groupId: Id) =>
    groupItems(groupId).map((item) => item.id);

  const groupItemOrders = (groupId: Id) =>
    groupItems(groupId).map((item) => item.order);

  const isSortableGroup = (sortable: Draggable | Droppable) =>
    sortable.data.type === "group";

  const closestEntity: CollisionDetector = (draggable, droppables, context) => {
    const closestGroup = closestCenter(
      draggable,
      droppables.filter((droppable) => isSortableGroup(droppable)),
      context
    );
    if (isSortableGroup(draggable)) {
      return closestGroup;
    } else if (closestGroup) {
      const closestItem = closestCenter(
        draggable,
        droppables.filter(
          (droppable) =>
            !isSortableGroup(droppable) &&
            droppable.data.group === closestGroup.id
        ),
        context
      );

      if (!closestItem) {
        return closestGroup;
      }

      const changingGroup = draggable.data.group !== closestGroup.id;
      if (changingGroup) {
        const belowLastItem =
          groupItemIds(closestGroup.id).at(-1) === closestItem.id &&
          draggable.transformed.center.y > closestItem.transformed.center.y;

        if (belowLastItem) return closestGroup;
      }

      return closestItem;
    }
  };

  const move = (
    draggable: Draggable,
    droppable: Droppable,
    onlyWhenChangingGroup = true
  ) => {
    if (!draggable || !droppable) return;

    const draggableIsGroup = isSortableGroup(draggable);
    const droppableIsGroup = isSortableGroup(droppable);

    const draggableGroupId = draggableIsGroup
      ? draggable.id
      : draggable.data.group;

    const droppableGroupId = droppableIsGroup
      ? droppable.id
      : droppable.data.group;

    if (
      onlyWhenChangingGroup &&
      (draggableIsGroup || draggableGroupId === droppableGroupId)
    ) {
      return;
    }

    let ids, orders, order;

    if (draggableIsGroup) {
      ids = groupIds();
      orders = groupOrders();
    } else {
      ids = groupItemIds(droppableGroupId);
      orders = groupItemOrders(droppableGroupId);
    }

    if (droppableIsGroup && !draggableIsGroup) {
      order = new Big(orders.at(-1) ?? -ORDER_DELTA).plus(ORDER_DELTA).round();
    } else {
      const draggableIndex = ids.indexOf(draggable.id);
      const droppableIndex = ids.indexOf(droppable.id);
      if (draggableIndex !== droppableIndex) {
        let orderAfter, orderBefore;
        if (draggableIndex === -1 || draggableIndex > droppableIndex) {
          orderBefore = new Big(orders[droppableIndex]);
          orderAfter = new Big(
            orders[droppableIndex - 1] ?? orderBefore.minus(ORDER_DELTA * 2)
          );
        } else {
          orderAfter = new Big(orders[droppableIndex]);
          orderBefore = new Big(
            orders[droppableIndex + 1] ?? orderAfter.plus(ORDER_DELTA * 2)
          );
        }

        if (orderAfter !== undefined && orderBefore !== undefined) {
          order = orderAfter.plus(orderBefore).div(2.0);
          const rounded = order.round();
          if (rounded.gt(orderAfter) && rounded.lt(orderBefore)) {
            order = rounded;
          }
        }
      }
    }

    if (order !== undefined) {
      setEntities(draggable.id, (entity) => ({
        ...entity,
        order: order.toString(),
        group: droppableGroupId,
      }));
    }
  };

  const onDragOver: DragEventHandler = ({ draggable, droppable }) =>
    move(draggable, droppable);

  const onDragEnd: DragEventHandler = ({ draggable, droppable }) =>
    move(draggable, droppable, false);

  return (
    <div class="flex flex-col flex-1 mt-5 self-stretch">
      <DragDropProvider
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
        collisionDetector={closestEntity}
      >
        <DragDropSensors />
        <div class="columns">
          <SortableProvider ids={groupIds()}>
            <For each={groups()}>
              {(group) => (
                <Group
                  id={group.id}
                  name={group.name}
                  items={groupItems(group.id)}
                />
              )}
            </For>
          </SortableProvider>
        </div>
        <DragOverlay>
          {(draggable) => {
            const entity = entities[draggable.id];
            return isSortableGroup(draggable) ? (
              <GroupOverlay name={entity.name} items={groupItems(entity.id)} />
            ) : (
              <ItemOverlay name={entity.name} />
            );
          }}
        </DragOverlay>
      </DragDropProvider>
    </div>
  );
};
