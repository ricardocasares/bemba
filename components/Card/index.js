import React from "react";
import random from "randomcolor";

import Link from "../Link";
import styled from "styled-components";

let config = {
  alpha: 0.9,
  format: "rgba",
  luminosity: "light"
};

let color = () => random(config);

export let Card = styled.div`
  background-color: ${color};
  min-width: 150px;
  margin-right: 0;
  text-align: center;
  border-radius: 3px;
  display: inline-block;
  padding: 30px 30px;
`;

export let CardTitle = styled.h3`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

export let CardLink = ({ children, ...props }) => (
  <Link {...props}>
    <Card>
      <CardTitle>{children}</CardTitle>
    </Card>
  </Link>
);

export default styled(CardLink)`
  margin-left: 15px;

  :last-child {
    margin-right: 15px;
  }
`;
