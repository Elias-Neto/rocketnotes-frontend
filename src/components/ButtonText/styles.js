import styled from "styled-components"

export const Container = styled.button`
  background: none;
  border: none;

  transition: color 0.2s;

  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  font-size: 1.6rem;
`
