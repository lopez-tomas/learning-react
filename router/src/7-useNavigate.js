import { Routes, Route, Link, useNavigate } from 'react-router-dom'

const App = () => {
	let navigate = useNavigate()
	//console.log(navigate)

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
				<button onClick={() => navigate(-1)}>Go back</button>
				<button onClick={() => navigate(1)}>Go forward</button>
				<button onClick={() => navigate("/happy-piggy")}>Push</button>
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
