import { Routes, Route, Link, useLocation } from 'react-router-dom'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const App = () => {
	const query = useQuery()
	const piggy = query.get('piggy')
	const name = query.get('name')
	console.log({ piggy, name })

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/perfil" element={<h1>Perfil</h1>} />
					<Route path="*" element={<p>404: path not found</p>} />
        </Routes>
      </section>
    </div>
  )
}

export default App
