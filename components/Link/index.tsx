import React, { SFC } from "react";
import Link, { LinkState } from "next/link";
import { parse } from "url";
import { withRouter } from "next/router";
import styled from "styled-components";

export interface StyledLinkProps {
  router?: any;
  className?: string;
}

export interface LinkProps extends LinkState {
  className?: string;
}

const active = fn => ({ href, router }) => {
  const { pathname } = router;
  const { pathname: url } = parse(href);
  return fn(url === pathname);
};
const color = active => (active ? "lime" : "gray");
const hover = active => (active ? "white" : "white");

const StyledLink = styled<StyledLinkProps, any>("a")`
  color: ${active(color)};
  transition: color 0.3s;

  :hover {
    color: ${active(hover)};
  }
`;

const StyledWithRouter = withRouter(StyledLink);

const CustomLink: SFC<LinkProps> = ({ children, className, ...props }) => (
  <Link {...props} passHref>
    <StyledWithRouter className={className}>{children}</StyledWithRouter>
  </Link>
);

export default CustomLink;
