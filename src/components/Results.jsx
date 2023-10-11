import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bench from "../assets/bench-min.jpg";
import Slider from "react-slick";
import squat from "../assets/squat-min.jpg";
import scale from "../assets/scale-min.jpg";
import steak from "../assets/steak-min.jpg";

function Results() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`custom-next-arrow ${className}`}
        style={{
          ...style,
          display: "block",
          right: "-5px",
          fontSize: "24px",
          zIndex: "1",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`custom-prev-arrow ${className}`}
        style={{ display: "block", left: "-5px", zIndex: "1" }}
        onClick={onClick}
      />
    );
  }
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
    cssEase: "linear",
    nextArrow: <SampleNextArrow className="my-custom-next-arrow" />,
    prevArrow: <SamplePrevArrow className="my-custom-next-arrow" />,
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
                    <img loading="lazy" src={bench} alt="" />
                    <h1>Learn the movements</h1>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide__content">
                    <img loading="lazy" src={squat} alt="" />
                    <h1>Get stronger</h1>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide__content">
                    <img loading="lazy" src={scale} alt="" />
                    <h1>Learn to diet</h1>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide__content">
                    <img loading="lazy" src={steak} alt="" />
                    <h1>Know what to eat</h1>
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
