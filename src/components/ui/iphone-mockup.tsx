"use client";

import * as React from "react";
import Image from "next/image";

import iPhone from "@public/images/iphone.png";
import { cn } from "@/lib/utils";

interface IPhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
  screenClassName?: string;
  showNotch?: boolean;
  width?: number;
  height?: number;
}

export function IPhoneMockup({ children, className, screenClassName, showNotch = true, width = 298, height = 601 }: IPhoneMockupProps) {
  return (
    <div className={cn("relative", className)} style={{ width, height }}>
      {/* iPhone frame image */}
      <Image alt="iPhone mockup frame" className="pointer-events-none select-none" height={height} priority src={iPhone} width={width} />

      {/* Screen content container */}
      <div
        className={cn(
          "absolute inset-0 overflow-hidden",
          "flex flex-col items-center",
          // Adjust these values based on your iPhone image
          "top-[2%] left-[6%] right-[6%] bottom-[8%]",
          "h-[96%]",
          "rounded-[30px]",
          screenClassName,
        )}
      >
        {/* Notch - if enabled */}
        {showNotch && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-[4%] bg-black rounded-b-xl z-10" />}

        {/* Content */}
        <div className="flex-1 w-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
