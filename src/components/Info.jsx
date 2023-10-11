import React from "react";
import curl from "../assets/curl-min.jpg";
import { useState } from "react";
import { Blurhash } from "react-blurhash";
import { useEffect } from "react";

function Info() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = curl;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);
  return (
    <section id="info">
      <div className="container">
        <div className="row">
          <div className="info__wrapper">
            <figure className="info__figure">
              {!imageLoaded ? (
                <Blurhash
                  hash="L06twK5l00~U00DO00xa1j^+?v%N"
                  style={{
                    width: "100%",
                    paddingBottom: '80%'
                  }}
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                />
              ) : (
                <img loading="lazy" src={curl} alt="" className="info__img" />
              )}
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
