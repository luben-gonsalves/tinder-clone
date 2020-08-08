import React from "react";
import Header from "./Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import Chatscreen from "./Chatscreen";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <Chatscreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards></TinderCards>
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
