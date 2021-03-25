import React from "react";
import { AreaChart2 } from "components/library";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  series: [[0, 4, 10, 7, 12, 7, 11, 4, 0]],
};

export default () => {
  return (
    <div className="col-lg-8 offset-lg-2">
      <AreaChart2
        isAccent
        cardTitle="Portfolio Balance"
        cardValue="$179,757"
        onAddClicked={() => console.log("Add Clicked")}
        data={data}
        id="chart1"
      />
    </div>
  );
};
