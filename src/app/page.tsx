"use client";
import { ChangeEvent, useState } from "react";
import { TodoContainer } from "@/component/ToDoContainer/ToDoContainer";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { onDragEnd, ToDoListProps } from "./script";
import * as Styled from "./styled";

export default function Home() {
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

  const handleOnDragEnd = (result: any) => {
    onDragEnd({ result, setToDoList, toDoList });
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
        <DragDropContext onDragEnd={handleOnDragEnd}>
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
