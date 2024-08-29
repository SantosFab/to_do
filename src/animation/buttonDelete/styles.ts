import styled, { css } from "styled-components";

/* From Uiverse.io by vinodjangid07 */
export const StyledButtonDeleteIcon = styled.button`
  ${({}) => css`
    & {
      background-color: transparent;
      position: relative;
      border: none;
      margin-left: 10px;
      margin-right: 10px;
      width: 14px;
      height: 14px;
    }

    & .icon {
      transform: scale(1.2);
      transition: 0.2s linear;
      width: 15px;
      height: 13.5px;
    }

    & path {
      fill: white;
    }

    &:hover > .icon {
      transform: scale(1.5);
    }

    &:hover > .icon path {
      fill: rgb(168, 7, 7);
    }

    &:hover::after {
      visibility: visible;
      opacity: 1;
      top: -160%;
    }
  `}
`;
