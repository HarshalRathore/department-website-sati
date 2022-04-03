import React, { useState } from "react";
import ReactDOM from "react-dom";
import Login from "./components/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/css/style.min.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Router>
        <Switch>
          
          <Route exact path="/login">
            <Login/>
          </Route>

          <Route exact path="/">
            <Navbar />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
