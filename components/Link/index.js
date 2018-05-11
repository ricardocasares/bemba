import Link from "next/link";
import { parse } from "url";
import { withRouter } from "next/router";
import styled from "styled-components";

export const CustomLink = ({ router, children, className, ...props }) => (
  <Link {...props}>
    <a className={className}>{children}</a>
  </Link>
);

const active = fn => ({ href, router }) => {
  const { pathname } = router;
  const { pathname: url } = parse(href);
  return fn(url === pathname);
};

const color = active => (active ? "lime" : "gray");
const hover = active => (active ? "white" : "white");

const StyledLink = styled(CustomLink)`
  color: ${active(color)};
  transition: color 0.3s;

  :hover {
    color: ${active(hover)};
  }
`;

export default withRouter(StyledLink);
