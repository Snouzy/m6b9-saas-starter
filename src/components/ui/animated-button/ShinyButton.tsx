"use client";
/* eslint-disable max-len */
import React, { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  wantGradient?: boolean;
};

export const ShinyButton = ({ className, children, wantGradient = true, ...restProps }: Props) => {
  const gradient = "bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600";

  const [isVibrating, setIsVibrating] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsVibrating(!isVibrating);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [isVibrating]);

  return (
    <button
      className={`
      ${wantGradient ? gradient : ""}
      z-10 group relative ${
        isVibrating ? "vibrate-on-click" : ""
      } overflow-hidden focus:outline-none text-white font-bold shadow-md rounded-full px-4 py-2 transition-all duration-300 ease-in-out border-transparent ${className}`}
      type="button"
      {...restProps}
    >
      {/* <div className="shimmer z-10 "></div> */}

      <span className="z-10  opacity-0 group-hover:opacity-100 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:-translate-y-2 transition-all duration-300 ease-in-out">
        Go ! 🚀
      </span>
      <span className="z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">{children}</span>
      <span
        aria-hidden
        className="absolute inset-0 -z-10 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco3s before:bg-gradient-conic before:from-primary-500 before:via-red-500 before:to-secondary-400 opacity-40"
      />
    </button>
  );
};
