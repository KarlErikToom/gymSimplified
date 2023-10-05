import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import winner from "../assets/winner.svg";
import bench from "../assets/bench.jpg";
import Slider from "react-slick";
import squat from "../assets/squat.jpg";
import scale from "../assets/scale.jpg";

function Results() {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase:"linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
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
            <figure className="results__slider">
              <Slider {...settings}>
                <div className="slide">
                  <div className="slide__content">
                    <img src={bench} alt="" />
                    <h1>Learn the movements</h1>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide__content">
                    <img src={squat} alt="" />
                    <h1>Get stronger</h1>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide__content">
                    <img src={scale} alt="" />
                    <h1>Learn to diet</h1>
                  </div>
                </div>
              </Slider>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
