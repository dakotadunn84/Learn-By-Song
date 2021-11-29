import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "../App.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import Song from "../Audio/I want your love.mp3";
import Line from "./Line";
import 我 from "./Vocab/我";
import 要 from "./Vocab/要";
import 你 from "./Vocab/你";
import 爱 from "./Vocab/爱";
import 不 from "./Vocab/不";
import 走 from "./Vocab/走";
import 过 from "./Vocab/过";
import 来 from "./Vocab/来";
import 说 from "./Vocab/说";
import 出 from "./Vocab/出";
import 只 from "./Vocab/只";
import 声 from "./Vocab/声";
import 肯 from "./Vocab/肯";
import 你的 from "./Vocab/你的";
import 为什么 from "./Vocab/为什么";

const useAudio = (url) => {
  const [audio] = useState(new Audio(Song));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <div className="col">
        <div className="row justify-content-center">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=41vF3wYN9S4"
            gender="neutral-gender"
          />
        </div>
        <div className="lookatmeborder">
          <h1 className="font-weight-light">我要你的爱 I want your love</h1>
          <Button className="mb-2" onClick={toggle}>
            {playing ? "Pause" : "Play Audio"}
          </Button>
          <Line>
            <我 columnSize="col-1of1" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of2" gender="neutral-gender" />
            <要 columnSize="col-1of2" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of3" gender="neutral-gender" />
            <要 columnSize="col-1of3" gender="neutral-gender" />
            <你 columnSize="col-1of3" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of4" gender="neutral-gender" />
            <要 columnSize="col-1of4" gender="neutral-gender" />
            <你的 columnSize="col-2of4" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of5" gender="neutral-gender" />
            <要 columnSize="col-1of5" gender="neutral-gender" />
            <你的 columnSize="col-2of5" gender="neutral-gender" />
            <爱 columnSize="col-1of5" gender="neutral-gender" />
          </Line>
          <Line>
            <你 columnSize="col-1of8" gender="neutral-gender" />
            <为什么 columnSize="col-3of8" gender="neutral-gender" />
            <不 columnSize="col-1of8" gender="neutral-gender" />
            <走 columnSize="col-1of8" gender="neutral-gender" />
            <过 columnSize="col-1of8" gender="neutral-gender" />
            <来 columnSize="col-1of8" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of1" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of2" gender="neutral-gender" />
            <要 columnSize="col-1of2" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of3" gender="neutral-gender" />
            <要 columnSize="col-1of3" gender="neutral-gender" />
            <你 columnSize="col-1of3" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of4" gender="neutral-gender" />
            <要 columnSize="col-1of4" gender="neutral-gender" />
            <你的 columnSize="col-2of4" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of5" gender="neutral-gender" />
            <要 columnSize="col-1of5" gender="neutral-gender" />
            <你的 columnSize="col-2of5" gender="neutral-gender" />
            <爱 columnSize="col-1of5" gender="neutral-gender" />
          </Line>
          <Line lineMeaning="Why don't you say it out loud?">
            <你 columnSize="col-1of8" gender="neutral-gender" />
            <为什么 columnSize="col-3of8" gender="neutral-gender" />
            <不 columnSize="col-1of8" gender="neutral-gender" />
            <说 columnSize="col-1of8" gender="neutral-gender" />
            <出 columnSize="col-1of8" gender="neutral-gender" />
            <来 columnSize="col-1of8" gender="neutral-gender" />
          </Line>
          <Line>
            <div className="col p-0 col-1of1">
              <Card className="text-white bg-dark">
                <CardBody className="p-0">
                  <CardTitle className="my-0">English Section</CardTitle>
                  <CardText className="my-0">
                    Listen to your mama and you never will regret it and if
                    anybody wonders you can tell them that I said it
                  </CardText>
                  <CardText className="my-0">
                    The only thing I know is that I never can forget you
                  </CardText>
                  <CardText className="my-0">
                    I've been longing for you baby ever since the day i met you
                  </CardText>
                  <CardText className="my-0">
                    I got you where I want you and I'm never gonna let you get
                    away from me
                  </CardText>
                  <CardText className="my-0">Hear what i tell you</CardText>
                  <CardText className="my-0">
                    I'm the girl for you so you better start to face it
                  </CardText>
                  <CardText className="my-0">
                    If I ever lose my love you know you never can replace it
                  </CardText>
                  <CardText className="my-0">
                    I think it's time for you to start to give me some loving
                  </CardText>
                  <CardText className="my-0">
                    Carrying a torch for you it's hotter than an oven
                  </CardText>
                  <CardText className="my-0">
                    It's time for you to give me a little tender love
                  </CardText>
                  <CardText className="my-0">
                    Baby hold me tight and do what I tell you
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </Line>
          <Line>
            <我 columnSize="col-1of1" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of2" gender="neutral-gender" />
            <要 columnSize="col-1of2" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of3" gender="neutral-gender" />
            <要 columnSize="col-1of3" gender="neutral-gender" />
            <你 columnSize="col-1of3" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of4" gender="neutral-gender" />
            <要 columnSize="col-1of4" gender="neutral-gender" />
            <你的 columnSize="col-2of4" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of5" gender="neutral-gender" />
            <要 columnSize="col-1of5" gender="neutral-gender" />
            <你的 columnSize="col-2of5" gender="neutral-gender" />
            <爱 columnSize="col-1of5" gender="neutral-gender" />
          </Line>
          <Line>
            <你 columnSize="col-1of8" gender="neutral-gender" />
            <为什么 columnSize="col-3of8" gender="neutral-gender" />
            <不 columnSize="col-1of8" gender="neutral-gender" />
            <走 columnSize="col-1of8" gender="neutral-gender" />
            <过 columnSize="col-1of8" gender="neutral-gender" />
            <来 columnSize="col-1of8" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of1" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of2" gender="neutral-gender" />
            <要 columnSize="col-1of2" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of3" gender="neutral-gender" />
            <要 columnSize="col-1of3" gender="neutral-gender" />
            <你 columnSize="col-1of3" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of4" gender="neutral-gender" />
            <要 columnSize="col-1of4" gender="neutral-gender" />
            <你的 columnSize="col-2of4" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of5" gender="neutral-gender" />
            <要 columnSize="col-1of5" gender="neutral-gender" />
            <你的 columnSize="col-2of5" gender="neutral-gender" />
            <爱 columnSize="col-1of5" gender="neutral-gender" />
          </Line>
          <Line>
            <你 columnSize="col-1of8" gender="neutral-gender" />
            <为什么 columnSize="col-3of8" gender="neutral-gender" />
            <不 columnSize="col-1of8" gender="neutral-gender" />
            <说 columnSize="col-1of8" gender="neutral-gender" />
            <出 columnSize="col-1of8" gender="neutral-gender" />
            <来 columnSize="col-1of8" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of6" gender="neutral-gender" />
            <爱 columnSize="col-1of6" gender="neutral-gender" />
            <你 columnSize="col-1of6" gender="neutral-gender" />
            <我 columnSize="col-1of6" gender="neutral-gender" />
            <爱 columnSize="col-1of6" gender="neutral-gender" />
            <你 columnSize="col-1of6" gender="neutral-gender" />
          </Line>
          <Line>
            <div className="col p-0 col-1of1">
              <Card className="text-white bg-dark">
                <CardBody className="p-0">
                  <CardTitle className="my-0">English Section</CardTitle>
                  <CardText className="my-0">
                    I'm the girl for you so you better start to face it
                  </CardText>
                  <CardText className="my-0">
                    If I ever lose my love you know you never can replace it
                  </CardText>
                  <CardText className="my-0">
                    I think it's time for you to start to give me some loving
                  </CardText>
                  <CardText className="my-0">
                    Carrying a torch for you it's hotter than an oven
                  </CardText>
                  <CardText className="my-0">
                    It's time for you to give me a little tender love
                  </CardText>
                  <CardText className="my-0">
                    Baby hold me tight and do what I tell you
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </Line>
          <Line>
            <我 columnSize="col-1of1" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of2" gender="neutral-gender" />
            <要 columnSize="col-1of2" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of3" gender="neutral-gender" />
            <要 columnSize="col-1of3" gender="neutral-gender" />
            <你 columnSize="col-1of3" gender="neutral-gender" />
          </Line>
          <Line>
            <我 columnSize="col-1of4" gender="neutral-gender" />
            <要 columnSize="col-1of4" gender="neutral-gender" />
            <你 columnSize="col-1of4" gender="neutral-gender" />
            <说 columnSize="col-1of4" gender="neutral-gender" />
          </Line>
          <Line>
            <只 columnSize="col-1of5" gender="neutral-gender" />
            <要 columnSize="col-1of5" gender="neutral-gender" />
            <说 columnSize="col-1of5" gender="neutral-gender" />
            <声 columnSize="col-1of5" gender="neutral-gender" />
            <爱 columnSize="col-1of5" gender="neutral-gender" />
          </Line>
          <Line>
            <你 columnSize="col-1of5" gender="neutral-gender" />
            <为什么 columnSize="col-3of5" gender="neutral-gender" />
            <不 columnSize="col-1of5" gender="neutral-gender" />
          </Line>
          <Line>
            <为什么 columnSize="col-3of4" gender="neutral-gender" />
            <不 columnSize="col-1of4" gender="neutral-gender" />
          </Line>
          <Line>
            <为什么 columnSize="col-3of6" gender="neutral-gender" />
            <不 columnSize="col-1of6" gender="neutral-gender" />
            <肯 columnSize="col-1of6" gender="neutral-gender" />
            <说 columnSize="col-1of6" gender="neutral-gender" />
          </Line>
        </div>
      </div>
    </div>
  );
};

export default Player;
