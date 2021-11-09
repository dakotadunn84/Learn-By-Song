import React from "react";
import ReactPlayer from "react-player";
import "../App.css";

function About() {
  return (
    <div class="container-fliud" className="我要你的爱 I want your love">
      <div class="col">
        <div class="row" class="d-flex justify-content-center">
            <ReactPlayer url="https://www.youtube.com/watch?v=41vF3wYN9S4" />
          </div>
          <div class="col-lg-5" class="justify-content-center">
            <h1 class="font-weight-light">我要你的爱 I want your love</h1>
            <p>我</p>
            <p>我要</p>
            <p>我要你</p>
            <p>我要你的</p>
            <p>我要你的爱</p>
            <p>
              I'm the girl for you so you better start to face it If I ever lose
              my love you know you never can replace it It's time for you to
              start to give me some loving Carrying a torch for you it's hotter
              than an oven It's time for you to give me a little tender love
              Baby hold me tight and do what I tell you
            </p>
          </div>
      </div>
    </div>
  );
}

export default About;
