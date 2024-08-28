import styled, { css } from "styled-components";

/* From Uiverse.io by SelfMadeSystem */
export const StyledCheckBoxIcon = styled.label`
  ${({}) => css`
    cursor: pointer;
    display: inline-block;
    margin-left: 20px;

    & input {
      display: none;
    }

    & svg {
      overflow: visible;
    }

    & path {
      fill: none;
      stroke: white;
      stroke-width: 6;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
      stroke-dasharray: 241 9999999;
      stroke-dashoffset: 0;
    }

    & input:checked ~ svg .path {
      stroke-dasharray: 70.5096664428711 9999999;
      stroke-dashoffset: -262.2723388671875;
    }
  `}
`;
