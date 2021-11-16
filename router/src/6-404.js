import { Routes, Route, Link } from 'react-router-dom'

const App = () => {
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
