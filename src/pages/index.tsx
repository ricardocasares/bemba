import { Box } from "@/components/Box";
import { Heading } from "@/components/Typography";
import { StationCardList } from "@/components/StationCardList";

export const Index = () => (
  <Box p={["var(--sz4)"]}>
    <Heading as="h3">Tango</Heading>
    <StationCardList name="tango" />
  </Box>
);

export default Index;
