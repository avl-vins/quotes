import styled from "styled-components"
import { QuoteComponent } from "./components/QuoteComponent"

const Container = styled.section`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    place-content: center;
`

export const Quotes = () => {
  return (
    <Container>
        <QuoteComponent/>
    </Container>

  )
}
