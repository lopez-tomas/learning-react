import { useFormik } from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      last_name: '',
      email: '',
    },
    onSubmit: values => console.log(values),
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Name</label>
      <input
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label>Last name</label>
      <input
        name="last_name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.last_name}
      />
      <label>Email</label>
      <input
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default App
