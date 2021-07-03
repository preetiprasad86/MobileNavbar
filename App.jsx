import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Group215 from "./components/Group215";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|310_183)">
          <Group215
            group86Props={group215Data.group86Props}
            carboncloseProps={group215Data.carboncloseProps}
            frame27Props={group215Data.frame27Props}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-3@2x.svg",
    whiteProps: whiteData,
};

const carboncloseData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/releases/60d5732641e2212c658d387b/img/vector-300@2x.svg",
};

const frame27Data = {
    unselected: "HOME",
    unselected2: "ABOUT US",
    unselected3: "PROJECTS",
    unselected4: "VIDEOS",
    unselected5: "INSIGHTS",
    unselected6: "BLOGS",
    unselected7: "FAQ’S",
    unselected8: "CONTACT US",
};

const group215Data = {
    group86Props: group86Data,
    carboncloseProps: carboncloseData,
    frame27Props: frame27Data,
};

