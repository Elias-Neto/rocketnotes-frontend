import { useState } from "react"
import { useNavigate } from "react-router-dom"

import api from "../../services/api"

import { Container, Form } from "./styles"

import Header from "../../components/Header"
import Input from "../../components/Input"
import Textarea from "../../components/Textarea"
import Section from "../../components/Section"
import LinkItem from "../../components/LinkItem"
import Button from "../../components/Button"
import ButtonText from "../../components/ButtonText"

export default function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddLInk() {
    setLinks((prevState) => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted))
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Você esqueceu de adicionar um título.")
    }

    if (newLink) {
      return alert("Você esqueceu de adicionar um link.")
    }

    if (newTag) {
      return alert("Você esqueceu de adicionar uma tag.")
    }
    console.log({
      title,
      description,
      tags,
      links,
    })

    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    })

    alert("Nota criada com sucesso!")
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText title="Voltar" onClick={handleBack} />
          </header>

          <div id="inputWrapper">
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />

            <Textarea
              placeholder="Observações"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Section title="Links Úteis" id="links">
            <ul>
              {links.map((link, index) => (
                <li key={String(index)}>
                  <LinkItem
                    value={link}
                    onClick={() => handleRemoveLink(link)}
                  />
                </li>
              ))}
              <li>
                <LinkItem
                  isNew
                  placeholder="Novo Link"
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                  onClick={handleAddLInk}
                />
              </li>
            </ul>
          </Section>

          <Section title="Marcadores" id="tags">
            <ul>
              {tags.map((tag, index) => (
                <li key={String(index)}>
                  <LinkItem
                    value={tag}
                    onClick={() => {
                      handleRemoveTag(tag)
                    }}
                  />
                </li>
              ))}
              <li>
                <LinkItem
                  isNew
                  placeholder="Nova Tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                />
              </li>
            </ul>
          </Section>

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  )
}
