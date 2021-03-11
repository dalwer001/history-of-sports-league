
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import LeagueDetail from './Components/LeagueDetail/LeagueDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/League/:idLeague">
            <LeagueDetail></LeagueDetail>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
