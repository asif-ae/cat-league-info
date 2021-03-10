import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";

function App() {
  const [league, setLeague] = useState([]);
  useEffect(() => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4328';
    fetch(url)
    .then(res => res.json())
    .then(data => setLeague(data.leagues[0]))
    .catch(err => console.log(err));
  }, []);
  console.log(league);
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    fetch(url)
    .then(res => res.json())
    .then(data => setLeagues(data.leagues))
    .catch(err => console.log(err));
  }, []);
  console.log(leagues);
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
