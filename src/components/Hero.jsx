import React from "react";

function Hero() {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="landing__wrapper">
            <h1 className="landing__header">Get fit now</h1>
            <h2 className="landing__subheader">
              Achieve your fitness goals with GymSimplified. Get access to a
              variety of gym exercises tailored to different muscle groups.
            </h2>
            <button className="btn">Join now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
