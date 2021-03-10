import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const League = (props) => {
  const {strLeague, strSport, idLeague} = props.league;
  
  return (
    <div className="col-md-6 col-lg-4">
      <div className="p-3 text-center">
        <img src="" alt=""/>
        <h5>{strLeague}</h5>
        <p><small>Sports type: {strSport}</small></p>
        <Link to={`/league/${idLeague}`}>
          <Button variant="primary">
            <span className="p-3">Explore </span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default League;