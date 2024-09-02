import styled, { css } from "styled-components";

interface TaskContainerProps {
  $isFirst?: boolean;
  $isLast?: boolean;
}

export const StyledTaskContainer = styled.div<TaskContainerProps>`
  ${({ theme, $isFirst, $isLast }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: calc(84% + 10px);
    color: white;

    &:nth-child(4n) {
      background-color: ${theme.background.brownLight};
    }
    &:nth-child(4n + 1) {
      background-color: ${theme.background.brownDark};
    }
    &:nth-child(4n + 2) {
      background-color: ${theme.background.yellowLight};
    }
    &:nth-child(4n + 3) {
      background-color: ${theme.background.yellowDark};
    }

    ${$isFirst &&
    css`
      border-radius: 5px 5px 00 0;
      margin-top: 80px;
    `}

    ${$isLast &&
    css`
      border-radius: 0 0 5px 5px;
    `}

    ${$isLast &&
    $isFirst &&
    css`
      border-radius: 5px;
    `}
  `}
`;

export const StyledTask = styled.p`
  ${({}) => css`
    display: inline-block;
    font-size: 1.1vw;
  `}
`;

export const StyledDragContainer = styled.div`
  ${({}) => css`
    width: 24px;
    height: 24px;
  `}
`;
