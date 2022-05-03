import { React, useRef, useState } from "react";
import { auth } from "../utils/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
function Login() {
  const loginEmail = useRef();
  const loginPassword = useRef();
  const [error, setError] = useState(false);
  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail.current.value,
        loginPassword.current.value
      );
      console.log(user);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div>
      <div className="login-container">
        <div className="login">
          <h3>Se connecter</h3>
          <form onSubmit={(e) => handlerSubmit(e)}>
            <input
              type="email"
              placeholder="Email"
              require="true"
              ref={loginEmail}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              require="true"
              ref={loginPassword}
            />
            {error && <p>Email ou mot de passe incorrect</p>}
            <input type="submit" value="Se connecter" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
