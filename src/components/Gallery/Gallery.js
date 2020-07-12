import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="backgroundOverlay">
      <div className="contentContainer">
        <div className="carouselContainer">
          <div className="carouselCard cardBG shadow-5 hidden dib br4 center">
            <h1 className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">Gallery</h1>
            <Carousel autoPlay dynamicHeight showThumbs={false} infiniteLoop className="carousel flex"showArrows={true} >
                  <div>
                      <img src={require("../../assets/1.jpg")} />
                      <p className="legend">Legend 1</p>
                  </div>
                  <div>
                      <img src={require("../../assets/2.jpg")} />
                      <p className="legend">Legend 2</p>
                  </div>
                  <div>
                      <img src={require("../../assets/3.jpg")} />
                      <p className="legend">Legend 3</p>
                  </div>
                  <div>
                      <img src={require("../../assets/4.jpg")} />
                      <p className="legend">Legend 4</p>
                  </div>
                  <div>
                      <img src={require("../../assets/5.jpg")} />
                      <p className="legend">Legend 5</p>
                  </div>
                  <div>
                      <img src={require("../../assets/6.jpg")} />
                      <p className="legend">Legend 6</p>
                  </div>
              </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
