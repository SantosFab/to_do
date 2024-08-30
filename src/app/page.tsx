"use client";
import { ChangeEvent, useState } from "react";
import { ToDoContainer } from "@/component/ToDoContainer/ToDoContainer";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { ToDoListProps } from "./interface";
import {
  AddToDoList,
  OnDragEnd,
  CheckedToDoList,
  RemoveToDoList,
  ChangeTextInput,
} from "./script";
import * as Styled from "./styled";

export default function Home() {
  const [textInput, setTextInput] = useState<string>("");
  const [toDoList, setToDoList] = useState<ToDoListProps[]>([]);

  const handleChangeTextInput = (event: ChangeEvent<HTMLInputElement>) =>
    ChangeTextInput({ event, setTextInput });

  const handleAddToDoList = () =>
    AddToDoList({ setToDoList, textInput, setTextInput });

  const handleCheckedToDoList = (index: number) =>
    CheckedToDoList({ index, setToDoList });

  const handleRemoveToDoList = (index: number) =>
    RemoveToDoList({ index, setToDoList });

  const handleOnDragEnd = (result: any) =>
    OnDragEnd({ result, setToDoList, toDoList });

  return (
    <Styled.StyledHome>
      <Styled.StyledContainer>
        <div className="w-full mx-auto flex justify-center">
          <Styled.StyledInput
            type="text"
            value={textInput}
            onChange={handleChangeTextInput}
          />
          <Styled.StyledButtonTop onClick={handleAddToDoList}>
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
                  <ToDoContainer
                    key={toDo.id}
                    id={toDo.id}
                    index={index}
                    isFirst={index === 0}
                    isLast={index === toDoList.length - 1}
                    toDo={toDo.toDo}
                    checked={toDo.isCompleted}
                    onChangeCheckBox={() => handleCheckedToDoList(index)}
                    onClickButtonDelete={() => handleRemoveToDoList(index)}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Styled.StyledContainer>
      <Styled.StyledButtonBottom onClick={handleAddToDoList}>
        +
      </Styled.StyledButtonBottom>
    </Styled.StyledHome>
  );
}
