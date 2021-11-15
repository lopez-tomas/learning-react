import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextInput from './components/TextInput'
import Checkbox from './components/Checkbox'
import Select from './components/Select'

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
			initialValues={{name: '', last_name: '', email: '', select: '', pig: ''}}
			validate={validate}
			onSubmit={values => console.log(values)}
		>
			<Form>
				<TextInput name="name" label="Name" />
				{/*
				<Field name="select" as="select" className="input">
					<option value="">-- Select --</option>
					<option value="happy_piggy">Happy piggy</option>
					<option value="sad_piggy">Sad piggy</option>
				</Field>
				<ErrorMessage name="select" />
				*/}
				<br />

				<TextInput name="last_name" label="Last name" />
				<br />

				<TextInput name="email" label="Email" />
				<br />

				<Select name="pig" label="Pig type">
					<option value="">-- Select pig --</option>
					<option value="felipe">Felipe</option>
					<option value="happy_piggy">Happy piggy</option>
					<option value="sad_piggy">Sad piggy</option>
				</Select>

				<Checkbox name="accept">
					Accept terms and conditions
				</Checkbox>
				<br />

				<button type="submit">Send</button>
			</Form>
		</Formik>
  )
}

export default App
