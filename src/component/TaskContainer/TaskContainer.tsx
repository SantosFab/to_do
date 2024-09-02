"use client";
import { FunctionComponent } from "react";
import { CheckBoxIcon } from "@/animation/checkBox/CheckBoxIcon";
import { ButtonDeleteIcon } from "@/animation/buttonDelete/ButtonDeleteIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Draggable, DraggableProvided } from "@hello-pangea/dnd";
import * as Styled from "./styles";

interface TaskContainerProps {
  checked?: boolean;
  id: number;
  index: number;
  isFirst?: boolean;
  isLast?: boolean;
  onChangeCheckBox?: () => void;
  onClickButtonDelete?: () => void;
  Task: string;
}

export const TaskContainer: FunctionComponent<TaskContainerProps> = ({
  checked,
  id,
  index,
  isFirst,
  isLast,
  onChangeCheckBox,
  onClickButtonDelete,
  Task,
}) => {
  return (
    <Styled.StyledTaskContainer $isFirst={isFirst} $isLast={isLast}>
      <Styled.StyledTask>{Task}</Styled.StyledTask>
      <div className="flex items-center">
        <CheckBoxIcon checked={checked} onChangeCheckBox={onChangeCheckBox} />
        <ButtonDeleteIcon onClickButtonDelete={onClickButtonDelete} />
        <Styled.StyledDragContainer>
          <Draggable draggableId={`item-${id}`} index={index}>
            {(provided: DraggableProvided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <FontAwesomeIcon icon={faBars} />
              </div>
            )}
          </Draggable>
        </Styled.StyledDragContainer>
      </div>
    </Styled.StyledTaskContainer>
  );
};
