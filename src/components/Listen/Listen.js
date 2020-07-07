import React from 'react';
import ReactPlayer from 'react-player';
import Tilt from 'react-tilt';
import LoveAtLast from './LoveAtLast.jpg';
import MoveYourThings from './MoveYourThings.jpg';
import './Listen.css';

const Listen = () => {
  return (
    <div className="backgroundOverlay">
      <div className="contentContainer pt4">
        <div className="listenContainer">
          <div className="flex flex-wrap justify-around ">

            <div className="albumCard ma3 shadow-5 hidden br4 ">
              <p className="f4 bg-near-black white mv0 pv2 ph3 br4 br--top">
                Madosini
              </p>
              <iframe style={{border: "0", width: "350px", height: "350px"}}
                src="https://bandcamp.com/EmbeddedPlayer/track=1292036557/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" 
                seamless>
                <a href="http://nomadicorchestra.bandcamp.com/track/madosini">Madosini by Nomadic Orchestra</a>
                </iframe>
            </div>

            <div className="albumCard ma3 shadow-5 hidden br4 ">
              <p className="f4 bg-near-black white mv0 pv2 ph3 br4 br--top">
                Love At Last
              </p>
              <Tilt
                className="Tilt center shadow-3 link pointer"
                options={{ max: 20, axis: 'x' }}
                style={{ height: 350, width: 350 }}
              >
                <div className="Tilt-inner">
                  <img alt="" src={LoveAtLast} />
                </div>
              </Tilt>
            </div>

            <div className="albumCard ma3 shadow-5 hidden br4 ">
              <p className="f4 bg-near-black white mv0 pv2 ph3 br4 br--top">
                Move Your Things
              </p>
              <Tilt
                className="Tilt center shadow-3 link pointer"
                options={{ max: 20, axis: 'x' }}
                style={{ height: 350, width: 350 }}
              >
                <div className="Tilt-inner">
                  <img alt="" src={MoveYourThings} />
                </div>
              </Tilt>
            </div>
          </div>

          <div className="albumCard shadow-5 hidden br4 ma5">
            <p className="f4 bg-near-black white mv0 pv2 ph3 br4 br--top">
              Listen on Soundcloud
            </p>
            <div className=" ">
              <ReactPlayer
                className=""
                controls="true"
                width="100%"
                url="https://soundcloud.com/nomadicorchestra"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listen;
