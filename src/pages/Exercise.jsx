import React from "react";

function Exercise() {
  return (
    <section id="exercise">
        <div className="row">
          <div className="exercise__border">
            <div className="exercise__wrapper">
              <div className="exercise__video--wrapper">
                <iframe
                  className="exercise__video"
                  src="https://www.youtube.com/embed/-EIhKMDSjBY?si=QuyysWOe7_-nLKHd"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="exercise__info">
                <h2 className="exercise__trainer">Trainer</h2>
                <h2 className="exercise__description">Description</h2>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Exercise;
