import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import NewPlace from "./places/pages/NewPlace/NewPlace";
import UserPage from "./users/pages/UserPage/UserPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {/* anypath starts with / (i.e/hjfgcfe) will display User. To display only User when the path is
          / use exact.*/}
          <UserPage />
        </Route>

        <Route path="/places/new" exact>
          <NewPlace />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
