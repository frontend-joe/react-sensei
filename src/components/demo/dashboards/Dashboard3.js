import React from "react";
import {
  AreaChart2,
  IconFigureCard,
  BadgeFiguresCard,
} from "components/library";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  series: [[0, 4, 2, 7, 4, 13, 3, 4, 0]],
};

const data2 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  series: [[0, 4, 2, 7, 3, 12, 2, 4, 0]],
};

const items2 = [
  {
    label: "Total",
    value: "88k",
  },
  {
    label: "Growth",
    value: "14%",
  },
  {
    label: "Target",
    value: "15%",
  },
];

export default () => {
  return (
    <>
      <div className="col-6 col-lg-3">
        <IconFigureCard label="Bitcoin" value="21k" icon="bitcoin-alt" />
      </div>
      <div className="col-6 col-lg-3">
        <IconFigureCard label="Accounts" value="1,200" icon="master-card" />
      </div>
      <div className="col-12 col-lg-6">
        <BadgeFiguresCard items={items2} />
      </div>

      <div className="col-12 col-lg-6">
        <AreaChart2
          id="chart1"
          cardTitle="BitCoin Balance"
          cardValue="$179,757"
          onAddClicked={() => console.log("Add Clicked")}
          data={data}
          markerIndex={5}
        />
      </div>
      <div className="col-12 col-lg-6">
        <AreaChart2
          id="chart2"
          isAccent
          cardTitle="Ethereum Balance"
          cardValue="$89,283"
          onAddClicked={() => console.log("Add Clicked")}
          data={data2}
          markerIndex={5}
        />
      </div>
    </>
  );
};
