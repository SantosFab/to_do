import { ChangeEvent, FunctionComponent, RefObject } from "react";
import * as Styled from "./styles";

export interface NewTaskProps {
  AddTaskList: () => void;
  ChangeTextInput: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: RefObject<HTMLInputElement>;
  textInput: string;
}

export const NewTask: FunctionComponent<NewTaskProps> = ({
  AddTaskList,
  ChangeTextInput,

  textInput,
  inputRef,
}) => {
  return (
    <Styled.StyledNewTask>
      <Styled.StyledInput
        type="text"
        value={textInput}
        onChange={ChangeTextInput}
        ref={inputRef}
        autoFocus
      />
      <Styled.StyledButtonTop onClick={AddTaskList}>Add</Styled.StyledButtonTop>
    </Styled.StyledNewTask>
  );
};
