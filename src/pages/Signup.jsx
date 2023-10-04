import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signUp(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
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
        <form className="form" onSubmit={signUp}>
          <span className="title">Sign up</span>
          <span className="subtitle">
            Create a free account with your email.
          </span>
          <div className="form-container">
            <input type="text" className="input" placeholder="Username" />
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
          <button type="submit">Sign up</button>
        </form>
        <div className="form-section">
          <p>
            Already have an account? <a href="">Log in</a>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;
