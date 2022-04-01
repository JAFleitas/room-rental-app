const gif =
  "https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"

export default function Error404() {
  return (
    <Container>
      <img
        style={{ width: "100%", height: "100%" }}
        src={gif}
        alt="loading..."
      />
    </Container>
  )
}

import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`
