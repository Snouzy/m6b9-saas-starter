import type { ComponentPropsWithoutRef } from "react";

export interface LogoSvgTextProps extends ComponentPropsWithoutRef<"svg"> {
  text?: string;
  size?: number;
}

export const LogoSvgText = ({ text = "m6b9", size = 32, ...props }: LogoSvgTextProps) => {
  // Accentuer le dernier caractère
  const main = text.slice(0, -1);
  const accent = text.slice(-1);
  return (
    <svg
      aria-label={text}
      fill="none"
      height={size}
      viewBox={`0 0 ${size * 4} ${size}`}
      width={size * 4}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text fill="#222" fontFamily="Inter, sans-serif" fontSize={size * 0.8} fontWeight="bold" letterSpacing="2" x="0" y={size * 0.75}>
        {main}
      </text>
      <text
        fill="#ff5722"
        fontFamily="Inter, sans-serif"
        fontSize={size * 0.8}
        fontWeight="bold"
        letterSpacing="2"
        x={main.length * size * 0.5}
        y={size * 0.75}
      >
        {accent}
      </text>
    </svg>
  );
};
