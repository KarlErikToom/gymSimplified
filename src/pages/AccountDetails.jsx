import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

function AccountDetails() {
  const [authUser, setAuthUser] = useState(null);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  //
  const [editUsername, setEditUsername] = useState(false);
  const [editFirstName, setEditFirstName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  async function updateUsername(e) {
    e.preventDefault();
    if (!authUser || !authUser.uid) {
      return;
    }
    const userQuery = query(
      collection(db, "users"),
      where("id", "==", authUser.uid)
    );
    try {
      const QuerySnapshot = await getDocs(userQuery);
      if (!QuerySnapshot.empty) {
        const userDoc = QuerySnapshot.docs[0];
        const userRef = doc(db, "users", userDoc.id);
        const newName = {
          username: newUsername,
        };
        await updateDoc(userRef, newName);

        window.location.reload();
      } else {
        console.log("No user document found with the matching user ID");
      }
    } catch (error) {
      console.error(error);
    }
  }
  async function updateFirstName(e) {
    e.preventDefault();
    if (!authUser || !authUser.uid) {
      return;
    }
    const userQuery = query(
      collection(db, "users"),
      where("id", "==", authUser.uid)
    );
    try {
      const QuerySnapshot = await getDocs(userQuery);
      if (!QuerySnapshot.empty) {
        const userDoc = QuerySnapshot.docs[0];
        const userRef = doc(db, "users", userDoc.id);
        const newName = {
          firstName: newFirstName,
        };
        await updateDoc(userRef, newName);

        window.location.reload();
      } else {
        console.log("No user document found with the matching user ID");
      }
    } catch (error) {
      console.error(error);
    }
  }
  async function updateLastName(e) {
    e.preventDefault();
    if (!authUser || !authUser.uid) {
      return;
    }
    const userQuery = query(
      collection(db, "users"),
      where("id", "==", authUser.uid)
    );
    try {
      const QuerySnapshot = await getDocs(userQuery);
      if (!QuerySnapshot.empty) {
        const userDoc = QuerySnapshot.docs[0];
        const userRef = doc(db, "users", userDoc.id);
        const newName = {
          lastName: newLastName,
        };
        await updateDoc(userRef, newName);

        window.location.reload();
      } else {
        console.log("No user document found with the matching user ID");
      }
    } catch (error) {
      console.error(error);
    }
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
            setLoading(false)
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
            {loading ? (
              <div className="account__details--wrapper">
                <div className="detail">
                  <span className="detail-title">Email</span>
                  <div className="detail__wrapper">
                    <div className=" skeleton skeleton__span"></div>
                    <div className="line"></div>
                  </div>
                </div>
                <div className="detail">
                  <span className="detail-title">First Name</span>
                  <div className="detail__wrapper">
                    <div className=" skeleton skeleton__span"></div>
                    <div className="line"></div>
                  </div>
                </div>
                <div className="detail">
                  <span className="detail-title">Last Name</span>
                  <div className="detail__wrapper">
                    <div className=" skeleton skeleton__span"></div>
                    <div className="line"></div>
                  </div>
                </div>

                <div className="detail">
                  <span className="detail-title">Username</span>
                  <div className="detail__wrapper">
                    <div className=" skeleton skeleton__span"></div>
                    <div className="line"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="account__details--wrapper">
                <div className="detail">
                  <span className="detail-title">Email</span>
                  <div className="detail__wrapper">
                    <span>{userData.email}</span>
                    <div className="line"></div>
                  </div>
                </div>
                <div className="detail">
                  <span className="detail-title">First Name</span>
                  <div className="detail__wrapper">
                    {editFirstName ? (
                      <form
                        action=""
                        onSubmit={updateFirstName}
                        className="detail__form"
                      >
                        <input
                          className="input input__details"
                          type="text"
                          value={newFirstName}
                          onChange={(e) => setNewFirstName(e.target.value)}
                          placeholder={userData.firstName}
                          required
                        />
                        <div className="buttons">
                          <button className="btn" type="submit">
                            Save
                          </button>
                          <button
                            className="btn red"
                            onClick={() => setEditFirstName(!editFirstName)}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    ) : (
                      <>
                        <span>{userData.firstName}</span>
                        <button
                          className="btn"
                          onClick={() => setEditFirstName(!editFirstName)}
                        >
                          Edit
                        </button>
                      </>
                    )}
                    <div className="line"></div>
                  </div>
                </div>
                <div className="detail">
                  <span className="detail-title">Last Name</span>
                  <div className="detail__wrapper">
                    {editLastName ? (
                      <form
                        action=""
                        onSubmit={updateLastName}
                        className="detail__form"
                      >
                        <input
                          className="input input__details"
                          type="text"
                          value={newLastName}
                          onChange={(e) => setNewLastName(e.target.value)}
                          placeholder={userData.lastName}
                          required
                        />
                        <div className="buttons">
                          <button className="btn" type="submit">
                            Save
                          </button>
                          <button
                            className="btn red"
                            onClick={() => setEditLastName(!editLastName)}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    ) : (
                      <>
                        <span>{userData.lastName}</span>
                        <button
                          className="btn"
                          onClick={() => setEditLastName(!editLastName)}
                        >
                          Edit
                        </button>
                      </>
                    )}
                    <div className="line"></div>
                  </div>
                </div>

                <div className="detail">
                  <span className="detail-title">Username</span>
                  <div className="detail__wrapper">
                    {editUsername ? (
                      <form
                        action=""
                        onSubmit={updateUsername}
                        className="detail__form"
                      >
                        <input
                          className="input input__details"
                          type="text"
                          value={newUsername}
                          onChange={(e) => setNewUsername(e.target.value)}
                          placeholder={userData.username}
                          required
                        />
                        <div className="buttons">
                          <button className="btn" type="submit">
                            Save
                          </button>
                          <button
                            className="btn red"
                            onClick={() => setEditUsername(!editUsername)}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    ) : (
                      <>
                        <span>{userData.username}</span>
                        <button
                          className="btn"
                          onClick={() => setEditUsername(!editUsername)}
                        >
                          Edit
                        </button>
                      </>
                    )}
                    <div className="line"></div>
                  </div>
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountDetails;
