import React from "react";

import StationItem from "./StationItem";

export default () => (
  <div>
    {Array(20)
      .fill(0)
      .map(x => <StationItem key={Math.random()} />)}
  </div>
);
