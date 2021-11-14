import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card'

function App() {
  const [form, handleChange] = useForm({
    name: '',
    last_name: '',
  })

  console.log(form)
  return (
    <Card>
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
      </form>
    </Card>
  )
}

export default App
