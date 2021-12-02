import React from "react";
import "../App.css";
import { CardGroup, Card, CardBody, CardText } from "reactstrap";

const Line = (props) => {
  return (
    <CardGroup className="my-1">
      <div className="col">
        <div className="row">{props.children}</div>
        <div className="row justify-content-center text-white card-100">
          <Card className="bg-dark">
            <CardBody className="p-0">
              <CardText className="my-0">{(props.lineMeaning && props.settingDisplayEnglish) ? "Line Meaning:" : undefined}</CardText>
              <CardText className="my-0">{(props.lineMeaning && props.settingDisplayEnglish) ? props.lineMeaning : undefined}</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </CardGroup>
  );
};

export default Line;
