import React from "react";
import logo from "./monkey.png";


function Home() {
  return (
    <div className="Home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-12">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div class="col-lg-9">
            <h1 class="font-weight-light">Home</h1>
            <p>Learn Mandarin from the lyrics of popular songs at karaoke.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
