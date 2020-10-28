import Loader from "react-content-loader";

export const CardSkeleton = () => (
  <Loader
    speed={2}
    width={"100%"}
    height={250}
    viewBox="0 0 100% 250"
    backgroundColor="var(--accents-1)"
    foregroundColor="var(--accents-2)"
  >
    <rect x="0" y="0" width="100%" height="180" />
    <rect x="0" y="190" width="60%" height="20" />
    <rect x="0" y="220" width="30%" height="20" />
  </Loader>
);
