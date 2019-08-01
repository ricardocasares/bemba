import styled from "@emotion/styled";
import { gradient, ellipsis } from "@/css";

export const GradientBox = styled.div`
  padding: 15px;
  border-radius: 5px;
  height: 150px;
  width: 200px;

  h3,
  h4 {
    margin: 0;
    ${ellipsis}
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

  ${gradient("#3c1053", "#ad5389", "90deg")}
`;
