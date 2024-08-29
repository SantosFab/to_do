import { FunctionComponent } from "react";
import * as Styled from "./styles";

interface CheckBoxIconProps {
  checked?: boolean;
  onChangeCheckBox?: () => void;
}

export const CheckBoxIcon: FunctionComponent<CheckBoxIconProps> = ({
  checked,
  onChangeCheckBox,
}) => {
  /* From Uiverse.io by vinodjangid07 */
  return (
    <Styled.StyledCheckBoxIcon>
      <input type="checkbox" checked={checked} onChange={onChangeCheckBox} />
      <svg viewBox="0 0 64 64" height="15px" width="15px">
        <path
          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
          pathLength="575.0541381835938"
          className="path"
        ></path>
      </svg>
    </Styled.StyledCheckBoxIcon>
  );
};
