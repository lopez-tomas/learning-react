import { Formik, Form, Field, ErrorMessage } from 'formik'

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
  return (
		<Formik
			initialValues={{name: '', last_name: '', email: '',}}
			validate={validate}
			onSubmit={values => console.log(values)}
		>
			<Form>
				<label>Name</label>
				<Field name="name" type="text" />
				<ErrorMessage name="name" />
				<br />

				<label>Last name</label>
				<Field name="last_name" type="text" />
				<ErrorMessage name="last_name" />
				<br />

				<label>Email</label>
				<Field name="email" type="email" />
				<ErrorMessage name="email" />
				<br />

				<button type="submit">Send</button>
			</Form>
		</Formik>
  )
}

export default App
