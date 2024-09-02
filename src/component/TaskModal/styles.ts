import styled, { css } from "styled-components";

export const StyledTaskModalOverlay = styled.div`
  ${({}) => css`
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
    z-index: 10;
    width: calc(80% + 10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const StyledButtonContainer = styled.div`
  ${({}) => css`
    display: flex;
    justify-content: end;
    width: calc(80% + 10px);

    & button {
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 35px;
    }
  `}
`;
