import React from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function signIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  }
  return (
    <section id="signup">
      <div className="form-box">
        <form className="form" onSubmit={signIn}>
          <span className="title">Login</span>
          <span className="subtitle">Login to your existing account</span>
          {errorMessage && <div>{errorMessage}</div>}
          <div className="form-container">
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="form-section">
          <p>
            dont have an account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
