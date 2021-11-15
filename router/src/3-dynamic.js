import { Routes, Route, Link, useMatch, useParams } from 'react-router-dom'

const Project = () => {
	const match = useMatch("/portfolio/:id")
	const params = useParams()
	const { id } = match.params

	console.log({ match, params })
	return (
		<h2>Project {id}</h2>
	)
};

const Portfolio = () => {
	const match = useMatch("/portfolio/*")
	console.log({ match })

	return (
		<div>
			<h1>Portfolio</h1>
			<ul>
				<li>
					<Link to={`${match.pathnameBase}/project-1`}>Project 1</Link>
				</li>
				<li>
					<Link to={`${match.pathnameBase}/project-2`}>Project 2</Link>
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
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
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
