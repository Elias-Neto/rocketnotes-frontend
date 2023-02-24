import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

import api from "../../services/api"

import { Container, Content, Links, Tags } from "./styles"

import Header from "../../components/Header"
import ButtonText from "../../components/ButtonText"
import Section from "../../components/Section"
import Tag from "../../components/Tag"
import Button from "../../components/Button"

export default function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Desaja realmente remover a nota?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir Nota" isActive onClick={handleRemove} />

            <div id="text">
              <h1>{data.title}</h1>

              <p>{data.description}</p>
            </div>

            <div id="sections">
              {data.links && (
                <Section title="Links Úteis">
                  <Links>
                    {data.links.map((link, index) => (
                      <li key={String(index)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))}
                  </Links>
                </Section>
              )}

              {data.tags && (
                <Section title="Marcadores">
                  <Tags>
                    {data.tags.map((tag, index) => (
                      <li key={String(index)}>
                        <Tag title={tag.name} />
                      </li>
                    ))}
                  </Tags>
                </Section>
              )}
            </div>

            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  )
}
