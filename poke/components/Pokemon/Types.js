import { fixName } from '../../pages/pokemon/[id]'
import { types_styles } from '../../styles/pokemon'

const Types = ({ types }) => {
	return (
		<div className="type__container">
			{types.map(type =>
				<div key={type.type.name}>
					<p
						style={{...types_styles,
							...type.type.name === 'normal' 	? types_styles.normal 	:
							type.type.name === 'fire' 			? types_styles.fire 		:
							type.type.name === 'water' 			? types_styles.water 		:
							type.type.name === 'grass' 			? types_styles.grass 		:
							type.type.name === 'electric' 	? types_styles.electric :
							type.type.name === 'ice' 				? types_styles.ice 			:
							type.type.name === 'fighting' 	? types_styles.fighting :
							type.type.name === 'poison' 		? types_styles.poison 	:
							type.type.name === 'ground' 		? types_styles.ground 	:
							type.type.name === 'flying' 		? types_styles.flying 	:
							type.type.name === 'psychic' 		? types_styles.psychic 	:
							type.type.name === 'bug' 				? types_styles.bug 			:
							type.type.name === 'rock' 			? types_styles.rock 		:
							type.type.name === 'ghost' 			? types_styles.ghost 		:
							type.type.name === 'dark' 			? types_styles.dark 		:
							type.type.name === 'dragon' 		? types_styles.dragon 	:
							type.type.name === 'steel' 			? types_styles.steel 		:
							type.type.name === 'fairy' 			? types_styles.fairy 		:
							null
						}}
					>
						{fixName(type.type.name)}
					</p>
				</div>
			)}
		</div>
	)
}

export default Types
