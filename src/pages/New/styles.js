import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "content";

  main {
    grid-area: content;

    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 1.5rem;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`

export const Form = styled.form`
  max-width: 55rem;
  margin: 3.8rem auto;

  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  #inputWrapper {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  #links ul,
  #tags ul {
    gap: 2rem;
  }

  #links ul {
    flex-direction: column;
  }

  #tags ul {
    flex-wrap: wrap;
  }
`
