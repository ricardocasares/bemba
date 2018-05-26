export default interface SVGIconProps {
  width?: number;
  height?: number;
  strokeWidth?: string;
  strokeLinecap?: "square" | "round" | "butt" | "inherit";
  strokeLinejoin?: "round" | "miter" | "bevel" | "inherit";
  color?: string;
  viewBox?: string;
  fill?: string;
  id?: string;
}
