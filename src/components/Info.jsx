import React from "react";
import curl from "../assets/curl.jpg";

function Info() {
  return (
    <section id="info">
      <div className="container">
        <div className="row">
          <div className="info__wrapper">
            <figure className="info__figure">
              <img src={curl} alt="" className="info__img" />
            </figure>
            <div className="info__about">
              <h2 className="info__about--header">About Us</h2>
              <p className="info__about--para">
                At GymSimplified, we believe in simplifying your fitness
                journey. Our website provides a comprehensive collection of gym
                exercises for all fitness levels.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
