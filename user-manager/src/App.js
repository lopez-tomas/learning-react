import { useState } from 'react'

// Components
import Card from './components/Card'
import Container from './components/Container'
import UserForm from './components/UserForm'

function App() {
  const [users, setUsers] = useState([])

  const submit = (user) => {
    setUsers([
      ...users,
      user,
    ])
  };

  console.log(users)
  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
          </div>
        </Card>
        <Card>
          <ul>
            {users.map(user =>
            <li key={user.email}>{`${user.name} ${user.last_name}: ${user.email}`}</li>)}
          </ul>
        </Card>
      </Container>
    </div>
  )
}

export default App
