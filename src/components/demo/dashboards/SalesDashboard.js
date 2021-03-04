import React from "react";
import {
  StatIconCard,
  PieChartCard,
  AreaChartCard,
  BarChartCard,
} from "components/library";

const pieSeries = [30, 40, 45];

const areaSeries = [
  {
    data: [0, 35, 10, 44, 10, 0, 0],
  },
  {
    data: [0, 5, 35, 10, 64, 10, 0],
  },
  {
    data: [0, 20, 10, 30, 20, 28, 0],
  },
];

const barSeries = [
  {
    data: [10, 35, 10, 24, 10, 10, 20, 30, 20, 10, 44, 10, 20, 10],
  },
  {
    data: [30, 45, 35, 10, 25, 10, 40, 46, 13, 10, 44, 10, 20, 10],
  },
];

const statList = [
  {
    label: "Revenue",
    value: "$34.5k",
  },
  {
    label: "Profit",
    value: "$2.5k",
  },
  {
    label: "Orders",
    value: "811",
  },
];

const Wrapper = () => {
  return (
    <>
      <div className="col-6 col-lg-3">
        <StatIconCard label="Revenue" value="$34k" icon="dollar-alt" />
      </div>
      <div className="col-6 col-lg-3">
        <StatIconCard label="Orders" value="811" icon="receipt-alt" />
      </div>
      <div className="col-6 col-lg-3">
        <StatIconCard label="Profit" value="$2.3k" icon="chart-line" />
      </div>
      <div className="col-6 col-lg-3">
        <StatIconCard label="Users" value="762" icon="user" />
      </div>
      <div className="order-lg-2 col-lg-6">
        <AreaChartCard
          cardTitle="Sales"
          statList={statList}
          series={areaSeries}
        />
      </div>
      <div className="order-lg-1 col-lg-3">
        <PieChartCard
          cardTitle="Earnings"
          label="Target"
          value="$53k"
          series={pieSeries}
        />
      </div>
      <div className="order-lg-3 col-lg-3">
        <BarChartCard
          cardTitle="Users"
          label="Today"
          value="234"
          series={barSeries}
        />
      </div>
    </>
  );
};

export default Wrapper;
