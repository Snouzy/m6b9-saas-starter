import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/moving-border";

/* eslint-disable max-len */
interface AnimatedBorderButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isFullRounded?: boolean;
}
export const AnimatedBorderButton = (props: AnimatedBorderButtonProps) => {
  const { isFullRounded = false, className, ...rest } = props;

  const rounded = isFullRounded ? "rounded-full" : "rounded-lg";
  const classNames = twMerge(`relative overflow-hidden ${rounded} px-20 py-6 w-full group`, className);
  return (
    <Button className={classNames} {...rest}>
      <span
        className={`absolute inset-px z-10 flex items-center justify-center ${rounded} bg-black bg-gradient-to-t  from-neutral-800 text-neutral-300 hover:bg-opacity-90 hover:cursor-pointer`}
      >
        {props.children}
      </span>

      <span
        aria-hidden
        className="group-hover:bg-opacity-0 absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco2s before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-secondary-400 "
      />
    </Button>
  );
};

// interface AnimatedBorderButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
//   isFullRounded?: boolean;
// }

// export const AnimatedBorderButton = (props: AnimatedBorderButtonProps) => {
//   const { isFullRounded = false, className, ...rest } = props;

//   const rounded = isFullRounded ? "rounded-full" : "rounded-lg";
//   const classNames = twMerge(
//     `relative overflow-hidden ${rounded} px-20 py-6 w-full group`,
//     className
//   );

//   return (
//     <button className={classNames} {...rest}>
//       {/* Background animation element */}
//       <span
//         className={`absolute inset-0 z-0 w-0 bg-gradient-to-r from-green-400 to-blue-500 group-hover:w-full transition-all ease-out duration-500 ${rounded}`}
//       />

//       {/* Foreground content */}
//       <span
//         className={`absolute inset-px z-10 flex items-center justify-center ${rounded} bg-black bg-opacity-50 text-neutral-300 group-hover:bg-opacity-0 transition-all duration-500 ease-in-out`}
//       >
//         {props.children}
//       </span>
//     </button>
//   );
// };
