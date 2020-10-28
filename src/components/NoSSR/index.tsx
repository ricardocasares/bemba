import dynamic from "next/dynamic";
import { FC, Suspense as ReactSuspense } from "react";

export type Wrapper = {
  fallback: React.ReactNode;
};

const Wrapper: FC<Wrapper> = ({ children, fallback }) => (
  <ReactSuspense fallback={fallback}>{children}</ReactSuspense>
);

export const noSSR = (Fallback: React.FC<any>) =>
  dynamic(
    async () => (props) => <Wrapper fallback={<Fallback />} {...props} />,
    {
      ssr: false,
      loading: Fallback,
    }
  );
