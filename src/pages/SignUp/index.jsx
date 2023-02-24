import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiMail, FiLock, FiUser } from "react-icons/fi"

import api from "../../services/api"

import { Container, Form, BackgroundImg } from "./styles"

import Input from "../../components/Input"
import Button from "../../components/Button"

export default function SignIn() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch((error) => {
        if (error.message) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar!")
        }
      })
  }

  return (
    <Container>
      <BackgroundImg />

      <Form>
        <header>
          <h1>Rocket Notes</h1>
          <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        </header>

        <h2>Crie sua Conta</h2>

        <div id="inputWrapper">
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            onChange={(e) => setName(e.target.value)}
          />

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
          <Button title="Cadastrar" onClick={handleSignUp} />

          <Link to="/">Voltar para o Login</Link>
        </div>
      </Form>
    </Container>
  )
}
