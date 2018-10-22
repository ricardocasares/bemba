import React from "react";

import Title from "../components/Text/Title";
import Content from "../components/Content";

let Results = () => (
  <Content>
    <Title>Recently played</Title>
  </Content>
);

Results.getInitialProps = function getInitialProps({ query }) {
  return {};
};

export default Results;
