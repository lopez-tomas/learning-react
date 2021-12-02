import { fixName } from '../../pages/pokemon/[id]'

const Stats = ({ stats }) => {
	return (
		<div className="stats__container">
			<h1>Base Stats</h1>
			<ul>
				{stats.map(stat =>
					<li
						className="stat-item"
						key={stat.stat.name}
					>
						<span className="stat-item__name">{fixName(stat.stat.name)}: </span> 
						<span className="stat-item__value">{stat.base_stat}</span>
					</li>
				)}
			</ul>
		</div>
	)
}

export default Stats
