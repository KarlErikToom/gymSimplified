import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate= useNavigate()

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
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message)
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
          {errorMessage && <div>{errorMessage}</div>}
          <div className="form-container">
            <div className="input__wrapper">
              <input
                type="text"
                className="input input-half"
                placeholder="first name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
              <input
                type="text"
                className="input input-half"
                placeholder="last name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </div>
            <input
              type="text"
              className="input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
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
          <button type="submit">Sign up</button>
        </form>
        <div className="form-section">
          <p>
            Already have an account? <Link to={"/login"}>Log in</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;
