import React from "react";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      <span className={props.value === "X" ? "X" : "O"}>{props.value}</span>
    </button>
  );
}

export default Square;
