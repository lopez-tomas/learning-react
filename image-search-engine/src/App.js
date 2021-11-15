import { Formik, Form, Field } from 'formik'
import './header.css'

const App = () => {
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async values => {
            // unsplash API calling
            console.log(values)
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
    </div>
  )
}

export default App
