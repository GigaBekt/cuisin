import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Css

import "./Css/style.scss";

// Pages
import Home from "./Pages/Home";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
