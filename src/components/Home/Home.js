import React from "react";
import fullLogo from "./logo.png";
import About from "../About/About";
import Listen from "../Listen/Listen";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import GigDates from "../GigDates/GigDates";
import { SocialIcon } from "react-social-icons";

import "./home.css";

const Home = ({ onRouteChange, route, googleData,}) => {
  
  let upcomingGigsTotal = 0;

  if (googleData.length > 1) {
    for (let i = 0; i < googleData.length; i++) {
      const today = new Date();
      const eventDate = new Date(googleData[i].Date);
      const todayTime = today.getTime();
      const eventDateTime = eventDate.getTime() + 86400000;

      if (todayTime <= eventDateTime) {
        upcomingGigsTotal += 1;
      }
    }
  }

  return (
    <div>
      <div className="background">
        <div className="allNav flex flex-wrap items-center">
          {route === "homePage" && (
            <img
              className="logo animate__animated animate__bounce"
              src={fullLogo}
              alt=""
            />
          )}
          <div className="nav flex justify-between ph3 mt1 ">
            {route !== "homePage" && (
              <a
                onClick={() => onRouteChange("homePage")}
                className="navButton ma1 shadow-5 f6 link dim ba ph3 pv2 mb2 near-black pointer"
              >
                Home
              </a>
            )}

            {route !== "aboutPage" && (
              <a
                className="navButton ma1 shadow-5 f6 link dim ba ph3 pv2 mb2 near-black pointer"
                onClick={() => onRouteChange("aboutPage")}
              >
                About
              </a>
            )}

            {route !== "listenPage" && (
              <a
                className="navButton ma1 shadow-5 f6 link dim ba ph3 pv2 mb2 near-black pointer"
                onClick={() => onRouteChange("listenPage")}
              >
                Listen
              </a>
            )}

            {route !== "contactPage" && (
              <a
                onClick={() => onRouteChange("contactPage")}
                className="navButton ma1 shadow-5 f6 link dim ba ph3 pv2 mb2 near-black pointer"
              >
                Contact
              </a>
            )}

            {route !== "galleryPage" && (
              <a
                onClick={() => onRouteChange("galleryPage")}
                className="navButton ma1 shadow-5 f6 link dim ba ph3 pv2 mb2 near-black pointer"
              >
                Gallery
              </a>
            )}

            {route !== "gigDatesPage" && upcomingGigsTotal > 0 && (
              <a
                onClick={() => onRouteChange("gigDatesPage")}
                className="navButton ma1 shadow-5 f6 link dim ba  pv2 mb2 dib near-black pointer"
              >
                Gig Dates
              </a>
            )}
          </div>
        </div>

        {route === "contactPage" && <Contact />}
        {route === "listenPage" && <Listen />}
        {route === "aboutPage" && <About />}
        {route === "galleryPage" && <Gallery />}
        {route === "gigDatesPage" && <GigDates googleData={googleData} />}

        <footer className="footer">
          <div className="social flex justify-between">
            <SocialIcon
              url="https://www.facebook.com/NomadicOrchestra/"
              bgColor={route === "homePage" ? "rgba(60,60,60,1)" : "black"}
              style={{ height: 40, width: 40 }}
              target="_blank"
            />
            <SocialIcon
              url="https://www.instagram.com/nomadicorchestra/"
              bgColor={route === "homePage" ? "rgba(60,60,60,1)" : "black"}
              style={{ height: 40, width: 40 }}
              target="_blank"
            />
            <SocialIcon
              url="https://www.youtube.com/channel/UCgMOgMDBY1tzjjyPRdwMlqA"
              bgColor={route === "homePage" ? "rgba(60,60,60,1)" : "black"}
              style={{ height: 40, width: 40 }}
              target="_blank"
            />
            <SocialIcon
              url="https://music.apple.com/za/artist/nomadic-orchestra/651434219"
              network="itunes"
              bgColor={route === "homePage" ? "rgba(60,60,60,1)" : "black"}
              style={{ height: 40, width: 40 }}
              target="_blank"
            />
            <SocialIcon
              url="https://open.spotify.com/artist/27EGFQK4v27KEpLcdJhORE"
              bgColor={route === "homePage" ? "rgba(60,60,60,1)" : "black"}
              style={{ height: 40, width: 40 }}
              target="_blank"
            />
            <SocialIcon
              url="https://soundcloud.com/nomadicorchestra"
              bgColor={route === "homePage" ? "rgba(60,60,60,1)" : "black"}
              style={{ height: 40, width: 40 }}
              target="_blank"
            />
            <SocialIcon
              network="email"
              url="mailto:info@nomadicorchestra.com"
              bgColor={route === "homePage" ? "rgba(60,60,60,1)" : "black"}
              style={{ height: 40, width: 40 }}
              target="_blank"
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;