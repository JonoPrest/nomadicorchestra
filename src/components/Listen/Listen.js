import React from "react";
import ReactPlayer from "react-player";
import LoveAtLast from "./LoveAtLast.jpg";
import MoveYourThings from "./MoveYourThings.jpg";
import ListenOnSpotify from "./ListenOnSpotifyT.png";
import ListenOnAppleMusic from "./ListenOnAppleMusicT.png";
import "./Listen.css";

const Listen = () => {
  return (
    <div className="backgroundOverlay">
      <div className="contentContainer pt2">
        <div className="listenContainer">
          <div className="flex flex-wrap justify-around ">
            <div className="ma2 bg-black-30 shadow-5 hidden br4 br--top ">
              <p className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">
                Madosini
              </p>
              <iframe
                style={{ border: "0", width: "350px", height: "350px" }}
                src="https://bandcamp.com/EmbeddedPlayer/track=1292036557/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                seamless
              >
                <a href="http://nomadicorchestra.bandcamp.com/track/madosini">
                  Madosini by Nomadic Orchestra
                </a>
              </iframe>
            </div>

            <div className="ma2 shadow-5 hidden br4 br--top">
              <p className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">
                Love At Last
              </p>
              <div
                id="LoveAtLast"
                className="Tilt album center shadow-3 link"
                options={{ max: 20, axis: "x" }}
                style={{ height: 350, width: 350 }}
              >
                <div className="hide">
                  <a
                    href="https://open.spotify.com/album/10YIVjl4wVBwMgVNeSb4Xn"
                    target="_blank"
                  >
                    <img
                      className="listenButtons grow pointer"
                      src={ListenOnSpotify}
                    />
                  </a>
                  <a
                    href="https://music.apple.com/za/album/love-at-last/1092836741"
                    target="_blank"
                  >
                    <img
                      className="listenButtons grow pointer"
                      src={ListenOnAppleMusic}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="ma2 shadow-5 hidden br4 br--top">
              <p className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">
                Move Your Things
              </p>
              <div
                id="MoveYourThings"
                className="Tilt album center shadow-3 link"
                options={{ max: 20, axis: "x" }}
                style={{ height: 350, width: 350 }}
              >
                <div className="hide">
                  <a
                    href="https://open.spotify.com/album/38wVSoZt9hlMJZu8RzDXru"
                    target="_blank"
                  >
                    <img
                      className="listenButtons grow pointer"
                      src={ListenOnSpotify}
                    />
                  </a>
                  <a
                    href="https://music.apple.com/za/album/move-your-things/651434215"
                    target="_blank"
                  >
                    <img
                      className="listenButtons grow pointer"
                      src={ListenOnAppleMusic}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-5 hidden br4 ma5">
            <p className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">
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