import styled from "styled-components"

import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  header,
  h2 {
    margin-bottom: 4.8rem;
  }

  h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  #inputWrapper {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    width: 100%;
    margin-bottom: 2.4rem;
  }

  #buttonWrapper {
    display: flex;
    flex-direction: column;
    gap: 12rem;

    width: 100%;
  }

  a {
    color: ${({ theme }) => theme.COLORS.ORANGE};

    width: fit-content;
    margin: 0 auto;
  }
`

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`
