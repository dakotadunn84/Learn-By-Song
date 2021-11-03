import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Song1, Song2, Contact } from "./components";
import ReactPlayer from "react-player";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Router>
            <Navigation />
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route
                path="/Eloping_to_the_moon"
                exact
                component={() => <Song1 />}
              />
              <Route
                path="/I_want_your_love"
                exact
                component={() => <Song2 />}
              />
            </Switch>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
