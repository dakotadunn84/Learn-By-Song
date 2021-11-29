import React from "react";
import "../App.css";
import { CardGroup } from "reactstrap";

const Line = (props) => {
  return (
    <CardGroup>
      <div className="col">
        <div className="row">{props.children}</div>
      </div>
    </CardGroup>
  );
};

export default Line;
