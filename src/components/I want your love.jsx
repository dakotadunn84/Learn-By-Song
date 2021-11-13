import React from "react";
import ReactPlayer from "react-player";
import "../App.css";
import {
  CardGroup,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

function About() {
  return (
    <div class="container-fliud" className="我要你的爱 I want your love">
      <div class="col">
        <div class="row d-flex justify-content-center">
          <ReactPlayer url="https://www.youtube.com/watch?v=41vF3wYN9S4" />
        </div>
        <div class="col-lg-5 justify-content-center" className="lookatmeborder">
          <h1 class="font-weight-light">我要你的爱 I want your love</h1>
          <CardGroup>
            <Card className="text-white bg-dark">
              <CardBody>
                <CardTitle className="mb-0" tag="h5">
                  我
                </CardTitle>
                <CardText className="mb-0">I</CardText>
              </CardBody>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card className="text-white bg-dark">
              <CardBody>
                <CardTitle className="mb-0" tag="h5">
                  我
                </CardTitle>
                <CardText className="mb-0">I</CardText>
              </CardBody>
            </Card>
            <Card className="text-white bg-dark">
              <CardBody>
                <CardTitle className="mb-0" tag="h5">
                  要
                </CardTitle>
                <CardText className="mb-0">want</CardText>
              </CardBody>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card className="text-white bg-dark">
              <CardBody>
                <CardTitle className="mb-0" tag="h5">
                  我
                </CardTitle>
                <CardText className="mb-0">I</CardText>
              </CardBody>
            </Card>
            <Card className="text-white bg-dark">
              <CardBody>
                <CardTitle className="mb-0" tag="h5">
                  要
                </CardTitle>
                <CardText className="mb-0">want</CardText>
              </CardBody>
            </Card>
            <Card className="text-white bg-dark">
              <CardBody>
                <CardTitle className="mb-0" tag="h5">
                  你
                </CardTitle>
                <CardText className="mb-0">you</CardText>
              </CardBody>
            </Card>
          </CardGroup>
          <CardGroup class="row">
            <Card className="text-white bg-dark" class="col">
              <CardBody>
                <CardTitle className="mb-0" tag="h5">
                  我
                </CardTitle>
                <CardText className="mb-0">I</CardText>
              </CardBody>
            </Card>
            <Card className="text-white bg-dark" class="col">
              <CardBody>
                <CardTitle className="mb-0" tag="h5">
                  要
                </CardTitle>
                <CardText className="mb-0">want</CardText>
              </CardBody>
            </Card>
            <div class="col">
              <div class="row  card-100">
                <Card className="text-white bg-dark">
                  <CardBody>
                    <CardTitle className="mb-0" tag="h5">
                      你的
                    </CardTitle>
                    <CardText className="mb-0">your</CardText>
                  </CardBody>
                </Card>
              </div>
              <div class="row card-50">
                <Card className="text-white bg-dark">
                  <CardBody>
                    <CardTitle className="mb-0" tag="h5">
                      你
                    </CardTitle>
                    <CardText className="mb-0">you</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody>
                    <CardTitle className="mb-0" tag="h5">
                      的
                    </CardTitle>
                    <CardText className="mb-0">'s</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardGroup>
          <CardGroup class="row">
            <Card className="text-white bg-dark" class="col">
              <CardBody>
                <CardTitle className="mb-0" tag="h5">
                  我
                </CardTitle>
                <CardText className="mb-0">I</CardText>
              </CardBody>
            </Card>
            <Card className="text-white bg-dark" lass="col">
              <CardBody>
                <CardTitle className="mb-0" tag="h5">
                  要
                </CardTitle>
                <CardText className="mb-0">want</CardText>
              </CardBody>
            </Card>
            <div class="col">
              <div class="row  card-100">
                <Card className="text-white bg-dark">
                  <CardBody>
                    <CardTitle className="mb-0" tag="h5">
                      你的
                    </CardTitle>
                    <CardText className="mb-0">your</CardText>
                  </CardBody>
                </Card>
              </div>
              <div class="row card-50">
                <Card className="text-white bg-dark">
                  <CardBody>
                    <CardTitle className="mb-0" tag="h5">
                      你
                    </CardTitle>
                    <CardText className="mb-0">you</CardText>
                  </CardBody>
                </Card>
                <Card className="text-white bg-dark">
                  <CardBody>
                    <CardTitle className="mb-0" tag="h5">
                      的
                    </CardTitle>
                    <CardText className="mb-0">'s</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
            <Card className="text-white bg-dark">
              <CardBody>
                <CardTitle className="mb-0" tag="h5">
                  爱
                </CardTitle>
                <CardText className="mb-0">love</CardText>
              </CardBody>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card className="text-white bg-dark">
              <CardBody>
                <CardTitle className="mb-0" tag="h5">
                  English Section
                </CardTitle>
                <CardText className="mb-0">
                  I'm the girl for you so you better start to face it If I ever
                  lose my love you know you never can replace it It's time for
                  you to start to give me some loving Carrying a torch for you
                  it's hotter than an oven It's time for you to give me a little
                  tender love Baby hold me tight and do what I tell you
                </CardText>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
}

export default About;
