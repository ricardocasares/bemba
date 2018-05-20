import React, { SFC } from "react";
import Link from "next/link";
import { parse } from "url";
import { withRouter, SingletonRouter } from "next/router";
import styled from "styled-components";

export interface LinkProps {
  router?: SingletonRouter;
  className?: string;
}

let CustomLink: SFC<LinkProps> = ({
  router,
  children,
  className,
  ...props
}) => (
  <Link {...props}>
    <a className={className}>{children}</a>
  </Link>
);

let active = fn => ({ href, router }) => {
  let { pathname } = router;
  let { pathname: url } = parse(href);
  return fn(url === pathname);
};

let color = active => (active ? "lime" : "gray");
let hover = active => (active ? "white" : "white");

export default withRouter(styled(CustomLink)`
  color: ${active(color)};
  transition: color 0.3s;

  :hover {
    color: ${active(hover)};
  }
`);
