import React, { useRef } from "react";
import { auth } from "../utils/firebase.config";

function Signup() {
  const registerEmail = useRef();
  const registerPassword = useRef();

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      auth.createUserWithEmailAndPassword(
        registerEmail.current.value,
        registerPassword.current.value
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signup-container">
      <div className="signup">
        <h3>S'inscrire</h3>
        <form
          onSubmit={(e) => {
            handleRegister(e);
          }}
        >
          <input type="text" placeholder="pseudo" />
          <input
            type="email"
            placeholder="Email"
            required
            ref={registerEmail}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            ref={registerPassword}
          />
          <input type="submit" value={"S'inscrire"} required />
        </form>
      </div>
    </div>
  );
}

export default Signup;
