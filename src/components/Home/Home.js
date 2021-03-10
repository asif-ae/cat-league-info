import React, { useEffect, useState } from "react";
import League from "../League/League";
import './Home.css';

const Home = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    const allLeaguesURL = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    fetch(allLeaguesURL)
    .then(res => res.json())
    .then(data => {
      const allLeagues = data.leagues;
      const twentyLeagues = allLeagues.slice(0, 15);
      setLeagues(twentyLeagues);
    })
    .catch(err => console.log(err));
  }, []);
  console.log(leagues);
  return (
    <main className="container">
      <div className="row">
        {
          leagues.map(league => {
            return <League
              league={league}
              key={league.idLeague}
            ></League>
          })
        }
      </div>
    </main>
  );
};

export default Home;