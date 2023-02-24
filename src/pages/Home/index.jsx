import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FiPlus, FiSearch } from "react-icons/fi"

import api from "../../services/api"

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"

import Header from "../../components/Header"
import ButtonText from "../../components/ButtonText"
import Input from "../../components/Input"
import Section from "../../components/Section"
import Note from "../../components/Note"

export default function Home() {
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])

  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  function handleTagSelected(tagName) {
    if (tagName === "all") {
      return setTagsSelected([])
    }

    const alreadySelected = tagsSelected.includes(tagName)

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected((prevtState) => [...prevtState, tagName])
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      )
      setNotes(response.data)
    }

    fetchNotes()
  }, [tagsSelected, search])

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={(e) => handleTagSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {tags &&
          tags.map((tag, index) => (
            <li key={String(index)}>
              <ButtonText
                title={tag.name}
                onClick={(e) => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          placeholder="Procurar pelo título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <ul>
            {notes.map((note, index) => (
              <li key={String(index)}>
                <Note data={note} onClick={() => handleDetails(note.id)} />
              </li>
            ))}
          </ul>
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  )
}
