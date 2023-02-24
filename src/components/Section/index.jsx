import { Container } from "./styles"

export default function Section({ title, children, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}
