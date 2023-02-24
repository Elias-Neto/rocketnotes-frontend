import styled from "styled-components"

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 1.6rem 2.2rem;
  border: none;
  border-radius: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`
