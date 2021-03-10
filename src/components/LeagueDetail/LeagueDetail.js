import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faFutbol, faMapMarkedAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetail.css';

const LeagueDetail = () => {
  const {leagueId} = useParams();
  const [league, setLeague] = useState({});
  const {strLeague, dateFirstEvent, strCountry, strSport, strGender, strFanart2, strDescriptionEN, strDescriptionES, strFacebook} = league;
  const facebook = `https://${strFacebook}`;
  useEffect(() => {
    const singleLinkURL = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
    fetch(singleLinkURL)
    .then(res => res.json())
    .then(data => setLeague(data.leagues[0]))
    .catch(err => console.log(err));
  }, [leagueId]);
  console.log(league);
  return (
    <div className="container">
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
        <p>{strDescriptionES}</p>
      </div>
      <footer className="text-center">
        <a href={facebook}>
          <span className="icon twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </a>
        <a href={facebook}>
          <span className="icon facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </span>
        </a>
        <a href={facebook}>
          <span className="icon youtube">
            <FontAwesomeIcon icon={faYoutube} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default LeagueDetail;