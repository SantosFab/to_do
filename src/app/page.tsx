"use client";
import { ChangeEvent, useState } from "react";
import { TodoContainer } from "@/component/ToDoContainer/ToDoContainer";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import * as Styled from "./styled";

export default function Home() {
  interface ToDoListProps {
    id: number;
    toDo: string;
  }

  const [textInput, setTextInput] = useState<string>("");
  const [toDoList, setToDoList] = useState<ToDoListProps[]>([]);

  const handleTextInput = (event: ChangeEvent<HTMLInputElement>) =>
    setTextInput(event.target.value);

  const handleTodoList = () => {
    if (textInput.trim() !== "") {
      setToDoList((current) => [
        ...current,
        { id: Date.now(), toDo: textInput },
      ]);
    }
  };

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) return;

    const reorderedList = Array.from(toDoList);
    const [removed] = reorderedList.splice(source.index, 1);
    reorderedList.splice(destination.index, 0, removed);

    setToDoList(reorderedList);
  };

  return (
    <Styled.StyledHome>
      <Styled.StyledContainerToDo>
        <div className="w-full mx-auto flex justify-center">
          <Styled.StyledInput
            type="text"
            value={textInput}
            onChange={handleTextInput}
          />
          <Styled.StyledButtonTop onClick={handleTodoList}>
            Add
          </Styled.StyledButtonTop>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="toDoList">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-full flex flex-col items-center"
              >
                {toDoList.map((toDo, index) => (
                  <TodoContainer
                    key={toDo.id}
                    id={toDo.id}
                    index={index}
                    toDo={toDo.toDo}
                    isFirst={index === 0}
                    isLast={index === toDoList.length - 1}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Styled.StyledContainerToDo>
      <Styled.StyledButtonBottom onClick={handleTodoList}>
        +
      </Styled.StyledButtonBottom>
    </Styled.StyledHome>
  );
}
