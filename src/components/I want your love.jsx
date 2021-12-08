import React from "react";
import ReactPlayer from "react-player";
import "../App.css";
import { Card, CardBody, CardTitle, CardText, CardGroup } from "reactstrap";
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

class Song2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      settingDisplayYouTube: true,
      settingDisplaySpotify: false,
      settingDisplayTraditional: true,
      settingDisplaySimplified: true,
      settingDisplayPinyin: true,
      settingDisplayEnglish: true,
      settingDisplayHSK2: false,
      settingDisplayHSK3: false,
      settingDisplaySingerColor: false,
    };
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col col-xl-7 p-4">
          <div className="lookatmeborder">
            <h1 className="font-weight-light">我要你的爱</h1>
            <h1 className="font-weight-light">葛蘭</h1>
            <h1 className="font-weight-light">I want your love</h1>
            <h1 className="font-weight-light">Grace Chang</h1>
            <div>
              <CardGroup className="my-1">
                <Card className="text-white bg-dark">
                  <CardBody className="p-0">
                    <CardTitle className="my-0">Display Settings</CardTitle>
                    <CardText className="my-0">
                      <h4>
                        <label>
                          <input
                            type="checkbox"
                            value="settingDisplayYouTube"
                            defaultChecked={this.state.settingDisplayYouTube}
                            onChange={(e) =>
                              this.setState((prevState) => ({
                                settingDisplayYouTube:
                                  !prevState.settingDisplayYouTube,
                              }))
                            }
                          />{" "}
                          YouTube Video
                        </label>
                      </h4>
                      <h4>
                        <label>
                          <input
                            type="checkbox"
                            value="settingDisplaySpotify"
                            defaultChecked={this.state.settingDisplaySpotify}
                            onChange={(e) =>
                              this.setState((prevState) => ({
                                settingDisplaySpotify:
                                  !prevState.settingDisplaySpotify,
                              }))
                            }
                          />{" "}
                          Spotify Audio
                        </label>
                      </h4>
                      <h4>
                        <label>
                          <input
                            type="checkbox"
                            value="settingDisplayPinyin"
                            defaultChecked={this.state.settingDisplayPinyin}
                            onChange={(e) =>
                              this.setState((prevState) => ({
                                settingDisplayPinyin:
                                  !prevState.settingDisplayPinyin,
                              }))
                            }
                          />{" "}
                          Pinyin
                        </label>
                      </h4>
                      <h4>
                        <label>
                          <input
                            type="checkbox"
                            value="settingDisplayEnglish"
                            defaultChecked={this.state.settingDisplayEnglish}
                            onChange={(e) =>
                              this.setState((prevState) => ({
                                settingDisplayEnglish:
                                  !prevState.settingDisplayEnglish,
                              }))
                            }
                          />{" "}
                          English
                        </label>
                      </h4>
                      <h4>
                        <label>
                          <input
                            type="checkbox"
                            value="settingDisplayHSK2"
                            defaultChecked={this.state.settingDisplayHSK2}
                            onChange={(e) =>
                              this.setState((prevState) => ({
                                settingDisplayHSK2:
                                  !prevState.settingDisplayHSK2,
                              }))
                            }
                          />{" "}
                          HSK 2.0 Levels
                        </label>
                      </h4>
                      <h4>
                        <label>
                          <input
                            type="checkbox"
                            value="settingDisplayHSK3"
                            defaultChecked={this.state.settingDisplayHSK3}
                            onChange={(e) =>
                              this.setState((prevState) => ({
                                settingDisplayHSK3:
                                  !prevState.settingDisplayHSK3,
                              }))
                            }
                          />{" "}
                          HSK 3.0 Levels
                        </label>
                      </h4>
                    </CardText>
                  </CardBody>
                </Card>
              </CardGroup>
            </div>

            <ReactPlayer
              url="https://www.youtube.com/watch?v=41vF3wYN9S4"
              height={this.state.settingDisplayYouTube ? "380px" : "0"}
              width="100%"
            />
            <iframe
              src="https://open.spotify.com/embed/track/3Ree0RiglJyG9ZSC0MG7LM?utm_source=generator"
              width="100%"
              height={this.state.settingDisplaySpotify ? "380" : "0"}
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>

            <Line>
              <我
                columnSize="col-1of1"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of2"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of2"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of3"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of3"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <你
                columnSize="col-1of3"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <你的
                columnSize="col-2of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <你的
                columnSize="col-2of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <爱
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <你
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <为什么
                columnSize="col-3of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <不
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <走
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <过
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <来
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of1"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of2"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of2"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of3"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of3"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <你
                columnSize="col-1of3"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <你的
                columnSize="col-2of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <你的
                columnSize="col-2of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <爱
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line
              lineMeaning="Why don't you say it out loud?"
              settingDisplayEnglish={this.state.settingDisplayEnglish}
            >
              <你
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <为什么
                columnSize="col-3of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <不
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <说
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <出
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <来
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
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
            </Line>
            <Line>
              <我
                columnSize="col-1of1"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of2"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of2"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of3"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of3"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <你
                columnSize="col-1of3"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <你的
                columnSize="col-2of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <你的
                columnSize="col-2of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <爱
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <你
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <为什么
                columnSize="col-3of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <不
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <走
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <过
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <来
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of1"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of2"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of2"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of3"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of3"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <你
                columnSize="col-1of3"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <你的
                columnSize="col-2of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <你的
                columnSize="col-2of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <爱
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <你
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <为什么
                columnSize="col-3of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <不
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <说
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <出
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <来
                columnSize="col-1of8"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of6"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <爱
                columnSize="col-1of6"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <你
                columnSize="col-1of6"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <我
                columnSize="col-1of6"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <爱
                columnSize="col-1of6"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <你
                columnSize="col-1of6"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
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
              <我
                columnSize="col-1of1"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of2"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of2"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of3"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of3"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <你
                columnSize="col-1of3"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <我
                columnSize="col-1of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <你
                columnSize="col-1of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <说
                columnSize="col-1of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <只
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <要
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <说
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <声
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <爱
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <你
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <为什么
                columnSize="col-3of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <不
                columnSize="col-1of5"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <为什么
                columnSize="col-3of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <不
                columnSize="col-1of4"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
            <Line>
              <为什么
                columnSize="col-3of6"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <不
                columnSize="col-1of6"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <肯
                columnSize="col-1of6"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
              <说
                columnSize="col-1of6"
                gender="neutral-gender"
                settingDisplayPinyin={this.state.settingDisplayPinyin}
                settingDisplayEnglish={this.state.settingDisplayEnglish}
                settingDisplayHSK2={this.state.settingDisplayHSK2}
                settingDisplayHSK3={this.state.settingDisplayHSK3}
              />
            </Line>
          </div>
        </div>
      </div>
    );
  }
}
export default Song2;
