import {
  AddTaskListProps,
  ChangeTextInputProps,
  CheckedTaskListProps,
  OnDragEndProps,
  RemoveTaskListProps,
} from "./interface";

export const ChangeTextInput = ({
  event,
  dispatchInput,
}: ChangeTextInputProps) => {
  dispatchInput(() => {
    const value = event.target.value;
    if (value === " ") {
      return "";
    }

    return value;
  });
};

export const AddTaskList = ({
  setTaskList,
  dispatchInput,
  Input,
}: AddTaskListProps) => {
  if (Input.trim() !== "") {
    setTaskList((current) => [
      ...current,
      { id: Date.now(), Task: Input, isCompleted: false },
    ]);
    dispatchInput("");
  }
};

export const CheckedTaskList = ({
  index,
  setTaskList,
}: CheckedTaskListProps) => {
  setTaskList((current) => {
    const newTaskList = [...current];

    newTaskList[index] = {
      ...newTaskList[index],
      isCompleted: !newTaskList[index].isCompleted,
    };

    return newTaskList;
  });
};

export const RemoveTaskList = ({ index, setTaskList }: RemoveTaskListProps) => {
  setTaskList((current) => {
    const newTaskList = [...current];

    newTaskList.splice(index, 1);

    return newTaskList;
  });
};

export const OnDragEnd = ({
  result,
  setTaskList,
  TaskList,
}: OnDragEndProps) => {
  const { source, destination } = result;

  if (!destination) return;

  const reorderedList = Array.from(TaskList);
  const [removed] = reorderedList.splice(source.index, 1);
  reorderedList.splice(destination.index, 0, removed);

  setTaskList(reorderedList);
};
