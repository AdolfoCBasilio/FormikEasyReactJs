import { Formik, Form, Field, ErrorMessage } from 'formik';
import Checkbox from './components/Checkbox';
import Select from './components/Select';
import TextInput from './components/TextInput';
import Radio from './components/Radio';

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Requerido'
  } else if (values.name.length < 5) {
    errors.name = 'el nombre es muy corto'
  }

  if (!values.lastname) {
    errors.lastname = 'Requerido'
  } else if (values.lastname.length < 5) {
    errors.lastname = 'el nombre es muy corto'
  }

  if (!values.email) {
    errors.email = 'Requerido'
  } else if (values.email.length < 5) {
    errors.email = 'el nombre es muy corto'
  }
  if(!values.radio){
    errors.radio='requerido'
  }
  return errors
}

function App() {

  return (
    <Formik
      initialValues={{ name: '', lastname: '', email: '',chancho:'',radio:''}}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Nombre" />
        <ErrorMessage name="name" />
        <br />

        <label>Apellido</label>
        <Field name="lastname" type="text" />
        <ErrorMessage name="lastname" />
        <br />

        <label>E-mail</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <br />
        <Select label="tipo de chancho" name="chancho">
          <option value="">Seleccione chancho</option>
          <option value="felipe">felipe</option>
          <option value="feliz">feliz</option>
          <option value="triste">triste</option>
        </Select>
        <Checkbox name="accept">
          Aceptar terminos y condiciones
        </Checkbox>
        <Radio name="radio" value="chanchito1" label="ch1"/>
        <Radio name="radio" value="chanchito2" label="ch2"/>
        <Radio name="radio" value="chanchito3" label="ch3"/>
        <ErrorMessage name="radio"/>
        <button type='submit'>Enviar</button>
      </Form>

    </Formik>
  );
}

export default App;
