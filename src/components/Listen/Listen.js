import React, { useState } from "react";
import ReactPlayer from "react-player";
import ListenButtons from "./listenButtons.js";
import "./Listen.css";

const Listen = () => {
  const [spotifyLinkState, setSpotifyLinkState] = useState(null);
  const [appleMusicLinkState, setAppleMusicLinkState] = useState(null);
  const [targetState, setTargetState] = useState("");

  //Function is a hack to stop android touch from taking you to the link before links are visible
  const streamingLink = (sLink, aLink) => {
    setSpotifyLinkState(null);
    setAppleMusicLinkState(null);
    setTargetState("");
    setTimeout(() => {
      setSpotifyLinkState(sLink);
      setAppleMusicLinkState(aLink);
      setTargetState("_blank");
    }, 500);
  };

  return (
    <div className="backgroundOverlay">
      <div className="contentContainer pt2">
        <div className="listenContainer">
          <div className="flex flex-wrap justify-around ">
            <div className="ma2 shadow-5 hidden br4 br--top">
              <h1 className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">
                Hitman
              </h1>
              <div
                onMouseOver={() =>
                  streamingLink(
                    "https://open.spotify.com/track/6Sw0HYzCN74V8IvYXAutK2?si=80DqeeKFTVG3zspmhgNfBA",
                    "https://music.apple.com/tr/album/hitman-single/1525808679"
                  )
                }
                id="Hitman"
                className="Tilt album center shadow-3 link"
                options={{ max: 20, axis: "x" }}
                style={{ height: 350, width: 350 }}
              >
                <div className="hide">
                  <ListenButtons
                    spotifyLinkState={spotifyLinkState}
                    appleMusicLinkState={appleMusicLinkState}
                    targetState={targetState}
                  />
                </div>
              </div>
            </div>

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
                onMouseOver={() =>
                  streamingLink(
                    "https://open.spotify.com/album/10YIVjl4wVBwMgVNeSb4Xn",
                    "https://music.apple.com/za/album/love-at-last/1092836741"
                  )
                }
                id="LoveAtLast"
                className="Tilt album center shadow-3 link"
                options={{ max: 20, axis: "x" }}
                style={{ height: 350, width: 350 }}
              >
                <div className="hide">
                  <ListenButtons
                    spotifyLinkState={spotifyLinkState}
                    appleMusicLinkState={appleMusicLinkState}
                    targetState={targetState}
                  />
                </div>
              </div>
            </div>

            <div className="ma2 shadow-5 hidden br4 br--top">
              <h1 className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">
                Move Your Things
              </h1>
              <div
                onMouseOver={() =>
                  streamingLink(
                    "https://open.spotify.com/album/38wVSoZt9hlMJZu8RzDXru",
                    "https://music.apple.com/za/album/move-your-things/651434215"
                  )
                }
                id="MoveYourThings"
                className="Tilt album center shadow-3 link"
                options={{ max: 20, axis: "x" }}
                style={{ height: 350, width: 350 }}
              >
                <div className="hide">
                  <ListenButtons
                    spotifyLinkState={spotifyLinkState}
                    appleMusicLinkState={appleMusicLinkState}
                    targetState={targetState}
                  />
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
