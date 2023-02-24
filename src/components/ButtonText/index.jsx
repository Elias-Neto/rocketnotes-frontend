import { Container } from "./styles"

export default function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container type="button" isActive={isActive} {...rest}>
      {title}
    </Container>
  )
}
