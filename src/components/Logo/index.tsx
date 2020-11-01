import { useFrequency } from "@/lib/hooks/useFrequency";
import { mapValueToRange } from "@/lib/utils";

export const Logo = () => {
  const freq = useFrequency();
  const alpha = mapValueToRange(freq, [0, 255], [0, 1]);

  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      shape-rendering="geometricPrecision"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="2" style={{ stroke: "rgb(121, 40, 202)" }} />
      <path
        d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"
        style={{
          color: "rgb(204, 73, 73)",
          stroke: "rgb(0, 112, 243)",
          opacity: alpha || 1,
        }}
      />
    </svg>
  );
};
