import { keyframes } from "styled-components";

export let opacity = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export let rotateZeroNinety = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0deg);
  }

  100% {
    opacity: 1;
    transform: rotate(-90deg);
  }
`;

export let rotateNinetyZero = keyframes`
  0% {
    opacity: 0;
    transform: rotate(90deg);
  }

  100% {
    opacity: 1;
    transform: rotate(0);
  }
`;

export let slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
