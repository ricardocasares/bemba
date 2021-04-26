import dynamic from "next/dynamic";
import { Suspense, SuspenseProps } from "react";

export const NoSSR = dynamic(
  async () => ({ children, fallback }: SuspenseProps) => (
    <Suspense fallback={fallback}>{children}</Suspense>
  ),
  {
    ssr: false,
  }
);
