import type { NextPage } from 'next'
import classNames from 'classnames'

import { Header } from '../components/Header'
import { Title } from '../components/Title'

export const title = 'React TestVerse'
export const description = 'Navegando pelo Universo de Testes no React'

const Home: NextPage = () => {
  return (
    <>
      <Header title={title} description={description} />

      <main
        className={classNames(
          `bg-[url('/img/outer-space-background-freepik.jpg')]`,
          'min-h-screen',
          'bg-cover',
          'bg-center',
        )}
      >
        <Title title="Homepage" />
      </main>
    </>
  )
}

export default Home
