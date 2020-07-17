import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallery.css";
 


import One from "../../assets/images/1.jpg";
import Two from "../../assets/images/2.jpg";
import Three from "../../assets/images/3.jpg";
import Four from "../../assets/images/4.jpg";
import Five from "../../assets/images/5.jpg";
import Six from "../../assets/images/6.jpg";
import Seven from "../../assets/images/7.jpg";
import Eight from "../../assets/images/8.jpg";
import Nine from "../../assets/images/9.jpg";
import Ten from "../../assets/images/10.jpg";
import Eleven from "../../assets/images/11.jpg";
import Twelve from "../../assets/images/12.jpg";
import Thirteen from "../../assets/images/13.jpg";

import Thumb1 from "../../assets/images/thumbnails/1_tn.jpg";
import Thumb2 from "../../assets/images/thumbnails/2_tn.jpg";
import Thumb3 from "../../assets/images/thumbnails/3_tn.jpg";
import Thumb4 from "../../assets/images/thumbnails/4_tn.jpg";
import Thumb5 from "../../assets/images/thumbnails/5_tn.jpg";
import Thumb6 from "../../assets/images/thumbnails/6_tn.jpg";
import Thumb7 from "../../assets/images/thumbnails/7_tn.jpg";
import Thumb8 from "../../assets/images/thumbnails/8_tn.jpg";
import Thumb9 from "../../assets/images/thumbnails/9_tn.jpg";
import Thumb10 from "../../assets/images/thumbnails/10_tn.jpg";
import Thumb11 from "../../assets/images/thumbnails/11_tn.jpg";
import Thumb12 from "../../assets/images/thumbnails/12_tn.jpg";
import Thumb13 from "../../assets/images/thumbnails/13_tn.jpg";


const images = [
  {
    original: One,
    thumbnail: Thumb1,
  },
  {
    original: Two,
    thumbnail: Thumb2,
  },
  {
    original: Three,
    thumbnail: Thumb3,
  },
  {
    original: Four,
    thumbnail: Thumb4,
  },
  {
    original: Five,
    thumbnail: Thumb5,
  },
  {
    original: Six,
    thumbnail: Thumb6,
  },
  {
    original: Seven,
    thumbnail: Thumb7,
  },
  {
    original: Eight,
    thumbnail: Thumb8,
  },
  {
    original: Nine,
    thumbnail: Thumb9,
  },
  {
    original: Ten,
    thumbnail: Thumb10,
  },
  {
    original: Eleven,
    thumbnail: Thumb11,
  },
  {
    original: Twelve,
    thumbnail: Thumb12,
  },
  {
    original: Thirteen,
    thumbnail: Thumb13,
  },
];

const Gallery = () => {
  return (
    <div className="backgroundOverlay">
      <div className="contentContainer">
        <div className="carouselContainer ph3" >
          <div className="carouselCard cardBG shadow-5 hidden dib br4 center mt3">
            <h1 className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">Gallery</h1>
              <ImageGallery items={images} autoPlay = {true} useBrowserFullscreen={false} slideDuration={800} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
