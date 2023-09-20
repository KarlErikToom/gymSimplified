import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import train from "../assets/training.svg";

function Landing() {
  return (
    <>
      <div className="collumn">
        <section className="landing">
          <div className="container">
            <div className="row">
              <div className="landing__wrapper">
                <div className="landing__info">
                  <h1 className="landing__header">
                    Learn the basics of working out & start your fitness journey
                  </h1>
                  <div className="landing__info--checks">
                    <span className="landing__info--check">
                      {" "}
                      <FontAwesomeIcon icon="fa-solid fa-check" /> PLACEHOLDER
                    </span>
                    <span className="landing__info--check">
                      {" "}
                      <FontAwesomeIcon icon="fa-solid fa-check" /> PLACEHOLDER
                    </span>
                    <span className="landing__info--check">
                      {" "}
                      <FontAwesomeIcon icon="fa-solid fa-check" /> PLACEHOLDER
                    </span>
                  </div>
                  <button className="btn">Learn More</button>
                </div>
                <figure className="landing__figure">
                  <img src={train} alt="" className="landing__img" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section id="info">
          <div className="container">
            <div className="row">
              <div className="info__wrapper">
                <div className="info__info">
                  <h1 className="info__header">
                    What you are going to learn from us
                  </h1>
                  <p className="info__extra">You will be in good hands</p>
                </div>
                <div className="info__points">
                  <div className="info__point">
                    <h1 className="info__point--number">1</h1>
                    <h3 className="info__point--title">Fresh Start</h3>
                    <p className="info__point--para">
                      You’re not alone in feeling stuck in a career that’s
                      unfulfilling. It’s time to make a change and start a new
                      chapter.
                    </p>
                  </div>
                  <div className="info__point">
                    <h1 className="info__point--number">1</h1>
                    <h3 className="info__point--title">Fresh Start</h3>
                    <p className="info__point--para">
                      You’re not alone in feeling stuck in a career that’s
                      unfulfilling. It’s time to make a change and start a new
                      chapter.
                    </p>
                  </div>
                  <div className="info__point">
                    <h1 className="info__point--number">1</h1>
                    <h3 className="info__point--title">Fresh Start</h3>
                    <p className="info__point--para">
                      You’re not alone in feeling stuck in a career that’s
                      unfulfilling. It’s time to make a change and start a new
                      chapter.
                    </p>
                  </div>
                  <div className="info__point">
                    <h1 className="info__point--number">1</h1>
                    <h3 className="info__point--title">Fresh Start</h3>
                    <p className="info__point--para">
                      You’re not alone in feeling stuck in a career that’s
                      unfulfilling. It’s time to make a change and start a new
                      chapter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Landing;
