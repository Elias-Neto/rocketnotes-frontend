import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;
  border-radius: 1rem;
  padding: 2rem 1.6rem;
  resize: none;

  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
