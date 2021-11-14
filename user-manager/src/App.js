import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

function App() {
  const [form, handleChange] = useForm({
    name: '',
    last_name: '',
    email: '',
  })

  console.log(form)
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form>
            <Input
              label="Name" 
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              label="Last name"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
            />
            <Input
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <Button>Send</Button>
          </form>
        </div>
      </Card>
    </Container>
  )
}

export default App
