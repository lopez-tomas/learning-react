import { useState } from 'react'

// Hooks
import useForm from './hooks/useForm'

// Components
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

function App() {
  const [users, setUsers] = useState([])
  const [form, handleChange, reset] = useForm({
    name: '',
    last_name: '',
    email: '',
  })

  const submit = (e) => {
    e.preventDefault()
    setUsers([
      ...users,
      form
    ])
    reset()
  };

  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
              <Input
                label="Name" 
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
              />
              <Input
                label="Last name"
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                placeholder="Last name"
              />
              <Input
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <Button>Send</Button>
            </form>
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
