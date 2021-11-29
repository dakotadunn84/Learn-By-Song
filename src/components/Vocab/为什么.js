import React from "react";
import "../../App.css";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const 为什么 = (props) => {
  return (
    <div className={`col p-0 ${props.columnSize}`}>
      <Card className={`text-white ${props.gender}`}>
        <CardBody className="p-0">
          <CardTitle className="my-0">为什么</CardTitle>
          <CardText className="my-0">wèi shén me</CardText>
          <CardText className="my-0">why</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default 为什么;
