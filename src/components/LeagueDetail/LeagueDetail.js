import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetail.css';
import TopBanner from '../TopBanner/TopBanner';
import InfoCard from '../InfoCard/InfoCard';
import Description from '../Description/Description';
import Footer from '../Footer/Footer';

const LeagueDetail = () => {

  const {leagueId} = useParams();

  const [league, setLeague] = useState({});

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
      <Footer league={league}></Footer>
    </>
  );
};

export default LeagueDetail;