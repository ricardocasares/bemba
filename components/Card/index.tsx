import React, { SFC } from "react";
import random from "randomcolor";
import styled from "styled-components";

import Link, { LinkProps } from "../Link";

const config = {
  alpha: 0.9,
  format: "rgba",
  luminosity: "light"
};

const color = () => random(config);

export const Card = styled.div`
  background-color: ${color};
  min-width: 150px;
  margin-right: 0;
  text-align: center;
  border-radius: 3px;
  display: inline-block;
  padding: 30px 30px;
`;

export const CardTitle = styled.h3`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

// TODO: unknown props found: className
export const CardLink: SFC<LinkProps> = ({ children, ...props }) => (
  <Link {...props}>
    <Card>
      <CardTitle>{children}</CardTitle>
    </Card>
  </Link>
);

export default styled<LinkProps, any>(CardLink)`
  margin-left: 15px;

  :last-child {
    margin-right: 15px;
  }
`;
