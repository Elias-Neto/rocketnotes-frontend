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
    padding: 8rem 0;
    overflow-y: auto;

    grid-area: content;

    ::-webkit-scrollbar {
      width: 1.5rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`

export const Content = styled.div`
  max-width: 55rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 6.4rem;

  button:first-child {
    align-self: end;
  }

  #text,
  #sections {
    display: flex;
    flex-direction: column;
  }

  #text {
    gap: 1.6rem;

    h1 {
      font-size: 3.6rem;
      font-weight: 500;
    }

    p {
      font-size: 1.6rem;
      text-align: justify;
    }
  }

  #sections {
    gap: 2.8rem;
  }
`

export const Links = styled.ul`
  flex-direction: column;
  gap: 1.2rem;

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`

export const Tags = styled.ul`
  gap: 1rem;
`
