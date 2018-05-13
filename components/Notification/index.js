import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import * as actions from "../../store/app/actions";

let notificationTypes = {
  info: "blue",
  error: "red"
};

let type = ({ type }) => notificationTypes[type];
let hide = ({ hidden }) => (hidden ? "none" : "block");

let Notification = styled.div`
  padding: 5px 15px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  background: ${type};
  display: ${hide};
`;

let mapProps = ({ app: { notification } }) => ({ ...notification });
export default connect(mapProps, { actions })(({ message, ...props }) => (
  <Notification {...props}>{message}</Notification>
));
