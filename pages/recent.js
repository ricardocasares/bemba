import React, { Fragment } from "react";

import Title from "../components/Text/Title";
import Content from "../components/Content";
import Navigation from "../components/Navigation";

let Results = () => (
  <Content>
    <Title>Recently played</Title>
  </Content>
);

Results.getInitialProps = function getInitialProps({ query }) {
  return {};
};

export default Results;
