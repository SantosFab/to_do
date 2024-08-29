import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface ToDoListProps {
  id: number;
  toDo: string;
  isCompleted: boolean;
}

interface DefaultToDoDispatch {
  setToDoList: Dispatch<SetStateAction<ToDoListProps[]>>;
}

export interface AddToDoListProps extends DefaultToDoDispatch {
  textInput: string;
  setTextInput: Dispatch<SetStateAction<string>>;
}

export interface CheckedToDoListProps extends DefaultToDoDispatch {
  index: number;
}

export interface OnDragEndProps extends DefaultToDoDispatch {
  result: any;
  toDoList: ToDoListProps[];
}

export interface RemoveToDoListProps extends DefaultToDoDispatch {
  index: number;
}

export interface ChangeTextInputProps {
  event: ChangeEvent<HTMLInputElement>;
  setTextInput: Dispatch<SetStateAction<string>>;
}
