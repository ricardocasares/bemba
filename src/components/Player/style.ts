import styled from "@emotion/styled";
import { fadeInAndOut } from "@/css/animations";

export const Container = styled.footer`
  display: grid;
  padding: var(--sz4);
  grid-gap: var(--sz4);
  align-items: center;
  grid-template-columns: 1fr auto;
  background: var(--background);
  border-top: 1px solid var(--accents-2);
`;

export const Title = styled.div`
  font-weight: 500;
  text-align: center;
  font-size: var(--sz4);
  color: var(--foreground);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ErrorNotification = styled.div`
  font-weight: 500;
  display: grid;
  grid-gap: var(--sz4);
  grid-template-columns: auto 1fr;
  align-items: center;
  color: var(--error-lighter);
  background: var(--error);
  font-size: var(--sz4);
  padding: var(--sz5) var(--sz4);
  animation: ${fadeInAndOut} linear 5s;
`;

export const Controls = styled.section`
  display: grid;
  grid-gap: var(--sz4);
  grid-auto-flow: column;
  justify-content: center;
`;

export const Button = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  appearance: none;
  background: none;
  color: var(--foreground);
`;
