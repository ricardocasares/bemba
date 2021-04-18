import { styled } from "@/css";
import { hidden } from "@/css/utils";

export const Container = styled("header", {
  display: "grid",
  padding: "$3 $4",
  gridTemplateColumns: "auto 1fr",
  alignItems: "center",
  borderBottom: "1px solid $accents-2",
});

export const Navigation = styled("nav", {
  display: "grid",
  gridGap: "$3",
  gridAutoFlow: "column",
  justifyContent: "right",
  alignItems: "center",
  listStyle: "none",
  margin: "0",
  padding: "0",
});

//@ts-ignore
export const Hidden = styled("span", hidden);
