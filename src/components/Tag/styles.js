import styled from "styled-components"

export const Container = styled.span`
  padding: 0.5rem 1.4rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`
