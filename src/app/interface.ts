import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface TaskListProps {
  id: number;
  Task: string;
  isCompleted: boolean;
}

interface DefaultTaskDispatch {
  setTaskList: Dispatch<SetStateAction<TaskListProps[]>>;
}

export interface AddTaskListProps extends DefaultTaskDispatch {
  textInput: string;
  setTextInput: Dispatch<SetStateAction<string>>;
}

export interface CheckedTaskListProps extends DefaultTaskDispatch {
  index: number;
}

export interface OnDragEndProps extends DefaultTaskDispatch {
  result: any;
  TaskList: TaskListProps[];
}

export interface RemoveTaskListProps extends DefaultTaskDispatch {
  index: number;
}

export interface ChangeTextInputProps {
  event: ChangeEvent<HTMLInputElement>;
  setTextInput: Dispatch<SetStateAction<string>>;
}
