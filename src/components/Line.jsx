import React from "react";
import "../App.css";
import { CardGroup, Card, CardBody, CardText } from "reactstrap";

const Line = (props) => {
  return (
    <CardGroup>
      <div className="col">
        <div className="row">{props.children}</div>
        <div className="row justify-content-center text-white card-100">
          <Card className="bg-dark">
            <CardBody className="p-0">
              <CardText className="my-0">{props.lineMeaning ? "Line Meaning:" : undefined}</CardText>
              <CardText className="my-0">{props.lineMeaning ? props.lineMeaning : undefined}</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </CardGroup>
  );
};

export default Line;
