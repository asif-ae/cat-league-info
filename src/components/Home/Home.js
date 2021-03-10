import React, { useEffect, useState } from "react";
import './Home.css';

const Home = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    const allLeaguesURL = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    fetch(allLeaguesURL)
    .then(res => res.json())
    .then(data => {
      const allLeagues = data.leagues;
      const twentyLeagues = allLeagues.slice(0, 20);
      setLeagues(twentyLeagues);
    })
    .catch(err => console.log(err));
  }, []);
  console.log(leagues);
  return (
    <>
      <h1>Leagues: {leagues.length}</h1>
      {
        leagues.map()
      }
    </>
  );
};

export default Home;