import React from "react";
import "../../App.css";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const 走 = (props) => {
  return (
    <div className={`col p-0 ${props.columnSize}`}>
      <Card className={`text-white ${props.gender}`}>
        <CardBody className="p-0">
          <CardTitle className="my-0">走</CardTitle>
          <CardText className="my-0">zǒu</CardText>
          <CardText className="my-0">walk</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default 走;
