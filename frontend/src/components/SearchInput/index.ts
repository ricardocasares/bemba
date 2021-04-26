import { styled } from "@/css";

export const SearchInput = styled("input", {
  width: "100%",
  padding: "$3",
  fontSize: "$2",
  borderRadius: "$1",
  color: "$foreground",
  background: "$background",
  border: "1px solid $accents-2",
  outline: "none",
  transition: "border-color 0.2s",
  "&::placeholder": { color: "$accents-3" },
  "&:hover, &:focus": { borderColor: "$accents-4" },
});
