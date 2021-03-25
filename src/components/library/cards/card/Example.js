import React from "react";
import { Card } from "components/library";

export default () => {
  return (
    <div className="col-lg-8 offset-lg-2">
      <Card cardTitle="Simple Card">I'm a simple card with a title</Card>
      <Card isPrimary>I'm a simple primary card</Card>
      <Card isAccent noBottomMargin>
        I'm a simple accent card
      </Card>
    </div>
  );
};
