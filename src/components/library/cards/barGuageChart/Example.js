import React from "react";
import { BarGuageChartCard } from "components/library";

const series = [
  {
    name: "series1",
    data: [60, 0],
  },
  {
    name: "series2",
    data: [20, 0],
  },
  {
    name: "series2",
    data: [30, 0],
  },
];

export default () => {
  return (
    <div className="col-lg-6 offset-lg-3">
      <BarGuageChartCard
        cardTitle="Survival"
        label="Current rate"
        value="99.8%"
        series={series}
      />
    </div>
  );
};
