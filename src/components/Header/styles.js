import styled from "styled-components"

import { Link } from "react-router-dom"

export const Container = styled.header`
  width: 100%;
  height: 10.5rem;
  padding: 0 8rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  grid-area: header;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 3.6rem;
  }
`
