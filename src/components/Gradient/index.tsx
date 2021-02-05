import { FC, memo } from "react";
import gradient from "random-gradient";

export interface Gradient {
  hash?: string;
  direction?: "radial" | "vertical" | "horizontal";
}

export const Gradient: FC<Gradient> = memo(
  ({ hash, direction = "vertical", ...props }) => (
    <div
      style={{
        minWidth: "100%",
        minHeight: "120px",
        background: gradient(ensureHash(hash), direction),
      }}
      {...props}
    />
  )
);

const ensureHash = (hash?: string) => hash || Math.random();
