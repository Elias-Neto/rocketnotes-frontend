import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useState } from "react"

import { useAuth } from "../../hooks/auth"

import { Container, Form, BackgroundImg } from "./styles"

import Input from "../../components/Input"
import Button from "../../components/Button"

export default function SignIn() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <header>
          <h1>Rocket Notes</h1>
          <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        </header>

        <h2>Faça seu Login</h2>

        <div id="inputWrapper">
          <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div id="buttonWrapper">
          <Button title="Entrar" onClick={handleSignIn} />

          <Link to="/register">Criar Conta</Link>
        </div>
      </Form>

      <BackgroundImg />
    </Container>
  )
}
