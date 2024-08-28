"use client";
import { FunctionComponent } from "react";
import * as Styled from "./styles";
import { CheckBoxIcon } from "@/animation/checkBox/CheckBoxIcon";
import { ButtonDeleteIcon } from "@/animation/buttonDelete/ButtonDeleteIcon";

interface TodoContainerProps {
  checked: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  toDo: string;
}

export const TodoContainer: FunctionComponent<TodoContainerProps> = ({
  checked,
  isFirst,
  isLast,
  toDo,
}) => {
  console.log(isFirst);
  console.log(isLast);

  return (
    <Styled.StyledTodoContainer $isFirst={isFirst} $isLast={isLast}>
      <Styled.StyledToDo>{toDo}</Styled.StyledToDo>
      <div className="flex">
        <CheckBoxIcon checked={checked} />
        <ButtonDeleteIcon onClick={() => console.log("test")} />
      </div>
    </Styled.StyledTodoContainer>
  );
};
