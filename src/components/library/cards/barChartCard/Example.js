import React from "react";
import { Card, BarChartCard } from "components/library";

const series = [
  {
    name: "series1",
    data: [10, 35, 10, 44, 10, 10, 20, 30, 35, 10, 44, 10, 20, 30],
  },
  {
    name: "series2",
    data: [30, 45, 35, 10, 64, 10, 40, 30, 35, 10, 44, 10, 20, 10],
  },
];

export default () => {
  return (
    <div className="col-lg-6 offset-lg-3">
      <BarChartCard
        cardTitle="Users"
        label="Today"
        value="234"
        series={series}
      />
    </div>
  );
};
