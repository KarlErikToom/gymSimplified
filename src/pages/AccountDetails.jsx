import { onAuthStateChanged, updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function AccountDetails() {
  const [authUser, setAuthUser] = useState(null);
  const [userData, setUserData] = useState([]);

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
    <section id="account">
      <div className="container">
        <div className="row">
          <div className="account__details">
            <h1 className="accountr__details--header">Account Details</h1>
            <div className="account__details--wrapper">
              <div className="detail">
                <span className="detail-title">Email</span>
                <span>{userData.email}</span>
                <div className="line"></div>
              </div>
              <div className="detail">
                <span className="detail-title">First Name</span>
                <span>{userData.firstName}</span>
                <div className="line"></div>
              </div>
              <div className="detail">
                <span className="detail-title">Last Name</span>
                <span>{userData.lastName}</span>
                <div className="line"></div>
              </div>
              <div className="detail">
                <span className="detail-title">Username</span>
                <span>{userData.username}</span>
                <div className="line"></div>
              </div>
              <div className="detail">
                <span className="detail-title">Password</span>
                <span>Change your password</span>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountDetails;
