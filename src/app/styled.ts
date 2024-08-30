"use client";
import styled, { css } from "styled-components";

export const StyledHome = styled.main`
  ${({}) => css`
    min-height: 100vh;
  `}
`;

export const StyledContainer = styled.div`
  ${({}) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
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

export const StyledButtonBottom = styled.button`
  ${({ theme }) => css`
    position: fixed;
    bottom: 50px;
    right: 50px;
    height: 60px;
    width: 60px;
    background-color: ${theme.background.yellowLight};
    color: ${theme.fontColor.black};
    border-radius: 50%;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
  `}
`;
