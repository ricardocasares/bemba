import color from "randomcolor";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

const config = {
  alpha: 0.9,
  format: "rgba",
  luminosity: "light"
};

const random = () => color(config);

export const Card = styled.div`
  color: black;
  background-color: ${random};
  min-width: 150px;
  margin-left: 15px;
  text-align: center;
  border-radius: 3px;
  display: inline-block;
  padding: 30px 30px;

  :last-child {
    margin-right: 15px;
  }
`;

export const CardTitle = styled.h3`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

export const CardLink = ({ children, ...props }) => (
  <Link {...props}>
    <a>
      <Card>
        <CardTitle>{children}</CardTitle>
      </Card>
    </a>
  </Link>
);

export default CardLink;
