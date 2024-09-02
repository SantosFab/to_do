import { Dispatch, FunctionComponent, SetStateAction, useRef } from "react";
import { useModalOverlay } from "@/hook/useModalOverlay/UseModalOverlay";
import { useKeyListener } from "@/hook/useKeyListener/UseKeyListener";
import * as Styled from "./styles";

interface TaskModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const TaskModal: FunctionComponent<TaskModalProps> = ({
  showModal,
  setShowModal,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useModalOverlay({ modalRef, setShowModal });
  useKeyListener("Escape", () => setShowModal(false));

  return (
    <Styled.StyledTaskModalOverlay $showModal={showModal}>
      <Styled.StyledTaskModalContent ref={modalRef}>
        <Styled.StyledIsClose onClick={() => setShowModal(false)}>
          X
        </Styled.StyledIsClose>
      </Styled.StyledTaskModalContent>
    </Styled.StyledTaskModalOverlay>
  );
};
