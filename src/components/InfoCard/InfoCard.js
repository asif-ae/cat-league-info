import React from 'react';
import { faFlag, faFutbol, faMapMarkedAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import './InfoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import maleImage from './images/male.png';
import femaleImage from './images/female.png';

const InfoCard = (props) => {
  const { strLeague, dateFirstEvent, strCountry, strSport, strGender, strFanart2 } = props.league;

  // Conditional Formatting using IF ELSE statement
  let fanartImage;
  if (!strFanart2) {
    if (strGender === "Male") {
      fanartImage = maleImage;
    } else if (strGender === "Mixed" || strGender === "Female") {
      fanartImage = femaleImage;
    }
  } else {
    fanartImage = strFanart2;
  }

  return (
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
          <img src={fanartImage} alt={strLeague} className="round-20px" />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;