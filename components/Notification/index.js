import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import * as actions from "../../store/app/actions";

import Close from "../Icons/Close";

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
  position: relative;

  svg {
    position: absolute;
    right: 0;
    top: 7px;
  }
`;

let mapProps = ({ app: { notification } }) => ({
  ...notification
});
export default connect(mapProps, { ...actions })(
  ({ message, hideNotification, ...props }) => (
    <Notification onClick={hideNotification} {...props}>
      {message}
      <Close height={10} strokeWidth={"15%"} />
    </Notification>
  )
);
