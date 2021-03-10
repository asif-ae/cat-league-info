import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faFutbol, faMapMarkedAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './LeagueDetail.css';

const LeagueDetail = () => {
  const {leagueId} = useParams();
  const [league, setLeague] = useState({});
  const {strBadge, strLeague, dateFirstEvent,
    strCountry, strSport, strGender,strFanart2,
    strDescriptionEN, strDescriptionES, strDescriptionDE, strDescriptionFR,
    strTwitter, strFacebook, strYoutube} = league;
  
  // Social Media link conditions and generate the link
  const twitterCondition = !strTwitter ? "www.twitter.com" : strTwitter;
  const twitter = `https://${twitterCondition}`;
  const facebookCondition = !strFacebook ? "www.facebook.com" : strFacebook;
  const facebook = `https://${facebookCondition}`;
  const youtubeCondition = !strYoutube ? "www.youtube.com" : strYoutube;
  const youtube = `https://${youtubeCondition}`;

  useEffect(() => {
    const singleLinkURL = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
    fetch(singleLinkURL)
    .then(res => res.json())
    .then(data => setLeague(data.leagues[0]))
    .catch(err => console.log(err));
  }, [leagueId]);
  console.log(league);

  // Conditional Formatting or Rendering
  const spanish = <p>{strDescriptionES}</p>;
  const french = <p>{strDescriptionFR}</p>;
  const german = <p>{strDescriptionDE}</p>;
  const spanishOrFrenchOrGerman = !strDescriptionES ? french : (!strDescriptionFR ? german : spanish);

  return (
    <>
      <div className="cover">
        <Link to="/">
          <img src={strBadge} className="image-thumbnail" alt={strLeague}></img>
        </Link>
      </div>
      <div className="container py-3">
        <div className="row bg-primary round-20px text-white p-3 d-flex align-items-center">
          <div className="col-md-6 p-3">
            <div className="league-info">
              <h3>{strLeague}</h3>
              <h4>
                <span className="pr-3">
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                </span>
                <span>Founded: {dateFirstEvent}</span>
              </h4>
              <h4>
                <span className="pr-3">
                  <FontAwesomeIcon icon={faFlag} />
                </span>
                <span>Country: {strCountry}</span>
              </h4>
              <h4>
                <span className="pr-3">
                  <FontAwesomeIcon icon={faFutbol} />
                </span>
                <span>Sport Type: {strSport}</span>
              </h4>
              <h4>
                <span className="pr-3">
                  <FontAwesomeIcon icon={faMars} />
                </span>
                <span>Gender: {strGender}</span>
              </h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="thumb p-3">
              <img src={strFanart2} alt={strLeague} className="round-20px" />
            </div>
          </div>
        </div>
        <div className="p-3 description">
          <p className="py-5">{strDescriptionEN}</p>
          {spanishOrFrenchOrGerman}
        </div>
        <footer className="text-center">
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
      </div>
    </>
  );
};

export default LeagueDetail;