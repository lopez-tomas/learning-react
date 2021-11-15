import { Switch, Routes, Route, Link } from 'react-router-dom'

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
          <Route path="/portfolio" element={<h1>Portfolio</h1>} />
        </Routes>
      </section>
    </div>
  )
}

export default App
