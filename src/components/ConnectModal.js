import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function ConnectModal() {
  const [signup, setSignup] = useState(true);
  const [signin, setSignin] = useState(false);
  return (
    <div className="connect-modal">
      <div className="header-btn">
        <button
          style={{
            backgroundColor: signup ? "rgb(28, 28, 28)" : "rgb(83, 83, 83)",
          }}
          onClick={() => {
            setSignup(true);
            setSignin(false);
          }}
        >
          S'inscrire
        </button>
        <button
          style={{
            backgroundColor: signin ? "rgb(28, 28, 28)" : "rgb(83, 83, 83)",
          }}
          onClick={() => {
            setSignup(false);
            setSignin(true);
          }}
        >
          Se connecter
        </button>
      </div>
      {signin ? <Login /> : <Signup />}
    </div>
  );
}

export default ConnectModal;
