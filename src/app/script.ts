import { Dispatch, SetStateAction } from "react";

export interface ToDoListProps {
  id: number;
  toDo: string;
}

interface OnDragEndProps {
  result: any;
  toDoList: ToDoListProps[];
  setToDoList: Dispatch<SetStateAction<ToDoListProps[]>>;
}

export const onDragEnd = ({
  result,
  setToDoList,
  toDoList,
}: OnDragEndProps) => {
  const { source, destination } = result;

  if (!destination) return;

  const reorderedList = Array.from(toDoList);
  const [removed] = reorderedList.splice(source.index, 1);
  reorderedList.splice(destination.index, 0, removed);

  setToDoList(reorderedList);
};
