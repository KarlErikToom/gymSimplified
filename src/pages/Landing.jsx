import React from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Results from "../components/Results";

function Landing() {
  return (
    <>
      <Hero />
      <Info />
      <Results />
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
