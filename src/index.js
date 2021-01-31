import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import RepoPage from "./pages/RepoPage/RepoPage";
import AboutPage from './pages/AboutPage/AboutPage';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={RepoPage} />
      <Route path="/about-page" component={AboutPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
