import React from "react";
import { GradientLineChartCard } from "components/library";

const series = [
  {
    name: "series1",
    data: [0, 35, 10, 44, 10, 0, 0],
  },
];

const statList = [
  {
    label: "This week",
    value: "112k",
  },
  {
    label: "This month",
    value: "240k",
  },
  {
    label: "This year",
    value: "564k",
  },
];

export default () => {
  return (
    <div className="col-lg-8 offset-lg-2">
      <GradientLineChartCard
        cardTitle="Recovered"
        statList={statList}
        series={series}
      />
    </div>
  );
};
