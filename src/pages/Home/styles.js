import styled from "styled-components"

import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 8rem;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newNote content";
`

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Menu = styled.ul`
  grid-area: menu;

  flex-direction: column;
  gap: 2.4rem;

  padding-block: 6.4rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  text-align: center;

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`

export const Search = styled.div`
  grid-area: search;

  padding: 6.4rem 6.4rem;
`

export const Content = styled.div`
  grid-area: content;

  padding-inline: 6.4rem;
  margin-top: 6.4rem;
  margin-bottom: 2.4rem;

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 1.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  ul {
    flex-direction: column;
    gap: 2.4rem;

    footer {
      display: flex;
      gap: 1rem;
    }
  }
`

export const NewNote = styled(Link)`
  grid-area: newNote;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  font-size: 1.8rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  svg {
    font-size: 2rem;
  }
`
