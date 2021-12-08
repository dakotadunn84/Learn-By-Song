import React from "react";
import "../../App.css";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const 声 = (props) => {
  return (
    <div className={`col p-0 ${props.columnSize}`}>
      <Card className={`text-white ${props.gender}`}>
        <CardBody className="p-0">
          <CardTitle className="my-0">{props.settingDisplayTraditional ? "聲": undefined}</CardTitle>
          <CardTitle className="my-0">{props.settingDisplaySimplified ? "声": undefined}</CardTitle>
          <CardText className="my-0">{props.settingDisplayPinyin ? "shēng": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayEnglish ? "noise": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayHSK2 ? "HSK 2 Level: 3": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayHSK3 ? "HSK 3 Level: 5": undefined}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default 声;
