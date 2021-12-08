import React from "react";
import "../../App.css";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const 来 = (props) => {
  return (
    <div className={`col p-0 ${props.columnSize}`}>
      <Card className={`text-white ${props.gender}`}>
        <CardBody className="p-0">
          <CardTitle className="my-0">来</CardTitle>
          <CardText className="my-0">{props.settingDisplayPinyin ? "lái": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayEnglish ? "here": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayHSK2 ? "HSK 2 Level: 1": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayHSK3 ? "HSK 3 Level: 1": undefined}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default 来;
