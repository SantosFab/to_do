import { Dispatch, FunctionComponent, SetStateAction, useRef } from "react";
import { useModalOverlay } from "@/hook/useModalOverlay/UseModalOverlay";
import { useKeyListener } from "@/hook/useKeyListener/UseKeyListener";
import { NewTask, NewTaskProps } from "@/component/NewTask/NewTask";
import * as Styled from "./styles";

interface TaskModalProps extends NewTaskProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const TaskModal: FunctionComponent<TaskModalProps> = ({
  AddTaskList,
  ChangeTextInput,
  inputRef,
  setShowModal,
  textInput,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleAddTask = () => {
    AddTaskList();
    setShowModal(false);
  };

  useModalOverlay({ modalRef, setShowModal });
  useKeyListener("Escape", () => setShowModal(false));
  useKeyListener("Enter", handleAddTask);

  const handleButton = () => {
    setShowModal(false);
  };

  return (
    <Styled.StyledTaskModalOverlay>
      <Styled.StyledTaskModalContent ref={modalRef}>
        <Styled.StyledButtonContainer>
          <button onClick={handleButton}>X</button>
        </Styled.StyledButtonContainer>
        <NewTask
          AddTaskList={() => {
            AddTaskList();
            handleButton();
          }}
          ChangeTextInput={ChangeTextInput}
          inputRef={inputRef}
          textInput={textInput}
        />
      </Styled.StyledTaskModalContent>
    </Styled.StyledTaskModalOverlay>
  );
};
