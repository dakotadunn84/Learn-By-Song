import React from "react";
import "../../App.css";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const 说 = (props) => {
  return (
    <div className={`col p-0 ${props.columnSize}`}>
      <Card className={`text-white ${props.gender}`}>
        <CardBody className="p-0">
          <CardTitle className="my-0">说</CardTitle>
          <CardText className="my-0">{props.settingDisplayPinyin ? "shuō": undefined}</CardText>
          <CardText className="my-0">speak</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default 说;
