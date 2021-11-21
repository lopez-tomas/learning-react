import { useRouter } from 'next/router'

const Description = () => {
	const router = useRouter()
	console.log({router})

	return (
		<div>
			<p>Pokémon's description</p>
		</div>
	)
}

export default Description
