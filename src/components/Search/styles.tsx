import { styled } from "@/css/styled";
import { motion } from "framer-motion";

export const animate = {
  blur: { padding: "15px", borderRadius: 0 },
  focus: { padding: 0, borderRadius: 3 }
};

export const Form = styled(motion.form)`
  display: flex;
  padding: 15px;
  position: absolute;
  z-index: 10;
  width: 100%;
  background: -webkit-linear-gradient(270deg, #000 1%, rgba(0, 0, 0, 0));
`;

export const Input = styled(motion.input)`
  border: none;
  width: 100%;
  border-radius: 3px;
  background: #2e2e2e;
  padding: 15px;
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  opacity: 0.95;
`;
