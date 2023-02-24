import { Container } from "./styles"

import { FiPlus, FiX } from "react-icons/fi"

export default function LinkItem({ isNew = false, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "buttonAdd" : "buttonDelete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
