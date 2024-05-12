import React from 'react'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../Firebase'

const auth = getAuth(app);

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(value => console.log("Success"))
    .catch((err) => console.log(err));
  };

  return (
    <div className='signup-page'>
    <h1>Sign Up Page</h1>
       <label>Email</label><br />
       <input onChange={(e) => setEmail(e.target.value)}
           value={email}
           type="email" 
           placeholder='Please Enter Your Email'
           required
      /> <br/>
      <label>Password</label> <br />
      <input onChange={(e) => setPassword(e.target.value)}
           value={password} 
           type="password" 
           placeholder='Please Enter Your Password'
           required
      /> <br/><br/>
      <button onClick={loginUser}>Sign In</button>
  </div>
  )
}
export default SignIn;