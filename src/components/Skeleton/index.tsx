import Loader from "react-content-loader";

export const CardSkeleton = () => (
  <Loader
    speed={2}
    width="100%"
    height={180}
    backgroundColor="var(--colors-accents-1)"
    foregroundColor="var(--colors-accents-2)"
  >
    <rect x="0" y="0" width="100%" height="120" />
    <rect x="0" y="125" width="60%" height="20" />
    <rect x="0" y="150" width="30%" height="20" />
  </Loader>
);

export const LineSkeleton = () => (
  <Loader
    speed={2}
    width="100%"
    height={16}
    backgroundColor="var(--colors-accents-1)"
    foregroundColor="var(--colors-accents-2)"
  >
    <rect x="0" y="0" width="100%" height="16" />
  </Loader>
);
