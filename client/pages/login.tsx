import React, { useState } from 'react'


import { useRouter } from "next/router";
import axios from 'axios'
const Login = () => {
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  //  const router = useRouter()
  // async function handleLogin(event: React.FormEvent) {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post("http://localhost:5000/user/login", {
  //       email,
  //       password,

  //       //  await Router.push("/")
  //     })

  //     if(response.data.role === "ADMIN"){
  //       return router.push('admin/admin')
  //     }else {
  //     router.push('/')
  //   }

  //     // Handle successful login
  //     alert(response.data.message)
  //     console.log(response)
  //   } catch (error) {
  //     console.log(error);

  //   }
  // }
  const router = useRouter()

    const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
async function handleSubmit(event:any){

  try {
    event.preventDefault();

    const user = await axios.post("http://localhost:5000/user/login", {
      email,
      password,
    })
    if (email==="admin@gmail.com"){
      router.push('/admin/admin')
    }
    else {
      router.push("/")
       localStorage.setItem("token", user.data.token);
      localStorage.setItem("id", user.data.id);
    }
  } catch (error) {
    console.log(error);
    alert("bad cred");
  }
}

  return (
    <div className="backLogin">
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handleSubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Login</h3>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary" style={{background:"black", borderColor:"black"}}>
            Submit
          </button></div>
        <p className="forgot-password text-right mt-2">
           <a href="/signup">create account?</a>
        </p>
      </div>
    </form>
  </div>
  </div>
  );
};






export default Login
