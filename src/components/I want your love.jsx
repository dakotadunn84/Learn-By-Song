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
        <div className="row d-flex justify-content-center">
          <ReactPlayer url="https://www.youtube.com/watch?v=41vF3wYN9S4" />
        </div>
        <div className="lookatmeborder">
          <h1 className="font-weight-light">我要你的爱 I want your love</h1>
          <Button className="mb-2" onClick={toggle}>
            {playing ? "Pause" : "Play Audio"}
          </Button>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-1">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-2">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">要</CardTitle>
                    <CardText className="my-0">yào</CardText>
                    <CardText className="my-0">want</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-3">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">要</CardTitle>
                    <CardText className="my-0">yào</CardText>
                    <CardText className="my-0">want</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">你</CardTitle>
                    <CardText className="my-0">nǐ</CardText>
                    <CardText className="my-0">you</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row">
                <div className="col card-width-split-2">
                  <div className="row">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">我</CardTitle>
                        <CardText className="my-0">wǒ</CardText>
                        <CardText className="my-0">I</CardText>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">要</CardTitle>
                        <CardText className="my-0">yào</CardText>
                        <CardText className="my-0">want</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>
                <div className="col">
                  <div className="row card-width-split-2">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">你</CardTitle>
                        <CardText className="my-0">nǐ</CardText>
                        <CardText className="my-0">you</CardText>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">的</CardTitle>
                        <CardText className="my-0">de</CardText>
                        <CardText className="my-0">'s</CardText>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="row card-width-split-1">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">你的</CardTitle>
                        <CardText className="my-0">your</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col col-20 p-0">
              <Card className="text-white bg-dark">
                <CardBody className="p-0">
                  <CardTitle className="my-0">我</CardTitle>
                  <CardText className="my-0">wǒ</CardText>
                  <CardText className="my-0">I</CardText>
                </CardBody>
              </Card>
            </div>

            <div className="col col-20  p-0">
              <Card className="text-white bg-dark">
                <CardBody className="p-0">
                  <CardTitle className="my-0">要</CardTitle>
                  <CardText className="my-0">yào</CardText>
                  <CardText className="my-0">want</CardText>
                </CardBody>
              </Card>
            </div>

            <div className="col .col-40 ">
              <div className="row card-width-split-2">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">你</CardTitle>
                    <CardText className="my-0">nǐ</CardText>
                    <CardText className="my-0">you</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">的</CardTitle>
                    <CardText className="my-0">de</CardText>
                    <CardText className="my-0">'s</CardText>
                  </CardBody>
                </Card>
              </div>
              <div className="row card-width-split-1">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">你的</CardTitle>
                    <CardText className="my-0">your</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="col col-20  p-0">
              <Card className="text-white bg-dark">
                <CardBody className="p-0">
                  <CardTitle className="my-0">爱</CardTitle>
                  <CardText className="my-0">ài</CardText>
                  <CardText className="my-0">love</CardText>
                </CardBody>
              </Card>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-6">
                <Card className="col text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">你</CardTitle>
                    <CardText className="my-0">nǐ</CardText>
                    <CardText className="my-0">you</CardText>
                  </CardBody>
                </Card>

                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">为什么</CardTitle>
                    <CardText className="my-0">wèi shén me</CardText>
                    <CardText className="my-0">why</CardText>
                  </CardBody>
                </Card>

                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">不</CardTitle>
                    <CardText className="my-0">bù</CardText>
                    <CardText className="my-0">no</CardText>
                  </CardBody>
                </Card>
                <Card className="col text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">走</CardTitle>
                    <CardText className="my-0">zǒu</CardText>
                    <CardText className="my-0">walk</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">过</CardTitle>
                    <CardText className="my-0">guò</CardText>
                    <CardText className="my-0">come</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">来</CardTitle>
                    <CardText className="my-0">lái</CardText>
                    <CardText className="my-0">here</CardText>
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
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-2">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">要</CardTitle>
                    <CardText className="my-0">yào</CardText>
                    <CardText className="my-0">want</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-3">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">要</CardTitle>
                    <CardText className="my-0">yào</CardText>
                    <CardText className="my-0">want</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">你</CardTitle>
                    <CardText className="my-0">nǐ</CardText>
                    <CardText className="my-0">you</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row">
                <div className="col card-width-split-2">
                  <div className="row">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">我</CardTitle>
                        <CardText className="my-0">wǒ</CardText>
                        <CardText className="my-0">I</CardText>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">要</CardTitle>
                        <CardText className="my-0">yào</CardText>
                        <CardText className="my-0">want</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>
                <div className="col">
                  <div className="row card-width-split-2">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">你</CardTitle>
                        <CardText className="my-0">nǐ</CardText>
                        <CardText className="my-0">you</CardText>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">的</CardTitle>
                        <CardText className="my-0">de</CardText>
                        <CardText className="my-0">'s</CardText>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="row card-width-split-1">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">你的</CardTitle>
                        <CardText className="my-0">your</CardText>
                      </CardBody>
                    </Card>
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
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">我</CardTitle>
                        <CardText className="my-0">wǒ</CardText>
                        <CardText className="my-0">I</CardText>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">要</CardTitle>
                        <CardText className="my-0">yào</CardText>
                        <CardText className="my-0">want</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>
                <div className="col">
                  <div className="row card-width-split-2">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">你</CardTitle>
                        <CardText className="my-0">nǐ</CardText>
                        <CardText className="my-0">you</CardText>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">的</CardTitle>
                        <CardText className="my-0">de</CardText>
                        <CardText className="my-0">'s</CardText>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="row card-width-split-1">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">你的</CardTitle>
                        <CardText className="my-0">your</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>
                <div className="col card-width-split-1">
                  <div className="row">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">爱</CardTitle>
                        <CardText className="my-0">ài</CardText>
                        <CardText className="my-0">love</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-6">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle>你</CardTitle>
                    <CardText className="my-0">nǐ</CardText>
                    <CardText className="my-0">you</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">为什么</CardTitle>
                    <CardText className="my-0">wèi shén me</CardText>
                    <CardText className="my-0">why</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">不</CardTitle>
                    <CardText className="my-0">bù</CardText>
                    <CardText className="my-0">no</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">说</CardTitle>
                    <CardText className="my-0">shuō</CardText>
                    <CardText className="my-0">speak</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">出</CardTitle>
                    <CardText className="my-0">chū</CardText>
                    <CardText className="my-0">out</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">来</CardTitle>
                    <CardText className="my-0">lái</CardText>
                    <CardText className="my-0">here</CardText>
                  </CardBody>
                </Card>
              </div>
              <div className="row card-100">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">Line Meaning:</CardTitle>
                    <CardText className="my-0">
                      Why don't you say it out loud here
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
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-2">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">要</CardTitle>
                    <CardText className="my-0">yào</CardText>
                    <CardText className="my-0">want</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-3">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">要</CardTitle>
                    <CardText className="my-0">yào</CardText>
                    <CardText className="my-0">want</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">你</CardTitle>
                    <CardText className="my-0">nǐ</CardText>
                    <CardText className="my-0">you</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row">
                <div className="col card-width-split-2">
                  <div className="row">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">我</CardTitle>
                        <CardText className="my-0">wǒ</CardText>
                        <CardText className="my-0">I</CardText>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">要</CardTitle>
                        <CardText className="my-0">yào</CardText>
                        <CardText className="my-0">want</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>
                <div className="col">
                  <div className="row card-width-split-2">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">你</CardTitle>
                        <CardText className="my-0">nǐ</CardText>
                        <CardText className="my-0">you</CardText>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">的</CardTitle>
                        <CardText className="my-0">de</CardText>
                        <CardText className="my-0">'s</CardText>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="row card-width-split-1">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">你的</CardTitle>
                        <CardText className="my-0">your</CardText>
                      </CardBody>
                    </Card>
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
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">我</CardTitle>
                        <CardText className="my-0">wǒ</CardText>
                        <CardText className="my-0">I</CardText>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">要</CardTitle>
                        <CardText className="my-0">yào</CardText>
                        <CardText className="my-0">want</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>
                <div className="col">
                  <div className="row card-width-split-2">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">你</CardTitle>
                        <CardText className="my-0">nǐ</CardText>
                        <CardText className="my-0">you</CardText>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">的</CardTitle>
                        <CardText className="my-0">de</CardText>
                        <CardText className="my-0">'s</CardText>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="row card-width-split-1">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">你的</CardTitle>
                        <CardText className="my-0">your</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>
                <div className="col card-width-split-1">
                  <div className="row">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">爱</CardTitle>
                        <CardText className="my-0">ài</CardText>
                        <CardText className="my-0">love</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-6">
                <Card className="col text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">你</CardTitle>
                    <CardText className="my-0">nǐ</CardText>
                    <CardText className="my-0">you</CardText>
                  </CardBody>
                </Card>

                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">为什么</CardTitle>
                    <CardText className="my-0">wèi shén me</CardText>
                    <CardText className="my-0">why</CardText>
                  </CardBody>
                </Card>

                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">不</CardTitle>
                    <CardText className="my-0">bù</CardText>
                    <CardText className="my-0">no</CardText>
                  </CardBody>
                </Card>
                <Card className="col text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">走</CardTitle>
                    <CardText className="my-0">zǒu</CardText>
                    <CardText className="my-0">walk</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">过</CardTitle>
                    <CardText className="my-0">guò</CardText>
                    <CardText className="my-0">come</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">来</CardTitle>
                    <CardText className="my-0">lái</CardText>
                    <CardText className="my-0">here</CardText>
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
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-2">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">要</CardTitle>
                    <CardText className="my-0">yào</CardText>
                    <CardText className="my-0">want</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-3">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">要</CardTitle>
                    <CardText className="my-0">yào</CardText>
                    <CardText className="my-0">want</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">你</CardTitle>
                    <CardText className="my-0">nǐ</CardText>
                    <CardText className="my-0">you</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row">
                <div className="col card-width-split-2">
                  <div className="row">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">我</CardTitle>
                        <CardText className="my-0">wǒ</CardText>
                        <CardText className="my-0">I</CardText>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">要</CardTitle>
                        <CardText className="my-0">yào</CardText>
                        <CardText className="my-0">want</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>
                <div className="col">
                  <div className="row card-width-split-2">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">你</CardTitle>
                        <CardText className="my-0">nǐ</CardText>
                        <CardText className="my-0">you</CardText>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">的</CardTitle>
                        <CardText className="my-0">de</CardText>
                        <CardText className="my-0">'s</CardText>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="row card-width-split-1">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">你的</CardTitle>
                        <CardText className="my-0">your</CardText>
                      </CardBody>
                    </Card>
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
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">我</CardTitle>
                        <CardText className="my-0">wǒ</CardText>
                        <CardText className="my-0">I</CardText>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">要</CardTitle>
                        <CardText className="my-0">yào</CardText>
                        <CardText className="my-0">want</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>
                <div className="col">
                  <div className="row card-width-split-2">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">你</CardTitle>
                        <CardText className="my-0">nǐ</CardText>
                        <CardText className="my-0">you</CardText>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">的</CardTitle>
                        <CardText className="my-0">de</CardText>
                        <CardText className="my-0">'s</CardText>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="row card-width-split-1">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">你的</CardTitle>
                        <CardText className="my-0">your</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>
                <div className="col card-width-split-1">
                  <div className="row">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">爱</CardTitle>
                        <CardText className="my-0">ài</CardText>
                        <CardText className="my-0">love</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-6">
                <Card className="col text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">你</CardTitle>
                    <CardText className="my-0">nǐ</CardText>
                    <CardText className="my-0">you</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">为什么</CardTitle>
                    <CardText className="my-0">wèi shén me</CardText>
                    <CardText className="my-0">why</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">不</CardTitle>
                    <CardText className="my-0">bù</CardText>
                    <CardText className="my-0">no</CardText>
                  </CardBody>
                </Card>
                <Card className="col text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">说</CardTitle>
                    <CardText className="my-0">shuō</CardText>
                    <CardText className="my-0">speak</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">出</CardTitle>
                    <CardText className="my-0">chū</CardText>
                    <CardText className="my-0">out</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">来</CardTitle>
                    <CardText className="my-0">lái</CardText>
                    <CardText className="my-0">here</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-6">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">爱</CardTitle>
                    <CardText className="my-0">ài</CardText>
                    <CardText className="my-0">love</CardText>
                  </CardBody>
                </Card>
                <Card className="col text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">你</CardTitle>
                    <CardText className="my-0">nǐ</CardText>
                    <CardText className="my-0">you</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">爱</CardTitle>
                    <CardText className="my-0">ài</CardText>
                    <CardText className="my-0">love</CardText>
                  </CardBody>
                </Card>
                <Card className="col text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">你</CardTitle>
                    <CardText className="my-0">nǐ</CardText>
                    <CardText className="my-0">you</CardText>
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
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-2">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">要</CardTitle>
                    <CardText className="my-0">yào</CardText>
                    <CardText className="my-0">want</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-3">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">要</CardTitle>
                    <CardText className="my-0">yào</CardText>
                    <CardText className="my-0">want</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">你</CardTitle>
                    <CardText className="my-0">nǐ</CardText>
                    <CardText className="my-0">you</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-4">
                <Card className="col text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">我</CardTitle>
                    <CardText className="my-0">wǒ</CardText>
                    <CardText className="my-0">I</CardText>
                  </CardBody>
                </Card>
                <Card className="col text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">要</CardTitle>
                    <CardText className="my-0">yào</CardText>
                    <CardText className="my-0">want</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">你</CardTitle>
                    <CardText className="my-0">nǐ</CardText>
                    <CardText className="my-0">you</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">说</CardTitle>
                    <CardText className="my-0">shuō</CardText>
                    <CardText className="my-0">say</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-5">
                <Card className="col text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">只</CardTitle>
                    <CardText className="my-0">zhǐ</CardText>
                    <CardText className="my-0">only</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark" lass="col">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">要</CardTitle>
                    <CardText className="my-0">yào</CardText>
                    <CardText className="my-0">want</CardText>
                  </CardBody>
                </Card>

                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">说</CardTitle>
                    <CardText className="my-0">shuō</CardText>
                    <CardText className="my-0">say</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">声</CardTitle>
                    <CardText className="my-0">shēng</CardText>
                    <CardText className="my-0">noise</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">爱</CardTitle>
                    <CardText className="my-0">ài</CardText>
                    <CardText className="my-0">love</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup>
            <div className="col">
              <div className="row card-width-split-9">
                <Card className="col text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">你</CardTitle>
                    <CardText className="my-0">nǐ</CardText>
                    <CardText className="my-0">you</CardText>
                  </CardBody>
                </Card>

                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">为什么</CardTitle>
                    <CardText className="my-0">wèi shén me</CardText>
                    <CardText className="my-0">why</CardText>
                  </CardBody>
                </Card>

                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">不</CardTitle>
                    <CardText className="my-0">bù</CardText>
                    <CardText className="my-0">no</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">为什么</CardTitle>
                    <CardText className="my-0">wèi shén me</CardText>
                    <CardText className="my-0">why</CardText>
                  </CardBody>
                </Card>

                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">不</CardTitle>
                    <CardText className="my-0">bù</CardText>
                    <CardText className="my-0">no</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">为什么</CardTitle>
                    <CardText className="my-0">wèi shén me</CardText>
                    <CardText className="my-0">why</CardText>
                  </CardBody>
                </Card>

                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">不</CardTitle>
                    <CardText className="my-0">bù</CardText>
                    <CardText className="my-0">no</CardText>
                  </CardBody>
                </Card>
                <Card className="col text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">肯</CardTitle>
                    <CardText className="my-0">kěn</CardText>
                    <CardText className="my-0">willing</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">说</CardTitle>
                    <CardText className="my-0">shuō</CardText>
                    <CardText className="my-0">say</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
        </div>
      </div>
    </div>
  );
};

export default Player;
