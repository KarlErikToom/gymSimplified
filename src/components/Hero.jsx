import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="landing__wrapper">
            <h1 className="landing__header">
              <div
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Get
              </div>
              <div
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Fit
              </div>
              <div
                data-aos="fade-down"
                data-aos-delay="1200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Now
              </div>
            </h1>
            <h2
              className="landing__subheader"
              data-aos="fade-right"
              data-aos-delay="1600"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Achieve your fitness goals with GymSimplified. Get access to a
              variety of gym exercises tailored to different muscle groups.
            </h2>
            <button
              className="btn"
              data-aos="fade"
              data-aos-delay="2400"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Join now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
