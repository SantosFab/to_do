import styled, { css } from "styled-components";

export const StyledNewTask = styled.div`
  ${({}) => css`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
  `}
`;

export const StyledInput = styled.input`
  ${({}) => css`
    width: 70%;
    padding: 0 5px 0 5px;
    border-radius: 5px;
  `}
`;

export const StyledButtonTop = styled.button`
  ${({ theme }) => css`
    font-size: 20px;
    padding: 7px;
    min-width: 5%;
    background-color: ${theme.background.brownLight};
    margin-left: 10px;
    border-radius: 5px;
  `}
`;
