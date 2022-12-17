import React from 'react'
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import axios from 'axios';

function Signup() {
  const router = useRouter();
  interface FormData {
    name: string;
    email: string;
    password: string;
    confirm: string;
  }
  const handleSubmit = async (values: FormData) => {
    try {
      // Make HTTP post request using Axios
      const response = await axios.post('http://localhost:5000/user/register', values);

      // Handle success or failure
      router.push('/');
      alert(response.data.message)
    }

    catch (error) {
      // Handle error
      console.log(error)

    }
  };
  return (

    <Formik
      initialValues={{ name: '', email: '', password: '', confirm: '' }}

      onSubmit={handleSubmit}
    >
      {(formikProps: FormikProps<FormData>) => (
        <div className="col-md-12 row ">
          <div className="card1 card-container">
            <Form>
              <div className="form-group ">
                <Field name="name" className="form-control" type="name" placeholder="name" />
              </div>
              <div>
                <Field name="email" className="form-control" type="email" placeholder="Email" />
              </div>
              <ErrorMessage name="email" />
              <div>
                <Field name="password" className="form-control" type="password" placeholder="Password" />
              </div>
              <div>
                <Field name="confirm" type="password" className="form-control" placeholder="confirm" />
              </div>
              <ErrorMessage name="password" />

              <button type="submit" className="btn btn-primary btn-block" disabled={!formikProps.isValid || formikProps.isSubmitting}>
                Sign up
              </button>
            </Form>
          </div>
        </div>
      )}
    </Formik>

  )
}

export default Signup
