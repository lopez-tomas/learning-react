import { useFormik } from 'formik'

const validate = (values) => {
  const errors = {}

  if(!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 5) {
    errors.name = 'The name is too short.'
  }

  if(!values.last_name) {
    errors.last_name = 'Required'
  } else if (values.last_name.length < 5) {
    errors.last_name = 'The last name is too short.'
  }

  return errors
}

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      last_name: '',
      email: '',
    },
    validate, 
    onSubmit: values => console.log(values),
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Name</label>
      <input
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ?
        <div>{formik.errors.name}</div> : null}
      <br />
      <label>Last name</label>
      <input
        name="last_name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.last_name}
      />
      {formik.touched.last_name && formik.errors.last_name ?
        <div>{formik.errors.last_name}</div> : null}
      <br />
      <label>Email</label>
      <input
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ?
        <div>{formik.errors.email}</div> : null}
      <button type="submit">Send</button>
    </form>
  )
}

export default App
