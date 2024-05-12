import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { app } from './Firebase'
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const auth = getAuth(app);
function App() {

  return (
    <div>
      <SignUp />
      <SignIn/>
    </div>
  )
}

export default App
