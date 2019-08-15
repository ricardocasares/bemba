import { styled } from "@/css/styled";
import { ChevronBottom } from "react-bytesize-icons";

export const SelectWrapper = styled.div`
  display: flex;
  color: #bb86fc;
  align-items: center;
  background: #2e2e2e;
  border-radius: 3px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding-right: 15px;
`;

export const SelectInput = styled.select`
  -webkit-appearance: none;

  font-size: 18px;
  font-weight: 500;
  color: #bb86fc;
  background: transparent;
  border: none;
  padding: 10px 0;
  text-align: center;
  text-transform: capitalize;
`;

export const SelectIcon = styled(ChevronBottom)`
  color: #bb86fc;
`;
