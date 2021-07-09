import {
  DragDropContext,
  DragDropSensors,
  createSortable,
} from "@thisbeyond/solid-dnd";

export const SortableListExample = () => {
  return (
    <DragDropContext>
      <DragDropSensors />
    </DragDropContext>
  );
};
