import {
  DragDropContext,
  DragDropSensors,
  createSortable,
} from "@thisbeyond/solid-dnd";

export const SortableList = () => {
  return (
    <DragDropContext>
      <DragDropSensors />
    </DragDropContext>
  );
};
