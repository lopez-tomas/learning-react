import { fixName } from '../../pages/pokemon/[id]'

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

export default Stats
