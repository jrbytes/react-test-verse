import type { NextPage } from 'next'

import { Container } from '../templates/Container'
import { Header } from '../components/Header'
import { Title } from '../components/Title'

export const title = 'React TestVerse'
export const description = 'Navegando pelo Universo de Testes no React'

const Home: NextPage = () => {
  return (
    <>
      <Header title={title} description={description} />

      <div className="bg-primaryDark py-4">
        <Container>
          <Title title="React TestVerse" />
        </Container>
      </div>
    </>
  )
}

export default Home
