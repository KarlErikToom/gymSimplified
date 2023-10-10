import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function register(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          firstName: firstname,
          lastName: lastname,
          username: username,
          email: email,
          id: user.uid,
        };
        addDoc(collection(db, "users"), userData);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <section id="signup">
      <div className="form-box">
        <form className="form" onSubmit={register}>
          <span className="title">Sign up</span>
          <span className="subtitle">
            Create a free account with your email.
          </span>
          <div className="form-container">
            <div className="input__wrapper">
              <input
                type="text"
                className="input input-half"
                placeholder="first name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                type="text"
                className="input input-half"
                placeholder="last name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <input
              type="text"
              className="input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
