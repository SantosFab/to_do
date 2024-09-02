"use client";
import { ChangeEvent, useState } from "react";
import { TaskContainer } from "@/component/TaskContainer/TaskContainer";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { TaskListProps } from "./interface";
import {
  AddTaskList,
  OnDragEnd,
  CheckedTaskList,
  RemoveTaskList,
  ChangeTextInput,
} from "./script";
import * as Styled from "./styled";

export default function Home() {
  const [textInput, setTextInput] = useState<string>("");
  const [TaskList, setTaskList] = useState<TaskListProps[]>([]);

  const handleChangeTextInput = (event: ChangeEvent<HTMLInputElement>) =>
    ChangeTextInput({ event, setTextInput });

  const handleAddTaskList = () =>
    AddTaskList({ setTaskList, textInput, setTextInput });

  const handleCheckedTaskList = (index: number) =>
    CheckedTaskList({ index, setTaskList });

  const handleRemoveTaskList = (index: number) =>
    RemoveTaskList({ index, setTaskList });

  const handleOnDragEnd = (result: any) =>
    OnDragEnd({ result, setTaskList, TaskList });

  return (
    <Styled.StyledHome>
      <Styled.StyledContainer>
        <div className="w-full mx-auto flex justify-center">
          <Styled.StyledInput
            type="text"
            value={textInput}
            onChange={handleChangeTextInput}
          />
          <Styled.StyledButtonTop onClick={handleAddTaskList}>
            Add
          </Styled.StyledButtonTop>
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="TaskList">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-full flex flex-col items-center"
              >
                {TaskList.map((Task, index) => (
                  <TaskContainer
                    key={Task.id}
                    id={Task.id}
                    index={index}
                    isFirst={index === 0}
                    isLast={index === TaskList.length - 1}
                    Task={Task.Task}
                    checked={Task.isCompleted}
                    onChangeCheckBox={() => handleCheckedTaskList(index)}
                    onClickButtonDelete={() => handleRemoveTaskList(index)}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Styled.StyledContainer>
      <Styled.StyledButtonBottom onClick={handleAddTaskList}>
        +
      </Styled.StyledButtonBottom>
    </Styled.StyledHome>
  );
}
