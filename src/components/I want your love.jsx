import React from "react";
import ReactPlayer from "react-player";
import "../App.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  UncontrolledCollapse,
} from "reactstrap";
import Line from "./Line";
import 我 from "./Vocab/我";
import 要 from "./Vocab/要";
import 你 from "./Vocab/你";
import 愛 from "./Vocab/愛";
import 不 from "./Vocab/不";
import 走 from "./Vocab/走";
import 過 from "./Vocab/過";
import 來 from "./Vocab/來";
import 說 from "./Vocab/說";
import 出 from "./Vocab/出";
import 隻 from "./Vocab/隻";
import 聲 from "./Vocab/聲";
import 肯 from "./Vocab/肯";
import 你的 from "./Vocab/你的";
import 為什麼 from "./Vocab/為什麼";

class Song2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      settingDisplayYouTube: true,
      settingDisplayYouTubeInLines: false,
      settingDisplaySpotify: false,
      settingDisplayTraditional: true,
      settingDisplaySimplified: false,
      settingDisplayPinyin: true,
      settingDisplayEnglish: true,
      settingDisplayHSK2: false,
      settingDisplayHSK3: false,
      settingDisplaySingerColor: false,
    };
  }

  render() {
    return (
      <div className="col page-wide-column-below-header">
        <div className="row row-for-enabling-side-by-side-view">
          <div className="col left-side-column widescreen-col p-1">
            <div className="col lookatmeborder">
              <div
                className="row title-card-and-settings d-flex justify-content-between"
                style={{ maxHeight: "30%" }}
              >
                <Card className="text-white bg-dark lookatmeborder2">
                  <h1 className="font-weight-light">我要你的愛</h1>
                  <h1 className="font-weight-light">葛蘭</h1>
                  <h1 className="font-weight-light">I want your love</h1>
                  <h1 className="font-weight-light">Grace Chang</h1>
                  <Button
                      color="primary"
                      id="toggler"
                      style={{
                        marginBottom: "1rem",
                      }}
                    >
                      Settings
                    </Button>
                    <UncontrolledCollapse toggler="#toggler">
                      <Card className="text-white bg-dark lookatmeborder2">
                        <CardBody className="p-0">
                          <CardTitle className="my-0 text-center">
                            Display Settings
                          </CardTitle>
                          <CardText className="p-1">
                            <p>
                              <label>
                                <input
                                  type="checkbox"
                                  value="settingDisplayYouTube"
                                  defaultChecked={
                                    this.state.settingDisplayYouTube
                                  }
                                  onChange={(e) =>
                                    this.setState((prevState) => ({
                                      settingDisplayYouTube:
                                        !prevState.settingDisplayYouTube,
                                    }))
                                  }
                                />{" "}
                                YouTube Video
                              </label>
                            </p>
                            <p>
                              <label>
                                <input
                                  type="checkbox"
                                  value="settingDisplayYouTubeInLines"
                                  defaultChecked={
                                    this.state.settingDisplayYouTubeInLines
                                  }
                                  onChange={(e) =>
                                    this.setState((prevState) => ({
                                      settingDisplayYouTubeInLines:
                                        !prevState.settingDisplayYouTubeInLines,
                                    }))
                                  }
                                />{" "}
                                YouTube Clips In Lines
                              </label>
                            </p>
                            <p>
                              <label>
                                <input
                                  type="checkbox"
                                  value="settingDisplaySpotify"
                                  defaultChecked={
                                    this.state.settingDisplaySpotify
                                  }
                                  onChange={(e) =>
                                    this.setState((prevState) => ({
                                      settingDisplaySpotify:
                                        !prevState.settingDisplaySpotify,
                                    }))
                                  }
                                />{" "}
                                Spotify Audio
                              </label>
                            </p>
                            <p>
                              <label>
                                <input
                                  type="checkbox"
                                  value="settingDisplayTraditional"
                                  defaultChecked={
                                    this.state.settingDisplayTraditional
                                  }
                                  onChange={(e) =>
                                    this.setState((prevState) => ({
                                      settingDisplayTraditional:
                                        !prevState.settingDisplayTraditional,
                                    }))
                                  }
                                />{" "}
                                Traditional
                              </label>
                            </p>
                            <p>
                              <label>
                                <input
                                  type="checkbox"
                                  value="settingDisplaySimplified"
                                  defaultChecked={
                                    this.state.settingDisplaySimplified
                                  }
                                  onChange={(e) =>
                                    this.setState((prevState) => ({
                                      settingDisplaySimplified:
                                        !prevState.settingDisplaySimplified,
                                    }))
                                  }
                                />{" "}
                                Simplified
                              </label>
                            </p>
                            <p>
                              <label>
                                <input
                                  type="checkbox"
                                  value="settingDisplayPinyin"
                                  defaultChecked={
                                    this.state.settingDisplayPinyin
                                  }
                                  onChange={(e) =>
                                    this.setState((prevState) => ({
                                      settingDisplayPinyin:
                                        !prevState.settingDisplayPinyin,
                                    }))
                                  }
                                />{" "}
                                Pinyin
                              </label>
                            </p>
                            <p>
                              <label>
                                <input
                                  type="checkbox"
                                  value="settingDisplayEnglish"
                                  defaultChecked={
                                    this.state.settingDisplayEnglish
                                  }
                                  onChange={(e) =>
                                    this.setState((prevState) => ({
                                      settingDisplayEnglish:
                                        !prevState.settingDisplayEnglish,
                                    }))
                                  }
                                />{" "}
                                English
                              </label>
                            </p>
                            <p>
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
                            </p>
                            <p>
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
                            </p>
                          </CardText>
                        </CardBody>
                      </Card>
                    </UncontrolledCollapse>
                  
                </Card>
                
              </div>

              <ReactPlayer
                url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                height={this.state.settingDisplayYouTube ? "380px" : "0"}
                width="100%"
              />

              <iframe
                title="spotify"
                src="https://open.spotify.com/embed/track/3Ree0RiglJyG9ZSC0MG7LM?utm_source=generator"
                width="100%"
                height={this.state.settingDisplaySpotify ? "380" : "0"}
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </div>
          </div>
          <div className="col lyrics right-side-column widescreen-col">
            <div class="col container-fluid h-100 d-flex flex-column lookatmeborder">
              <div class="col mh-100 scrolly">
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 10, end: 13 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of1"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 13, end: 16 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of2"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of2"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 16, end: 18 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of3"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of3"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <你
                    columnSize="col-1of3"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 18, end: 20 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <你的
                    columnSize="col-2of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 21, end: 24 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <你的
                    columnSize="col-2of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <愛
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 23, end: 27 },
                      },
                    }}
                  />
                  <你
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <為什麼
                    columnSize="col-3of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <不
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <走
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <過
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <來
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 26, end: 29 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of1"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 29, end: 31 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of2"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of2"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 31, end: 34 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of3"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of3"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <你
                    columnSize="col-1of3"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 34, end: 37 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <你的
                    columnSize="col-2of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 37, end: 39 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <你的
                    columnSize="col-2of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <愛
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
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
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 39, end: 42 },
                      },
                    }}
                  />
                  <你
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <為什麼
                    columnSize="col-3of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <不
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <說
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <出
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <來
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 42, end: 74 },
                      },
                    }}
                  />
                  <div className="col p-0 col-1of1">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">English Section</CardTitle>
                        <CardText className="my-0">
                          Listen to your mama and you never will regret it and
                          if anybody wonders you can tell them that I said it
                        </CardText>
                        <CardText className="my-0">
                          The only thing I know is that I never can forget you
                        </CardText>
                        <CardText className="my-0">
                          I've been longing for you baby ever since the day i
                          met you
                        </CardText>
                        <CardText className="my-0">
                          I got you where I want you and I'm never gonna let you
                          get away from me
                        </CardText>
                        <CardText className="my-0">
                          Hear what I tell you
                        </CardText>
                        <CardText className="my-0">
                          I'm the girl for you so you better start to face it
                        </CardText>
                        <CardText className="my-0">
                          If I ever lose my love you know you never can replace
                          it
                        </CardText>
                        <CardText className="my-0">
                          I think it's time for you to start to give me some
                          loving
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
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 73, end: 76 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of1"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 76, end: 79 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of2"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of2"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 78, end: 81 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of3"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of3"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <你
                    columnSize="col-1of3"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 81, end: 84 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <你的
                    columnSize="col-2of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 84, end: 86 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <你的
                    columnSize="col-2of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <愛
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 86, end: 90 },
                      },
                    }}
                  />
                  <你
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <為什麼
                    columnSize="col-3of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <不
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <走
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <過
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <來
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 89, end: 92 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of1"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 92, end: 94 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of2"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of2"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 94, end: 97 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of3"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of3"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <你
                    columnSize="col-1of3"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 97, end: 100 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <你的
                    columnSize="col-2of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 100, end: 102 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <你的
                    columnSize="col-2of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <愛
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 102, end: 105 },
                      },
                    }}
                  />
                  <你
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <為什麼
                    columnSize="col-3of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <不
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <說
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <出
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <來
                    columnSize="col-1of8"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 120, end: 121 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of6"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <愛
                    columnSize="col-1of6"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <你
                    columnSize="col-1of6"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <我
                    columnSize="col-1of6"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <愛
                    columnSize="col-1of6"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <你
                    columnSize="col-1of6"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 121, end: 137 },
                      },
                    }}
                  />
                  <div className="col p-0 col-1of1">
                    <Card className="text-white bg-dark">
                      <CardBody className="p-0">
                        <CardTitle className="my-0">English Section</CardTitle>
                        <CardText className="my-0">
                          I'm the girl for you so you better start to face it
                        </CardText>
                        <CardText className="my-0">
                          If I ever lose my love you know you never can replace
                          it
                        </CardText>
                        <CardText className="my-0">
                          I think it's time for you to start to give me some
                          loving
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
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 137, end: 139 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of1"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 139, end: 142 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of2"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of2"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 142, end: 145 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of3"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of3"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <你
                    columnSize="col-1of3"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 145, end: 148 },
                      },
                    }}
                  />
                  <我
                    columnSize="col-1of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <你
                    columnSize="col-1of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <說
                    columnSize="col-1of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 147, end: 150 },
                      },
                    }}
                  />
                  <隻
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <要
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <說
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <聲
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <愛
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 150, end: 152 },
                      },
                    }}
                  />
                  <你
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <為什麼
                    columnSize="col-3of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <不
                    columnSize="col-1of5"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 151, end: 153 },
                      },
                    }}
                  />
                  <為什麼
                    columnSize="col-3of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <不
                    columnSize="col-1of4"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
                <Line>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=41vF3wYN9S4"
                    height={
                      this.state.settingDisplayYouTubeInLines ? "380px" : "0"
                    }
                    width="100%"
                    loop="true"
                    config={{
                      youtube: {
                        playerVars: { start: 153, end: 159 },
                      },
                    }}
                  />
                  <為什麼
                    columnSize="col-3of7"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <不
                    columnSize="col-1of7"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <肯
                    columnSize="col-1of7"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <說
                    columnSize="col-1of7"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                  <愛
                    columnSize="col-1of7"
                    gender="neutral-gender"
                    settingDisplayTraditional={
                      this.state.settingDisplayTraditional
                    }
                    settingDisplaySimplified={
                      this.state.settingDisplaySimplified
                    }
                    settingDisplayPinyin={this.state.settingDisplayPinyin}
                    settingDisplayEnglish={this.state.settingDisplayEnglish}
                    settingDisplayHSK2={this.state.settingDisplayHSK2}
                    settingDisplayHSK3={this.state.settingDisplayHSK3}
                  />
                </Line>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Song2;
