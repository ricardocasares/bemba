import { styled } from "@/css";
import { Gradient } from "@/components/Gradient";

export const Cover = styled(Gradient, {
  display: "grid",
  placeItems: "center",
  borderRadius: "$1 $1 0 0",
});

export const Title = styled("h2", {
  fontSize: "$2",
  fontWeight: 500,
  color: "fg",
});

export const Subtitle = styled("h3", {
  fontSize: "$1",
  fontWeight: 400,
  textTransform: "uppercase",
  color: "$accents-4",
});

export const Body = styled("div", {
  padding: "$3",
  border: "1px solid $accents-2",
  borderTop: "0",
  borderRadius: "0 0 $1 $1",
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gridGap: "10px",
  alignItems: "center",
});

export const Button = styled("button", {
  color: "$background",
  margin: "0",
  padding: "0",
  border: "none",
  background: "transparent",
});
