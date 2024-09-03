"use client";
import { ChangeEvent, useMemo, useRef, useState } from "react";
import { TaskContainer } from "@/component/TaskContainer/TaskContainer";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { TaskListProps } from "./interface";
import { TaskModal } from "@/component/TaskModal/TaskModal";
import { useKeyListener } from "@/hook/useKeyListener/UseKeyListener";
import { NewTask } from "@/component/NewTask/NewTask";
import { usePersistedState } from "@/hook/persistedState/usePersistedState";
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
  const [textInputModal, setTextInputModal] = useState<string>("");
  const [taskList, setTaskList] = usePersistedState<TaskListProps[]>(
    "task",
    useMemo(() => [], [])
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputModalRef = useRef<HTMLInputElement>(null);

  const handleChangeTextInput = (event: ChangeEvent<HTMLInputElement>) =>
    ChangeTextInput({ event, dispatchInput: setTextInput });

  const handleChangeTextInputModal = (event: ChangeEvent<HTMLInputElement>) =>
    ChangeTextInput({ event, dispatchInput: setTextInputModal });

  const handleAddTaskList = () =>
    AddTaskList({
      setTaskList,
      Input: textInput,
      dispatchInput: setTextInput,
    });

  const handleAddTaskListModal = () =>
    AddTaskList({
      setTaskList,
      Input: textInputModal,
      dispatchInput: setTextInputModal,
    });

  const handleCheckedTaskList = (index: number) =>
    CheckedTaskList({ index, setTaskList });

  const handleRemoveTaskList = (index: number) =>
    RemoveTaskList({ index, setTaskList });

  const handleOnDragEnd = (result: any) =>
    OnDragEnd({ result, setTaskList, TaskList: taskList });

  const handleKeyEnter = () => {
    handleAddTaskList();
    inputRef.current?.focus();
  };

  useKeyListener("Enter", handleKeyEnter);

  return (
    <Styled.StyledHome>
      <Styled.StyledContainer>
        <NewTask
          AddTaskList={handleAddTaskList}
          ChangeTextInput={handleChangeTextInput}
          inputRef={inputRef}
          textInput={textInput}
        />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="TaskList">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="w-full flex flex-col items-center"
              >
                {taskList.map((Task, index) => (
                  <TaskContainer
                    key={Task.id}
                    id={Task.id}
                    index={index}
                    isFirst={index === 0}
                    isLast={index === taskList.length - 1}
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
        {showModal && (
          <TaskModal
            setShowModal={setShowModal}
            AddTaskList={handleAddTaskListModal}
            ChangeTextInput={handleChangeTextInputModal}
            inputRef={inputModalRef}
            textInput={textInputModal}
          />
        )}
      </Styled.StyledContainer>
      <Styled.StyledButtonBottom
        onClick={() => {
          handleAddTaskList;
          setShowModal(true);
        }}
      >
        +
      </Styled.StyledButtonBottom>
    </Styled.StyledHome>
  );
}
