"use client";
import { FunctionComponent } from "react";
import { CheckBoxIcon } from "@/animation/checkBox/CheckBoxIcon";
import { ButtonDeleteIcon } from "@/animation/buttonDelete/ButtonDeleteIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Draggable, DraggableProvided } from "@hello-pangea/dnd";
import * as Styled from "./styles";

interface TodoContainerProps {
  toDo: string;
  id: number;
  index: number;
  isFirst?: boolean;
  isLast?: boolean;
}

export const TodoContainer: FunctionComponent<TodoContainerProps> = ({
  toDo,
  id,
  index,
  isFirst,
  isLast,
}) => {
  return (
    <Styled.StyledTodoContainer $isFirst={isFirst} $isLast={isLast}>
      <Styled.StyledToDo>{toDo}</Styled.StyledToDo>
      <div className="flex items-center">
        <CheckBoxIcon checked={false} />
        <ButtonDeleteIcon onClick={() => console.log("Delete item")} />
        <Styled.StyledIconContainer>
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
        </Styled.StyledIconContainer>
      </div>
    </Styled.StyledTodoContainer>
  );
};
