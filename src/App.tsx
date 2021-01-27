import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './view/page/Home';
import Campaign from './view/page/Campaign';
import { ScrollToTop } from 'react-router-scroll-to-top';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/campaigns">
            <Campaign />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
