import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetail.css';
import TopBanner from '../TopBanner/TopBanner';
import InfoCard from '../InfoCard/InfoCard';
import Description from '../Description/Description';

const LeagueDetail = () => {

  const {leagueId} = useParams();

  const [league, setLeague] = useState({});
  const { strTwitter, strFacebook, strYoutube } = league;
    
  
  
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

  return (
    <>
    
      {/* Top Banner */}
      <TopBanner league={league}></TopBanner>

      <div className="container py-3">
        {/* Info-Card */}
        <InfoCard league={league}></InfoCard>

        {/* Description */}
        <Description league={league}></Description>
      </div>

      {/* Footer Social Icons */}
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
    </>
  );
};

export default LeagueDetail;