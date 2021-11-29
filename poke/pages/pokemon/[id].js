import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const styles = {
	id: {
		fontStyle: 'italic',
		color: '#ccc',
	}
}

const fixName = name => {
	const name__fixed = (name).charAt(0).toUpperCase() + (name).slice(1)
	return name__fixed
}

const Stats = ({ stats }) => {
	return (
		<div>
			<h1>Base Stats</h1>
			<ul>
				{stats.map(stat => <li key={stat.stat.name}>{fixName(stat.stat.name)}: {stat.base_stat}</li>)}
			</ul>
		</div>
	)
}

const Pokemon = ({ data }) => {
	const router = useRouter()
	console.log(router)

	const name = fixName(data.name)
	// If we are using fallback = 'blocking', this is not necessary. Only use it when fallback = true
	//if (router.isFallback) {
		//return <p>Loading...</p>
	//}

	return (
		<div>
			<h1>{name} <span style={styles.id}>#{data.id}</span></h1>
			<Image src={data.sprites.front_default} width={200} height={200} />
			<Stats stats={data.stats}/>
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
