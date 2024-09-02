import styled, { css } from "styled-components";

interface TaskModalPropsOverlay {
  $showModal?: boolean;
}

export const StyledTaskModalOverlay = styled.div<TaskModalPropsOverlay>`
  ${({ $showModal }) => css`
    display: ${$showModal ? "block" : "none"};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  `}
`;

export const StyledTaskModalContent = styled.div`
  ${({}) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    z-index: 10;
    background-color: red;
  `}
`;

export const StyledIsClose = styled.button`
  ${({}) => css`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
  `}
`;
