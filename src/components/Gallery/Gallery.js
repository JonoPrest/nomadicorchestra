import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallery.css";
import One from "../../assets/1.jpg";
import Two from "../../assets/2.jpg";
import Three from "../../assets/3.jpg";
import Four from "../../assets/4.jpg";
import Five from "../../assets/5.jpg";
import Six from "../../assets/6.jpg";



const images = [
  {
    original: One,
    thumbnail: One,
  },
  {
    original: Two,
    thumbnail: Two,
  },
  {
    original: Three,
    thumbnail: Three,
  },
  {
    original: Four,
    thumbnail: Four,
  },
  {
    original: Five,
    thumbnail: Five,
  },
  {
    original: Six,
    thumbnail: Six,
  },
];

const Gallery = () => {
  return (
    <div className="backgroundOverlay">
      <div className="contentContainer">
        <div className="carouselContainer ph3">
          <div className="carouselCard cardBG shadow-5 hidden dib br4 center mt3">
            <h1 className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">Gallery</h1>
              <ImageGallery style={{width: "100px"}} items={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
