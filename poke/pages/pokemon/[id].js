import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const styles = {
	name: {
		display: 'inline',
		fontFamily: 'sans-serif',
		border: '1px solid black',
		borderRadius: '5px',
		padding: '5px',
	},
	id: {
		fontFamily: 'sans-serif',
		fontStyle: 'italic',
		color: '#ccc',
	}
}

const types_styles = {
	color: '#fff',

	normal: {
		backgroundColor: '#a4acaf',
	},

	fire: {
		backgroundColor: '#fd7d24',
	},

	water: {
		backgroundColor: '#4592c4',
	},

	grass: {
		backgroundColor: '#9bcc50',
	},

	electric: {
		backgroundColor: '#eed535',
	},

	ice: {
		backgroundColor: '#51c4e7',
	},

	fighting: {
		backgroundColor: '#d56723',
	},

	poison: {
		backgroundColor: '#b97fc9',
	},

	ground: {
		background: 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)',
		backgroundColor: '#f7de3f',
	},

	flying: {
		background: 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)',
		backgroundColor: '#3dc7ef',
	},

	psychic: {
		backgroundColor: '#f366b9',
	},

	bug: {
		backgroundColor: '#729f3f',
	},

	rock: {
		backgroundColor: '#a38c21',
	},

	ghost: {
		backgroundColor: '#7b62a3',
	},

	dark: {
		backgroundColor: '#707070',
	},

	dragon: {
		background: 'linear-gradient(180deg, #53a4cf 50%, #bdb9b8 50%)',
		backgroundColor: '#53a4cf',
	},

	steel: {
		backgroundColor: '#9eb7b8',
	},

	fairy: {
		backgroundColor: '#fdb9e9',
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

const Types = ({ types }) => {
	return (
		<div>
			{types.map(type =>
				<div key={type.type.name}>
					<p
						style={{...types_styles,
							...type.type.name === 'normal' ? types_styles.normal :
							type.type.name === 'fire' ? types_styles.fire :
							type.type.name === 'water' ? types_styles.water :
							type.type.name === 'grass' ? types_styles.grass :
							type.type.name === 'electric' ? types_styles.electric :
							type.type.name === 'ice' ? types_styles.ice :
							type.type.name === 'fighting' ? types_styles.fighting :
							type.type.name === 'poison' ? types_styles.poison :
							type.type.name === 'ground' ? types_styles.ground :
							type.type.name === 'flying' ? types_styles.flying :
							type.type.name === 'psychic' ? types_styles.psychic :
							type.type.name === 'bug' ? types_styles.bug :
							type.type.name === 'rock' ? types_styles.rock :
							type.type.name === 'ghost' ? types_styles.ghost :
							type.type.name === 'dark' ? types_styles.dark :
							type.type.name === 'dragon' ? types_styles.dragon :
							type.type.name === 'steel' ? types_styles.steel :
							type.type.name === 'fairy' ? types_styles.fairy :
							null
						}}
					>
					{fixName(type.type.name)}</p>
				</div>
			)}
		</div>
	)
}

const Pokemon = ({ data }) => {
	const router = useRouter()
	console.log(data)
	//console.log(router)

	const name = fixName(data.name)
	const image = data.sprites.other['official-artwork'].front_default

	// If we are using fallback = 'blocking', this is not necessary. Only use it when fallback = true
	//if (router.isFallback) {
		//return <p>Loading...</p>
	//}

	return (
		<div>
			<h1 style={styles.name}>{name} <span style={styles.id}>#{data.id}</span></h1>
			<Image src={image} width={400} height={400} />
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
