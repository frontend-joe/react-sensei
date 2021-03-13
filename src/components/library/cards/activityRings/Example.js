import React from "react";
import { ActivityRingsCard } from "components/library";

export default () => {
  return (
    <div className="col-lg-6 offset-lg-3">
      <ActivityRingsCard
        cardTitle="Earnings"
        label="Target"
        value="$53k"
        series={[30, 40, 45]}
      />
    </div>
  );
};
