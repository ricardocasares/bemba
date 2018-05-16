import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import * as actions from "../../store/app/actions";

import Close from "../Button/Close";
import { opacity } from "../../lib/animations";

let notificationTypes = {
  info: "blue",
  error: "red"
};

let type = ({ type }) => notificationTypes[type];
let hide = ({ hidden }) => (hidden ? "none" : "flex");
let Notification = styled.div`
  padding: 5px 15px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  display: ${hide};
  flex: 0 1 1;
  background: ${type};
  will-change: opacity;
  animation: ${opacity} 0.2s linear;
  align-items: center;

  button {
    font-size: 10px;
  }

  div {
    flex: 1;
  }
`;

let mapProps = ({ app: { notification } }) => ({
  ...notification
});
export default connect(mapProps, { ...actions })(
  ({ message, hideNotification, ...props }) => (
    <Notification {...props}>
      <div>{message}</div>
      <Close onClick={hideNotification} size={12} stroke={5} />
    </Notification>
  )
);
