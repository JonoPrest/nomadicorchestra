import React from "react";
import ReactPlayer from "react-player";
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
              <h1 className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">
                Madosini
              </h1>
              <iframe
                title="Madosini"
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
              <h1 className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">
                Love At Last
              </h1>
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
                    rel="noopener noreferrer"
                  >
                    <img
                      className="listenButtons grow pointer"
                      src={ListenOnSpotify}
                      alt=""
                    />
                  </a>
                  <a
                    href="https://music.apple.com/za/album/love-at-last/1092836741"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="listenButtons grow pointer"
                      src={ListenOnAppleMusic}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="ma2 shadow-5 hidden br4 br--top">
              <h1 className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">
                Move Your Things
              </h1>
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
                    rel="noopener noreferrer"
                  >
                    <img
                      className="listenButtons grow pointer"
                      src={ListenOnSpotify}
                      alt=""
                    />
                  </a>
                  <a
                    href="https://music.apple.com/za/album/move-your-things/651434215"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="listenButtons grow pointer"
                      src={ListenOnAppleMusic}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-5 hidden br4 ma5">
            <h1 className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">
              Listen on Soundcloud
            </h1>
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