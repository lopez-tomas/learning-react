import { Formik } from 'formik'

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
			{formik =>
				<form onSubmit={formik.handleSubmit}>
					<label>Name</label>
					<input type="text" {...formik.getFieldProps('name')}/>
					{formik.touched.name && formik.errors.name
						? <div>{formik.errors.name}</div>
						: null
					}
					<br />
					<label>Last name</label>
					<input type="text" {...formik.getFieldProps('last_name')}/>
					{formik.touched.last_name && formik.errors.last_name
						? <div>{formik.errors.last_name}</div>
						: null
					}
					<br />
					<label>Email</label>
					<input type="email" {...formik.getFieldProps('email')}/>
					{formik.touched.email && formik.errors.email
						? <div>{formik.errors.email}</div>
						: null
					}
					<button type="submit">Send</button>
				</form>
			}
		</Formik>
  )
}

export default App
