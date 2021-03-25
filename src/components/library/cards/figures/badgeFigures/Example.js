import React from "react";
import { BadgeFiguresCard } from "components/library";

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

export default () => {
  return (
    <div className="col-md-8 offset-md-2 col-xl-10 offset-xl-1">
      <BadgeFiguresCard items={items} />
    </div>
  );
};
