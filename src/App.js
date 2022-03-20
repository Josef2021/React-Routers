import React, { Component, useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header.jsx";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div className="App">
        <Header />
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} />
        <Route path="/Profile">
          <Profile isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
 
