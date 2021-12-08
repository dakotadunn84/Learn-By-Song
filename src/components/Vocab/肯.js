import React from "react";
import "../../App.css";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const 肯 = (props) => {
  return (
    <div className={`col p-0 ${props.columnSize}`}>
      <Card className={`text-white ${props.gender}`}>
        <CardBody className="p-0">
          <CardTitle className="my-0">{props.settingDisplayTraditional ? "肯": undefined}</CardTitle>
          <CardTitle className="my-0">{props.settingDisplaySimplified ? "肯": undefined}</CardTitle>
          <CardText className="my-0">{props.settingDisplayPinyin ? "kěn": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayEnglish ? "willing": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayHSK2 ? "HSK 2 Level: 4": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayHSK3 ? "HSK 3 Level: 6": undefined}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default 肯;
