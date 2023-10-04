import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

function Nav({ setIsSidebarOpen }) {
  const [authUser, setAuthUser] = useState(null);

  function toggleSidebar() {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  }

  function userSignOut() {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);
  return (
    <>
      <nav>
        <div className="nav__container">
          <div className="nav__logo--btn">
            <button onClick={toggleSidebar} className="menu__btn">
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </button>
            <Link to={"/"}>
              <img src={logo} alt="" className="nav__logo" />
            </Link>
          </div>
          <div className="nav__buttons">
            {authUser ? (
              <>
                <Link to={"/login"}>
                  <button className="btn" onClick={userSignOut}>
                    Sign Out
                  </button>
                </Link>
                <Link to={"/signup"}>
                  <button className="btn">{authUser.email}</button>
                </Link>
              </>
            ) : (
              <>
                <Link to={"/login"}>
                  <button className="btn">Login</button>
                </Link>
                <Link to={"/signup"}>
                  <button className="btn">Sign Up</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
