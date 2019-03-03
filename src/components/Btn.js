import React from "react";
import "./Btn.css";

const Btn = props => {
  return (
    <button className="btn" name={props.name} onClick={props.click}>
      {props.name}
    </button>
  );
};

export default Btn;
