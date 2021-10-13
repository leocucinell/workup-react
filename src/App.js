import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Intro from "./components/screens/intro/Intro";
import JobBoard from "./components/screens/jobBoard/JobBoard";
import AccountPage from "./components/screens/accountPage/AccountPage";
import ApplyJob from "./components/screens/applyJob/ApplyJob";
import CreateJob from "./components/screens/createJob/CreateJob";
import JobView from "./components/screens/JobView/JobView";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/jobs" component={JobBoard} />
        <Route path="/account" component={AccountPage} />
        <Route path="/apply" components={ApplyJob} />
        <Route path="/createJob" component={CreateJob} />
        <Route path="/jobView" component={JobView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
