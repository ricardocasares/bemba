import { useFrequency } from "@/lib/hooks/useFrequency";
import { mapValueToRange } from "@/lib/utils";

export const Logo = () => {
  const freq = useFrequency();
  const opacity = mapValueToRange(freq, [0, 255], [0, 1]) || 1;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width="24"
      height="24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="2"
        style={{
          stroke: "var(--accents-4)",
          transform: `scale(${opacity})`,
          transformOrigin: "center",
        }}
      />
      <path
        d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"
        style={{
          opacity,
          stroke: "var(--success)",
        }}
      />
    </svg>
  );
};
