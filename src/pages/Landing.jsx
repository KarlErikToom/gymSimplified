import React, { lazy } from "react";
import winner from "../assets/winRed.svg";
import Hero from "../components/Hero";
import Info from "../components/Info";

function Landing() {
  return (
    <>
     <Hero />
     <Info/>
      <section id="results">
        <div className="container">
          <div className="row">
            <div className="results__wrapper">
              <div className="results__info">
                <h1 className="results__header">
                  Get into the best shape of your life
                </h1>
                <p className="results__para">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                  voluptate architecto voluptatum corporis fuga delectus sit
                  explicabo aliquam assumenda inventore, dolorem voluptas
                  consectetur recusandae quasi omnis repellendus accusamus ipsa
                  sunt?
                  <br /> <br /> Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Perspiciatis aut, laudantium pariatur itaque
                  vero ipsum doloremque dolor atque a beatae.
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
              <p className="footer__para">Copyright © 2023 Karl Erik Toom .</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Landing;
