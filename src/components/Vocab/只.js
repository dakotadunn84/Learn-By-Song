import React from "react";
import "../../App.css";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const 只 = (props) => {
  return (
    <div className={`col p-0 ${props.columnSize}`}>
      <Card className={`text-white ${props.gender}`}>
        <CardBody className="p-0">
          <CardTitle className="my-0">只</CardTitle>
          <CardText className="my-0">{props.settingDisplayPinyin ? "zhǐ": undefined}</CardText>
          <CardText className="my-0">only</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default 只;
