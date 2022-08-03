import React from "react";
import Card from "../UI/Card";

import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxDataPoint = Math.max(...dataValues);

  return (
    <Card className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxDataPoint}
        ></ChartBar>
      ))}
    </Card>
  );
}

export default Chart;
