import React from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <section id="signup">
      <div className="form-box">
        <form className="form" onSubmit={signIn}>
          <span className="title">Login</span>
          <span className="subtitle">Login to your existing account</span>
          <div className="form-container">
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="form-section">
          <p>
            dont have an account? <a href="">Sign Up</a>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
