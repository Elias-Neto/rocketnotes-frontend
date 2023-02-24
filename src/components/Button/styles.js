import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  border: none;
  border-radius: 1rem;
  padding-block: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  font-weight: 500;

  &:disabled {
    opacity: 0.5;
    color: #000;
  }
`
