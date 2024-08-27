"use client";
import styled, { css } from "styled-components";

export const StyledTest = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
  `}
`;
