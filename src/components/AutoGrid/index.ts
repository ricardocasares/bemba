import { styled } from "@/css";
import { Box } from "@/components/Box";

export const AutoGrid = styled(Box, {
  display: "grid",
  gap: "$3",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
});
