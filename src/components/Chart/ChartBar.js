import React from "react";

import "./ChartBar.css";

function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = (props.value / props.maxValue) * 100 + "%";
  }
  console.log("ChartBar: ", props.value, props.maxValue);

  return (
    <div className="bar-chart">
      <div className="bar-chart__inner">
        <div
          className="bar-chart__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <p className="bar-chart__label">{props.label}</p>
    </div>
  );
}

export default ChartBar;
