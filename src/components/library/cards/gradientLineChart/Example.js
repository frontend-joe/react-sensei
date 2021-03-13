import React from "react";
import { GradientLineChartCard } from "components/library";

const data = {
  series: [[0, 8, 4, 12, 7, 15, 11]],
};

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
        data={data}
      />
    </div>
  );
};
