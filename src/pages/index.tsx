import { Heading } from "@/components/Typography";
import { StationCardList } from "@/components/StationCardList";

export const Index = () => (
  <div style={{ padding: "var(--sz4)" }}>
    <Heading as="h3">Tango</Heading>
    <StationCardList name="tango" />
  </div>
);

export default Index;
