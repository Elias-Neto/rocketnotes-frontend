import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  border: ${({ theme, isNew }) =>
    isNew ? `.2rem dashed ${theme.COLORS.BACKGROUND_900}` : "none"};
  border-radius: 1rem;
  padding: 2rem 1.6rem;

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  input {
    width: 100%;
    background-color: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  button {
    border: none;
    background: none;

    svg {
      font-size: 2rem;
    }
  }

  .buttonDelete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .buttonAdd {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`
