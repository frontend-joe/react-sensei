import React from "react";
import {
  IconFigureCard,
  PieChartCard,
  AreaChartCard,
  BarChartCard,
  BarGuageChartCard,
  BadgeFiguresCard,
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

const topStats = [
  {
    label: "Revenue",
    value: "$3.5k",
    icon: "dollar-alt",
  },
  {
    label: "Orders",
    value: "811",
    icon: "receipt-alt",
  },
  {
    label: "Profit",
    value: "$2.3k",
    icon: "chart-line",
  },
  {
    label: "Users",
    value: "811",
    icon: "user",
  },
];

const earningsStats = [
  {
    label: "Revenue",
    value: "$34.5k",
  },
  {
    label: "Profit",
    value: "$2.3k",
  },
  {
    label: "Orders",
    value: "811",
  },
];

const items = [
  {
    label: "Total",
    value: "1.14b",
  },
  {
    label: "Avg",
    value: "16.22",
  },
  {
    label: "Target",
    value: 15.44,
  },
];

const Wrapper = () => {
  return (
    <>
      {topStats.map((card) => (
        <div className="col-6 col-lg-3">
          <IconFigureCard
            label={card.label}
            value={card.value}
            icon={card.icon}
          />
        </div>
      ))}
      <div className="order-lg-2 col-lg-6">
        <AreaChartCard
          cardTitle="Earnings"
          statList={earningsStats}
          series={areaSeries}
        />
      </div>
      <div className="order-lg-1 col-lg-3">
        <PieChartCard
          cardTitle="Progress"
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
      <div className="col-6 col-lg-3">
        <IconFigureCard label="Trends" value="Shirts" icon="tag-alt" />
      </div>
      <div className="col-6 col-lg-3">
        <IconFigureCard label="Hot" value="Socks" icon="trophy" />
      </div>

      <div className="col-12 col-lg-6">
        <BadgeFiguresCard items={items} />
      </div>
    </>
  );
};

export default Wrapper;
