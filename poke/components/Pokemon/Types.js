import { fixName } from '../../pages/pokemon/[id]'
import { types_styles } from '../../styles/pokemon'

const typeStyles = (type) => {
	switch(type) {
		case 'normal':
			return { ...types_styles.default, ...types_styles.normal }

		case 'fire':
			return { ...types_styles.default, ...types_styles.fire }

		case 'water':
			return { ...types_styles.default, ...types_styles.water }

		case 'grass':
			return { ...types_styles.default, ...types_styles.grass }

		case 'electric':
			return { ...types_styles.default, ...types_styles.electric }

		case 'ice':
			return { ...types_styles.default, ...types_styles.ice }

		case 'fighting':
			return { ...types_styles.default, ...types_styles.fighting }

		case 'poison':
			return { ...types_styles.default, ...types_styles.poison }

		case 'ground':
			return { ...types_styles.default, ...types_styles.ground }

		case 'flying':
			return { ...types_styles.default, ...types_styles.flying }

		case 'psychic':
			return { ...types_styles.default, ...types_styles.psychic }

		case 'bug':
			return { ...types_styles.default, ...types_styles.bug }

		case 'rock':
			return { ...types_styles.default, ...types_styles.rock }

		case 'ghost':
			return { ...types_styles.default, ...types_styles.ghost }

		case 'dark':
			return { ...types_styles.default, ...types_styles.dark }

		case 'dragon':
			return { ...types_styles.default, ...types_styles.dragon }

		case 'steel':
			return { ...types_styles.default, ...types_styles.steel }

		case 'fairy':
			return { ...types_styles.default, ...types_styles.fairy }

		default:
			return { ...types_styles.default, ...types_styles.noType }
	}
}

const Types = ({ types }) => {
	return (
		<div className="type__container">
			{types.map(type =>
				<div key={type.type.name}>
					<p style={typeStyles(type.type.name)}>
						{fixName(type.type.name)}
					</p>
				</div>
			)}
		</div>
	)
}

export default Types
