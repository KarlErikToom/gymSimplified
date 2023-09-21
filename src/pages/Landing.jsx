import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import train from "../assets/trainRed.svg";
import winner from "../assets/winRed.svg";

function Landing() {
  return (
    <>
      <div className="collumn">
        <section id="landing">
          <div className="container">
            <div className="row">
              <div className="landing__wrapper">
                <div className="landing__info">
                  <h1 className="landing__header">
                    Learn the basics of working out & start your{" "}
                    <span className="red">fitness journey</span>
                  </h1>
                  <div className="landing__info--checks">
                    <span className="landing__info--check">
                      {" "}
                      <FontAwesomeIcon icon="fa-solid fa-check" /> Workouts for each muscle group
                    </span>
                    <span className="landing__info--check">
                      {" "}
                      <FontAwesomeIcon icon="fa-solid fa-check" /> Nutrition guides
                    </span>
                    <span className="landing__info--check">
                      {" "}
                      <FontAwesomeIcon icon="fa-solid fa-check" /> Learn from hand-picked trainers
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
                    <h1 className="info__point--number red">1</h1>
                    <h3 className="info__point--title">Fresh Start</h3>
                    <p className="info__point--para">
                      You’re not alone in feeling stuck in a career that’s
                      unfulfilling. It’s time to make a change and start a new
                      chapter.
                    </p>
                  </div>
                  <div className="info__point">
                    <h1 className="info__point--number red">2</h1>
                    <h3 className="info__point--title">Fresh Start</h3>
                    <p className="info__point--para">
                      You’re not alone in feeling stuck in a career that’s
                      unfulfilling. It’s time to make a change and start a new
                      chapter.
                    </p>
                  </div>
                  <div className="info__point">
                    <h1 className="info__point--number red">3</h1>
                    <h3 className="info__point--title">Fresh Start</h3>
                    <p className="info__point--para">
                      You’re not alone in feeling stuck in a career that’s
                      unfulfilling. It’s time to make a change and start a new
                      chapter.
                    </p>
                  </div>
                  <div className="info__point">
                    <h1 className="info__point--number red">4</h1>
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
        <section id="results">
          <div className="container">
            <div className="row">
              <div className="results__wrapper">
                <div className="results__info">
                  <h1 className="results__header">
                    Get into the best shape of your life
                  </h1>
                  <p className="results__para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nam voluptate architecto voluptatum corporis fuga delectus
                    sit explicabo aliquam assumenda inventore, dolorem voluptas
                    consectetur recusandae quasi omnis repellendus accusamus
                    ipsa sunt?
                    <br /> <br /> Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Perspiciatis aut, laudantium pariatur
                    itaque vero ipsum doloremque dolor atque a beatae.
                  </p>
                </div>
                <figure className="results__figure">
                  <img className="results__img" src={winner} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer">
          <div className="footer__container">
            <div className="row">
              <div className="footer__wrapper">
                <p className="footer__para">
                  Copyright © 2023 Karl Erik Toom .
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Landing;
