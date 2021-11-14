// Hooks
import useForm from '../hooks/useForm'

// Components
import Input from './Input'
import Button from './Button'

const UserForm = ({ submit }) => {
  const [form, handleChange, reset] = useForm({
    name: '',
    last_name: '',
    email: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(form)
    reset()
  };

	return (
    <form onSubmit={handleSubmit}>
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
	)
}

export default UserForm
