import Image from 'next/image'
import Link from 'next/link'
//import { useRouter } from 'next/router'

import Types from '../../components/Pokemon/Types'
import Stats from '../../components/Pokemon/Stats'
import Abilities from '../../components/Pokemon/Abilities'

import { name_styles } from '../../styles/pokemon'

const fixName = name => {
	if (name === 'hp') {
		return name.toUpperCase()
	}
	if (name === 'special-attack') {
		return 'Special-Attack'
	}
	if (name === 'special-defense') {
		return 'Special-Defense'
	}
	const name__fixed = (name).charAt(0).toUpperCase() + (name).slice(1)

	return name__fixed
}

const Pokemon = ({ data }) => {
	//const router = useRouter()
	//console.log(router)
	console.log(data)

	const name = fixName(data.name)
	const image = data.sprites.other['official-artwork'].front_default

	// If we are using fallback = 'blocking', this is not necessary. Only use it when fallback = true
	//if (router.isFallback) {
		//return <p>Loading...</p>
	//}

	return (
		<div>
			<div className="name__container">
				<h1 style={name_styles.name}>{name} <span style={name_styles.id}>#{data.id}</span></h1>
			</div>

			<div className="about__container">
				<div className="image__container">
					<Image src={image} width={400} height={400} />
				</div>
				<div className="description__container">
					<Abilities abilities={data.abilities}/>
					<p>Description</p>
				</div>
			</div>

			<Types types={data.types} />
			<Stats stats={data.stats} />
			<Link href="/">Go to home</Link>
		</div>
	)
}

export default Pokemon

export const getStaticProps = async({ params }) => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
	const data = await response.json()

	return { props: { data } }
}

export const getStaticPaths = async() => {
	const paths = [
		{ params: { id: '1' } },
		{ params: { id: '2' } },
	]
	return {
		paths: paths,
		fallback: 'blocking',
	}
}

export { fixName }

//export const getServerSideProps = async({ params }) => {
	//const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
	//const data = await response.json()

	//return { props: { data } }
//}
