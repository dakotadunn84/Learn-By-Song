import React from "react";
import "../../App.css";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const 不 = (props) => {
  return (
    <div className={`col p-0 ${props.columnSize}`}>
      <Card className={`text-white ${props.gender}`}>
        <CardBody className="p-0">
          <CardTitle className="my-0">不</CardTitle>
          <CardText className="my-0">{props.settingDisplayPinyin ? "bù": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayEnglish ? "no": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayHSK3 ? "HSK 2.0 Level: 1": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayHSK3 ? "HSK 3.0 Level: 1": undefined}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default 不;
