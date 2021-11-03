import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Learn By Song
          </Link>
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Eloping_to_the_moon" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Eloping_to_the_moon">
                  私奔到月球 Eloping to the Moon
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/I_want_your_love" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/I_want_your_love">
                  我要你的爱 I want your love
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
