import { styled } from "@/css/styled";

export const Form = styled.form`
  display: flex;
  padding: 15px;
  position: absolute;
  z-index: 10;
  width: 100%;
  background: -webkit-linear-gradient(270deg, #000 1%, rgba(0, 0, 0, 0));
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  border-radius: 3px;
  background: #2e2e2e;
  padding: 15px;
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  opacity: 0.95;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
