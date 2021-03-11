import React from 'react';
import { Link } from 'react-router-dom';
import './TopBanner.css';

const TopBanner = (props) => {
  const { strLeague, strBadge, strBanner } = props.league;
  return (
    <div className="cover container-fluid">
      <Link to="/">
        <img src={strBadge} className="image-thumbnail" alt={strLeague}></img>
      </Link>
      <img src={strBanner} alt={strLeague} className="cover-image"/>
    </div>
  );
};

export default TopBanner;