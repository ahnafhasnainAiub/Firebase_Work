import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../Firebase'

const auth = getAuth(app);

const SignUp = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(value => alert('Success'));
  }
  
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
        <button onClick={createUser}>Sign Up</button>
    </div>
  )
}

export default SignUp;