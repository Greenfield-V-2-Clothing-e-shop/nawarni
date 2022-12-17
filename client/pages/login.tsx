import React, { useState } from 'react'

import { useRouter } from "next/router";
import axios from 'axios'
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

   const router = useRouter()
  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email,
        password,

        //  await Router.push("/")
      })

      if(response.data.role === "ADMIN"){
        return router.push('admin/admin')
      }else {
      router.push('/')
    }

      // Handle successful login
      alert(response.data.message)
      console.log(response)
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div className="col-md-12 row ">
      <div className="card1 card-container">
      
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>
              Email:
              <input
                type="text"
                className="form-control"
                // error={error.email}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </div>
        
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary btn-block"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};






export default Login
