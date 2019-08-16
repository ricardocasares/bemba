import styled from "@emotion/styled";

export const Wrapper = styled.section`
  margin-bottom: 25px;
`;

export const Header = styled.h3`
  margin: 0;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const Scroller = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Items = styled.div`
  display: inline-flex;

  > *:not(:last-child) {
    margin-right: 15px;
  }
`;
