import { memo } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Input from '../Input'

const MyForm = ({ onSubmit }) => {
  console.log('rendering my form')
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values)
    resetForm()
  }

  return (
    <Formik
      initialValues={{
        name: '',
        lastname: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        lastname: Yup.string().required('Required'),
      })}
    >
      <Form>
        <Input name="name" label="Name" />
        <Input name="lastname" label="Last name" />
        <button type='submit'>Send</button>
      </Form>
    </Formik>
  )
}

export default memo(MyForm)
