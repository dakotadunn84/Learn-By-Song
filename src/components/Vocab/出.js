import React from "react";
import "../../App.css";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const 出 = (props) => {
  return (
    <div className={`col p-0 ${props.columnSize}`}>
      <Card className={`text-white ${props.gender}`}>
        <CardBody className="p-0">          
          <CardTitle className="my-0">{props.settingDisplayTraditional ? "出": undefined}</CardTitle>
          <CardTitle className="my-0">{props.settingDisplaySimplified ? "出": undefined}</CardTitle>
          <CardText className="my-0">{props.settingDisplayPinyin ? "chū": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayEnglish ? "out": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayHSK2 ? "HSK 2 Level: 2": undefined}</CardText>
          <CardText className="my-0">{props.settingDisplayHSK3 ? "HSK 3 Level: 1": undefined}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default 出;
