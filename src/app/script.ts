import {
  AddToDoListProps,
  ChangeTextInputProps,
  CheckedToDoListProps,
  OnDragEndProps,
  RemoveToDoListProps,
} from "./interface";

export const ChangeTextInput = ({
  event,
  setTextInput,
}: ChangeTextInputProps) => {
  setTextInput(() => {
    const value = event.target.value;
    if (value === " ") {
      return "";
    }

    return value;
  });
};

export const AddToDoList = ({
  setToDoList,
  setTextInput,
  textInput,
}: AddToDoListProps) => {
  if (textInput.trim() !== "") {
    setToDoList((current) => [
      ...current,
      { id: Date.now(), toDo: textInput, isCompleted: false },
    ]);
    setTextInput("");
  }
};

export const CheckedToDoList = ({
  index,
  setToDoList,
}: CheckedToDoListProps) => {
  setToDoList((current) => {
    const newToDoList = [...current];

    newToDoList[index] = {
      ...newToDoList[index],
      isCompleted: !newToDoList[index].isCompleted,
    };

    return newToDoList;
  });
};

export const RemoveToDoList = ({ index, setToDoList }: RemoveToDoListProps) => {
  setToDoList((current) => {
    const newToDoList = [...current];

    newToDoList.splice(index, 1);

    return newToDoList;
  });
};

export const OnDragEnd = ({
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
