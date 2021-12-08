import React from "react";
import "../../App.css";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const 为什么 = (props) => {
  return (
    <div className={`col p-0 ${props.columnSize}`}>
      <Card className={`text-white ${props.gender}`}>
        <CardBody className="p-0">
          <CardTitle className="my-0">{props.settingDisplayTraditional ? "為什麼": undefined}</CardTitle>
          <CardTitle className="my-0">{props.settingDisplaySimplified ? "为什么": undefined}</CardTitle>
          <CardText className="my-0">{props.settingDisplayPinyin ? "wèi shén me": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayEnglish ? "why": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayHSK2 ? "HSK 2 Level: 2": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayHSK3 ? "HSK 3 Level: 2": undefined}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default 为什么;
