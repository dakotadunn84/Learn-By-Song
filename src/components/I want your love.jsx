import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "../App.css";
import {
  CardGroup,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import Song from "../Audio/I want your love.mp3";
import 我 from "./Vocab/我";
import 要 from "./Vocab/要";
import 你 from "./Vocab/你";
import 的 from "./Vocab/的";
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
          <ReactPlayer url="https://www.youtube.com/watch?v=41vF3wYN9S4" />
        </div>
        <div className="lookatmeborder">
          <h1 className="font-weight-light">我要你的爱 I want your love</h1>
          <Button className="mb-2" onClick={toggle}>
            {playing ? "Pause" : "Play Audio"}
          </Button>
          <CardGroup>
            <div className="col">
              <div className="row">
                <div className="col col-1of1 p-0">
                  <我 />
                </div>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row">
                <div className="col col-1of2 p-0">
                  <我 />
                </div>
                <div className="col col-1of2 p-0">
                  <要 />
                </div>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row">
                <div className="col col-1of3 p-0">
                  <我 />
                </div>
                <div className="col col-1of3 p-0">
                  <要 />
                </div>
                <div className="col col-1of3 p-0">
                  <你 />
                </div>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row">
                <div className="col col-1of4 p-0">
                  <我 />
                </div>
                <div className="col col-1of4  p-0">
                  <要 />
                </div>
                <div className="col col-2of4 ">
                  <div className="row card-width-split-2">
                    <你 />
                    <的 />
                  </div>
                  <div className="row card-width-split-1">
                    <你的 />
                  </div>
                </div>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row">
                <div className="col col-1of5 p-0">
                  <我 />
                </div>
                <div className="col col-1of5  p-0">
                  <要 />
                </div>
                <div className="col col-2of5 ">
                  <div className="row card-width-split-2">
                    <你 />
                    <的 />
                  </div>
                  <div className="row card-width-split-1">
                    <你的 />
                  </div>
                </div>
                <div className="col col-1of5  p-0">
                  <爱 />
                </div>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-6">
                <你 />
                <为什么 />
                <不 />
                <走 />
                <过 />
                <来 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-1">
                <我 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-2">
                <我 />
                <要 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-3">
                <我 />
                <要 />
                <你 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row">
                <div className="col card-width-split-2">
                  <div className="row">
                    <我 />
                    <要 />
                  </div>
                </div>
                <div className="col">
                  <div className="row card-width-split-2">
                    <你 />
                    <的 />
                  </div>
                  <div className="row card-width-split-1">
                    <你的 />
                  </div>
                </div>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row">
                <div className="col card-width-split-2">
                  <div className="row">
                    <我 />
                    <要 />
                  </div>
                </div>
                <div className="col">
                  <div className="row card-width-split-2">
                    <你 />
                    <的 />
                  </div>
                  <div className="row card-width-split-1">
                    <你的 />
                  </div>
                </div>
                <div className="col card-width-split-1">
                  <div className="row">
                    <爱 />
                  </div>
                </div>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-6">
                <你 />
                <为什么 />
                <不 />
                <说 />
                <出 />
                <来 />
              </div>
              <div className="row card-100">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">Line Meaning:</CardTitle>
                    <CardText className="my-0">
                      Why don't you say it out loud
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-1">
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
                      I've been longing for you baby ever since the day i met
                      you
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
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-1">
                <我 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-2">
                <我 />
                <要 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-3">
                <我 />
                <要 />
                <你 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row">
                <div className="col card-width-split-2">
                  <div className="row">
                    <我 />
                    <要 />
                  </div>
                </div>
                <div className="col">
                  <div className="row card-width-split-2">
                    <你 />
                    <的 />
                  </div>
                  <div className="row card-width-split-1">
                    <你的 />
                  </div>
                </div>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row">
                <div className="col card-width-split-2">
                  <div className="row">
                    <我 />
                    <要 />
                  </div>
                </div>
                <div className="col">
                  <div className="row card-width-split-2">
                    <你 />
                    <的 />
                  </div>
                  <div className="row card-width-split-1">
                    <你的 />
                  </div>
                </div>
                <div className="col card-width-split-1">
                  <div className="row">
                    <爱 />
                  </div>
                </div>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-6">
                <你 />
                <为什么 />
                <不 />
                <走 />
                <过 />
                <来 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-1">
                <我 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-2">
                <我 />
                <要 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-3">
                <我 />
                <要 />
                <你 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row">
                <div className="col card-width-split-2">
                  <div className="row">
                    <我 />
                    <要 />
                  </div>
                </div>
                <div className="col">
                  <div className="row card-width-split-2">
                    <你 />
                    <的 />
                  </div>
                  <div className="row card-width-split-1">
                    <你的 />
                  </div>
                </div>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row">
                <div className="col card-width-split-2">
                  <div className="row">
                    <我 />
                    <要 />
                  </div>
                </div>
                <div className="col">
                  <div className="row card-width-split-2">
                    <你 />
                    <的 />
                  </div>
                  <div className="row card-width-split-1">
                    <你的 />
                  </div>
                </div>
                <div className="col card-width-split-1">
                  <div className="row">
                    <爱 />
                  </div>
                </div>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-6">
                <你 />
                <为什么 />
                <不 />
                <说 />
                <出 />
                <来 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-6">
                <我 />
                <爱 />
                <你 />
                <我 />
                <爱 />
                <你 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-1">
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
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-1">
                <我 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-2">
                <我 />
                <要 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-3">
                <我 />
                <要 />
                <你 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-4">
                <我 />
                <要 />
                <你 />
                <说 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-5">
                <只 />
                <要 />
                <说 />
                <声 />
                <爱 />
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-9">
                <你 />
                <为什么 />
                <不 />
                <为什么 />
                <不 />
                <为什么 />
                <不 />
                <肯 />
                <说 />
              </div>
            </div>
          </CardGroup>
        </div>
      </div>
    </div>
  );
};

export default Player;
