"use client";
import { ChangeEvent, useState } from "react";
import * as Styled from "./styled";
import { TodoContainer } from "@/component/ToDoContainer/ToDoContainer";

export default function Home() {
  const [textInput, setTextInput] = useState<string>("");
  const [toDoList, setToDoList] = useState<string[]>([]);

  const handleTextInput = (event: ChangeEvent<HTMLInputElement>) =>
    setTextInput(event.target.value);

  const handleTodoList = () =>
    setToDoList((current) => [...current, textInput]);
  return (
    <Styled.StyledHome>
      <Styled.StyledContainerToDo>
        <div className="w-full mx-auto flex justify-center">
          <Styled.StyledInput
            type="text"
            value={textInput}
            onChange={handleTextInput}
          ></Styled.StyledInput>
          <Styled.StyledButtonTop onClick={handleTodoList}>
            Add
          </Styled.StyledButtonTop>
        </div>
        {toDoList.map((toDo, index) => {
          const first = index === 0;
          const last = index === toDoList.length - 1;
          return (
            <TodoContainer
              key={index}
              checked={false}
              isFirst={first}
              isLast={last}
              toDo={toDo}
            />
          );
        })}
      </Styled.StyledContainerToDo>

      <Styled.StyledButtonBottom onClick={handleTodoList}>
        +
      </Styled.StyledButtonBottom>
    </Styled.StyledHome>
  );
}
