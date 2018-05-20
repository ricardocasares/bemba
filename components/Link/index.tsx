import React, { SFC } from "react";
import Link, { LinkState } from "next/link";
import { parse } from "url";
import { withRouter } from "next/router";
import styled from "styled-components";

export interface StyledLinkProps {
  router?: any;
  href: string;
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

const CustomLink: SFC<LinkState> = ({ children, href, ...props }) => (
  <Link {...props} href={href}>
    <StyledWithRouter href={href}>{children}</StyledWithRouter>
  </Link>
);

export default CustomLink;
