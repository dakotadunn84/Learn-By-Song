import React from "react";
import "../../App.css";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const 我 = () => {
  return (
    <Card className="text-white bg-dark">
      <CardBody className="p-0">
        <CardTitle className="my-0">我</CardTitle>
        <CardText className="my-0">wǒ</CardText>
        <CardText className="my-0">I</CardText>
      </CardBody>
    </Card>
  );
};

export default 我;
