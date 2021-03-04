import React from "react";
import { Card, StatIconCard } from "components/library";

export default () => {
  return (
    <div className="col-8 offset-2 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
      <StatIconCard label="Revenue" value="$34k" icon="dollar-alt" />
    </div>
  );
};
