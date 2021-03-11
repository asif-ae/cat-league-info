import React from 'react';
import './Footer.css';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => {
  const { strTwitter, strFacebook, strYoutube } = props.league;

  // Dynamicly set url using Conditional (ternary) Formatting
  const twitterCondition = !strTwitter ? "www.twitter.com" : strTwitter;
  const twitter = `https://${twitterCondition}`;
  const facebookCondition = !strFacebook ? "www.facebook.com" : strFacebook;
  const facebook = `https://${facebookCondition}`;
  const youtubeCondition = !strYoutube ? "www.youtube.com" : strYoutube;
  const youtube = `https://${youtubeCondition}`;

  return (
    <footer className="text-center pb-5">
      {/* Font Awesome Social Media Icons */}
      <div className="footer-icon">
        <a href={twitter} target="_blank" rel="noreferrer">
          <span className="icon twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </a>
        <a href={facebook} target="_blank" rel="noreferrer">
          <span className="icon facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </span>
        </a>
        <a href={youtube} target="_blank" rel="noreferrer">
          <span className="icon youtube">
            <FontAwesomeIcon icon={faYoutube} />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;