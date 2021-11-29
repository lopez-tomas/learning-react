import { useState, useEffect } from 'react'
import Link from 'next/link'

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url.split('/').filter(x => x).pop()
  return (
    <li><Link href={`/pokemons/${id}`}>{pokemon.name}</Link></li>
  )
}

export default function Pokemons() {
	const [loading, setLoading] = useState(true)
	const [pokemons, setPokemons] = useState([])

	useEffect(() => {
		const getPokemons = async() => {
			const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
			const data = await response.json()
			setPokemons(data.results)
			setLoading(false)
		}
		getPokemons()
	}, [])

	if (loading) {
		return (
			<p>Loading...</p>
		)
	}
  return (
    <div>
      <p data-testid="tittle">My Pokémon APP</p>
      <ul>
        {pokemons.map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon} />)}
      </ul>
    </div>
  )
}
