import React from "react";
import "../../App.css";
import { Card, CardBody, CardText } from "reactstrap";
import 你 from "./你";
import 的 from "./的";

const 你的 = (props) => {
  return (
    <div className={`col ${props.columnSize}`}>
      <div className="row">
        <你 columnSize="col-1of2" gender={props.gender} settingDisplayPinyin={props.settingDisplayPinyin} settingDisplayEnglish={props.settingDisplayEnglish} settingDisplayHSK2={props.settingDisplayHSK2} settingDisplayHSK3={props.settingDisplayHSK3}/>
        <的 columnSize="col-1of2" gender={props.gender} settingDisplayPinyin={props.settingDisplayPinyin} settingDisplayEnglish={props.settingDisplayEnglish} settingDisplayHSK2={props.settingDisplayHSK2} settingDisplayHSK3={props.settingDisplayHSK3}/>
      </div>
      <div className="row">
        <div className="col p-0 col-1of1 ">
          <Card className={`text-white ${props.gender}`}>
            <CardBody className="p-0">
            <CardText className="my-0">{props.settingDisplayEnglish ? "你的": undefined}</CardText>
              <CardText className="my-0">{props.settingDisplayEnglish ? "your": undefined}</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default 你的;
