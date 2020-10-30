import dynamic from "next/dynamic";
import { FC, Suspense } from "react";

export function NoSSR(Fallback: FC<any>) {
  return dynamic(
    async () => ({ children }) => (
      <Suspense fallback={<Fallback />}>{children}</Suspense>
    ),
    {
      ssr: false,
      loading: Fallback,
    }
  );
}
