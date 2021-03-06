import Link from 'next/link'
import { fixName } from './pokemon/[id]'

const Pokemon = ({ pokemon }) => {
  const name = pokemon.name
  //const id = pokemon.url.split('/').filter(x => x).pop()
  return (
    <li><Link href="/pokemon/[id]" as={`/pokemon/${name}`}>{fixName(pokemon.name)}</Link></li>
  )
}

export default function Pokemons({ pokemons }) {
  return (
    <div>
      <p data-testid="tittle">My Pokémon APP</p>
      <ul>
        {pokemons.map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon} />)}
      </ul>
    </div>
  )
}

export const getStaticProps = async() => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=890')
  const data = await response.json()

  return {
    props: { pokemons: data.results }
  }
}
