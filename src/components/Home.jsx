import React from "react";
import logo from "./monkey.png";


function Home() {
  return (
    <div className="Home">
      <div>
        <div class="col align-items-center">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <h1 class="font-weight-light">Home</h1>
            <p>Learn Mandarin from the lyrics of popular songs at karaoke.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
