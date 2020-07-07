import React from 'react';
import fullLogo from './fullLogo1.png';
import About from '../About/About';
import Listen from '../Listen/Listen';
import Contact from '../Contact/Contact';
import GigDates from '../GigDates/GigDates';
import { SocialIcon } from 'tachyons-react-social-icons';

import './home.css';

const Home = ({ onRouteChange, route, googleData }) => {
  // const url = '//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn';

  

  return (
    <div>
      <div className="background">
        <div className="allNav flex flex-wrap items-center">
          {route === 'homePage' && (
            <img
              className="animate__animated animate__bounce logo"
              src={fullLogo}
              alt=""
            />
          )}
          <div className="nav flex flex-wrap justify-between ph3 mt1">
            {route !== 'homePage' && (
              <a
                onClick={() => onRouteChange('homePage')}
                className="navButton ma2 shadow-5 f6 link dim ba ph3 pv2 mb2 dib near-black"
                href="#0"
              >
                Home
              </a>
            )}

            {route !== 'aboutPage' && (
              <a
                className="navButton ma2 shadow-5 f6 link dim ba ph3 pv2 mb2 dib near-black"
                onClick={() => onRouteChange('aboutPage')}
                href="#0"
              >
                About
              </a>
            )}

            {route !== 'listenPage' && (
              <a
                className="navButton ma2 shadow-5 f6 link dim ba ph3 pv2 mb2 dib near-black"
                onClick={() => onRouteChange('listenPage')}
                href="#0"
              >
                Listen
              </a>
            )}

            {route !== 'contactPage' && (
              <a
                onClick={() => onRouteChange('contactPage')}
                className="navButton ma2 shadow-5 f6 link dim ba ph3 pv2 mb2 dib near-black"
                href="#0"
              >
                Contact
              </a>
            )}

            {route !== 'gigDatesPage' && (
              <a
                onClick={() => onRouteChange('gigDatesPage')}
                className="navButton ma2 shadow-5 f6 link dim ba ph3 pv2 mb2 dib near-black"
                href="#0"
              >
                Gig Dates
              </a>
            )}
          </div>
        </div>

        {route === 'contactPage' && <Contact />}
        {route === 'listenPage' && <Listen />}
        {route === 'aboutPage' && <About />}
        {route === 'gigDatesPage' && <GigDates googleData={googleData} />}

        <footer className="footer">
          <div className="social flex justify-between">
            <SocialIcon
              url="https://www.facebook.com/NomadicOrchestra/"
              color={route === 'homePage' ? "rgba(60,60,60,1)" : "black"}
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              url="https://www.instagram.com/nomadicorchestra/"
              color={route === 'homePage' ? "rgba(60,60,60,1)" : "black"}
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              url="https://www.youtube.com/channel/UCgMOgMDBY1tzjjyPRdwMlqA"
              color={route === 'homePage' ? "rgba(60,60,60,1)" : "black"}
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              url="https://open.spotify.com/artist/27EGFQK4v27KEpLcdJhORE"
              color={route === 'homePage' ? "rgba(60,60,60,1)" : "black"}
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              url="https://soundcloud.com/nomadicorchestra"
              color={route === 'homePage' ? "rgba(60,60,60,1)" : "black"}
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              network="email"
              url="mailto:info@nomadicorchestra.com"
              color={route === 'homePage' ? "rgba(60,60,60,1)" : "black"}
              style={{ height: 40, width: 40 }}
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
