import { styled } from "@/css";
import { truncate } from "@/css/utils";
import { fadeInAndOut } from "@/css/animations";

export const Container = styled("footer", {
  display: "grid",
  padding: "$4",
  gridGap: "$4",
  alignItems: "center",
  gridTemplateColumns: "1fr auto",
  borderTop: "1px solid $accents-2",
});

export const Title = styled("div", {
  fontWeight: 500,
  textAlign: "center",
  fontSize: "$2",
  color: "$foreground",
  ...truncate,
});

export const ErrorNotification = styled("div", {
  fontWeight: 500,
  display: "grid",
  gridGap: "$2",
  gridTemplateColumns: "auto 1fr",
  alignItems: "center",
  color: "$errorLight",
  background: "$error",
  fontSize: "$2",
  padding: "$5 $4",
  animation: `${fadeInAndOut} linear 5s`,
});

export const Controls = styled("section", {
  display: "grid",
  gridGap: "$1",
  gridAutoFlow: "column",
  justifyContent: "center",
});

export const Button = styled("button", {
  margin: "0",
  padding: "0",
  border: "none",
  appearance: "none",
  background: "none",
  color: "$foreground",
});
