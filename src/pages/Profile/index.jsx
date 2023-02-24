import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiArrowLeft, FiMail, FiLock, FiUser, FiCamera } from "react-icons/fi"

import { useAuth } from "../../hooks/auth"

import api from "../../services/api"
import avatarPlaceholder from "../../assets/avatarPlaceholder.svg"

import { Container, Form, Avatar } from "./styles"

import Input from "../../components/Input"
import Button from "../../components/Button"

export default function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  async function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <div id="textInputWrapper">
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div id="passwordInputWrapper">
          <Input
            placeholder="Senha Atual"
            type="password"
            icon={FiLock}
            onChange={(e) => setOldPassword(e.target.value)}
          />

          <Input
            placeholder="Nova Senha"
            type="password"
            icon={FiLock}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
