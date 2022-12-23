import React,{useState} from 'react'
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import axios from 'axios';

function Signup() {
  const [name,setName]=useState<string>('')
  const [email,setEmail]=useState<string>('')
  const [password,setPassword]=useState<string>('')
  const [confirm, setConfirm]=useState<string>('')

  const router = useRouter();
  interface FormData {
    name: string;
    email: string;
    password: string;
    confirm: string;
  }
  const handleSubmit = async () => {
    try {
      // Make HTTP post request using Axios
      const response = await axios.post('http://localhost:5000/user/register', {
        name,
        email,
        password,
        confirm
      });

      // Handle success or failure
      router.push('/');
      console.log(response.data.message)
      // alert(response.data.message)
    }

    catch (error) {
      // Handle error
      // alert(error)
      console.log(error)

    }
  };
  return (

    <div className="backLogin">
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={(e)=>{ 
      e.preventDefault()
      handleSubmit()}} >
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign Up</h3>
        <div className="form-group mt-3">
          <label>Name :</label>
          <input
            type="name"
            className="form-control mt-1"
            placeholder="Enter your name"
            onChange={(e)=> setName(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Email address :</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password :</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Retype password :</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            onChange={(e)=>setConfirm(e.target.value)}
            
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary" style={{background:"black", borderColor:"black"}}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot <a href="#">password?</a>
        </p>
      </div>
    </form>
  </div>
  </div>

  )
}

export default Signup
