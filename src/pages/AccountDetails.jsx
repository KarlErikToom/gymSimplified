import { onAuthStateChanged, updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

function AccountDetails() {
  const [authUser, setAuthUser] = useState(null);
  const [userData, setUserData] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [newUsername, setNewUsername] = useState("");

  async function updateUsername() {
    const hardcodedId = "BleYxA1sHT8aAwiUvRpo";
    const userRef = doc(db, "users", hardcodedId);
    const newName = {
      username: newUsername,
    };
    updateDoc(userRef, newName);
  }

  function toggleInput() {
    setShowInput(!showInput);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);

        const q = query(collection(db, "users"), where("id", "==", user.uid));

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
                <div className="detail__wrapper">
                  <span>{userData.email}</span>
                  <button className="btn">Edit</button>
                  <div className="line"></div>
                </div>
              </div>
              <div className="detail">
                <span className="detail-title">First Name</span>
                <div className="detail__wrapper">
                  <span>{userData.firstName}</span>
                  <button className="btn">Edit</button>
                  <div className="line"></div>
                </div>
              </div>
              <div className="detail">
                <span className="detail-title">Last Name</span>
                <div className="detail__wrapper">
                  <span>{userData.lastName}</span>
                  <button className="btn">Edit</button>
                  <div className="line"></div>
                </div>
              </div>
              <div className="detail">
                <span className="detail-title">Username</span>
                {!showInput ? (
                  <div className="detail__wrapper">
                    <span>{userData.username}</span>
                    <button className="btn" onClick={toggleInput}>
                      Edit
                    </button>
                    <div className="line"></div>
                  </div>
                ) : (
                  <div className="detail__wrapper">
                    <input
                      className="input input__details"
                      type="text"
                      value={newUsername}
                      onChange={(e) => setNewUsername(e.target.value)}
                      placeholder={userData.username}
                    />
                    <div className="buttons">
                      <button className="btn" onClick={updateUsername}>
                        Save
                      </button>
                      <button className="btn" onClick={toggleInput}>
                        Close
                      </button>
                    </div>
                    <div className="line"></div>
                  </div>
                )}
              </div>
              <div className="detail">
                <span className="detail-title">Password</span>
                <div className="detail__wrapper">
                  <span>Change your password</span>
                  <button className="btn">Edit</button>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountDetails;
