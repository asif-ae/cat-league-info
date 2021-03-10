import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  // const [league, setLeague] = useState([]);
  // useEffect(() => {
  //   const url = 'https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4328';
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => setLeague(data.leagues[0]))
  //   .catch(err => console.log(err));
  // }, []);
  // console.log(league);
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
