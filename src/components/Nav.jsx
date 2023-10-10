import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import {
  QuerySnapshot,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function Nav({ setIsSidebarOpen }) {
  const [authUser, setAuthUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState([]);

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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);

        const q = query(
          collection(db, "users"),
          where("email", "==", user.email)
        );

        getDocs(q)
          .then((QuerySnapshot) => {
            QuerySnapshot.forEach((doc) => {
              const userData = doc.data();
              setUserData(userData);
            });
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      // Unsubscribe from the auth state change listener when the component unmounts
      unsubscribe();
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
                <button
                  className="user__btn btn"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {userData.username?.split("")[0].toString().toUpperCase()}
                </button>
                {dropdownOpen && (
                  <div className="nav__dropdown">
                    <ul className="nav__dropdown--list">
                      <Link to={"/details"} className="link">
                        {" "}
                        <li className="nav__dropdown--link">Account</li>
                      </Link>
                      <a href="" className="link" onClick={userSignOut}>
                        {" "}
                        <li className="nav__dropdown--link">Logout</li>
                      </a>
                    </ul>
                  </div>
                )}
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
