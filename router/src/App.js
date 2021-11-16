import { Routes, Route, NavLink, useMatch, useLocation } from 'react-router-dom'

const Project = () => {
	const match = useMatch("/portfolio/:id")
	const { id } = match.params

	return (
		<h2>Project {id}</h2>
	)
};

const Portfolio = () => {
	const match = useMatch("/portfolio/*")

	return (
		<div>
			<h1>Portfolio</h1>
			<ul>
				<li>
					<NavLink
						style={({ isActive }) => ({
							color: isActive ? 'green' : 'blue' })
						}
						end 
						to={`${match.pathnameBase}/project-1`}>Project 1</NavLink>
				</li>
				<li>
					<NavLink 
						style={{ fontSize: 20 }}
						end
						to={`${match.pathnameBase}/project-2`}>Project 2</NavLink>
				</li>
			</ul>
			<div>
				<Routes>
					<Route path={":id"} element={<Project />} />
				</Routes>
			</div>
		</div>
	)
}

const App = () => {
	const match = useMatch("/*")
	const location = useLocation()
	let isActive = {match, location}
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink end to="/">Home</NavLink>
          </li>
          <li>
						<NavLink
							style={( { isActive } ) => (
								isActive
									? console.log(match, location)
									: null
							)}
							className={ isActive ? 'active' : '' }
							end
							to="/portfolio">Portfolio</NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element={<h1>Home</h1>} />
					<Route path="/portfolio/*" element={<Portfolio />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
