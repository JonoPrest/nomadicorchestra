import React from "react";
import ReactPlayer from "react-player";
import "./About.css";

const About = ({ onRouteChange, gigData }) => {
  return (
    <div className="backgroundOverlay">
      <div className="contentContainer pt2">
        <div className="aboutContainer pa3">
          <div className="aboutCard cardBG shadow-5 hidden br4 center">
            <p className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">About</p>
            <div className="flex flex-wrap justify-center center">
              <div className="youtubePlayer w-100">
                <ReactPlayer
                  className="react-player"
                  controls="true"
                  playing="true"
                  width="100%"
                  wrapper="div"
                  url="https://www.youtube.com/watch?v=NmWxg0AK9e8&feature=youtu.be"
                />
              </div>
              <div className=" youtubeText pa2 ">
                <p className="white center">
                  Nomadic Orchestra is a five-piece instrumental dance band
                  based in Cape Town. The primary goal of Nomadic Orchestra is
                  to get people moving. The band makes an infectious kind of
                  high-energy dance music - even the most prudish find
                  themselves unconsciously tapping their feet. Nomadic Orchestra
                  is strongly influenced by traditional music from the countries
                  of South-Eastern Europe: Macedonia, Romania and Serbia. They
                  are also influenced by Klezmer, gypsy and circus music as well
                  as contemporary western party music. Their musical training
                  brings a strong jazz aesthetic to the band, and thus an
                  emphasis on improvisation. The music that the Nomads play is
                  original and composed by members of the band.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
