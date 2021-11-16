import { useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

const Redirect = ({ to }) => {
  let navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  })

  return null
};

const Portfolio = () => {
  const loggedIn = false

  if (!loggedIn) {
    return <Redirect path="/portfolio" push to="/" />
  }

  return (
    <h1>Portfolio</h1>
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
            <Link to="/perfil">Perfil</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<Redirect path="/" to="/home" />} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/perfil" element={<h1>Perfil</h1>} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
