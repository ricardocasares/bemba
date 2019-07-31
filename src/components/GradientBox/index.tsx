import styled from "@emotion/styled";

export const GradientBox = styled.div`
  background: #ad5389;
  background: -webkit-linear-gradient(to right, #3c1053, #ad5389);
  background: linear-gradient(to right, #3c1053, #ad5389);

  padding: 15px;
  border-radius: 5px;
  height: 150px;
  width: 200px;

  h3,
  h4 {
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  h3 {
    opacity: 0.9;
    font-weight: 500;
  }

  h4 {
    opacity: 0.5;
    font-size: 14px;
    font-weight: 400;
  }
`;
