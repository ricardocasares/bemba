import styled from '@emotion/styled';

export const Wrapper = styled.section`
  margin-bottom: 50px;
`;

export const Header = styled.h3`
  margin: 0;
  font-weight: 400;
  margin-bottom: 15px;
  font-size: 20px;
`;

export const Scroller = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: scroll;
  padding: 15px 0;
  -webkit-overflow-scrolling: touch;
`;

export const Items = styled.div`
  display: inline-flex;

  > *:not(:last-child) {
    margin-right: 15px;
  }
`;
