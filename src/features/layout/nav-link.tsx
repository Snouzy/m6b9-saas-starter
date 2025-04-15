"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/shared/lib/utils";

interface IProp {
  className?: string;
  href: string;
  active?: string;
  target?: string;
  targetPath?: string;
  rel?: string;
  children: React.ReactNode;
  onClick?: () => void;
  isAccordion?: boolean;
  isSubAccordion?: boolean;
}
export default function NavLink({
  className,
  href,
  active,
  target,
  rel,
  children,
  onClick,
  targetPath,
  isAccordion,
  isSubAccordion,
}: IProp) {
  const pathName = usePathname();

  return (
    <Link
      className={cn(
        "relative",
        {
          "sub-menu-active":
            (active || (!active && pathName === href) || (targetPath && pathName.startsWith(targetPath))) &&
            (isAccordion || isSubAccordion),

          active:
            (active || (!active && pathName === href) || (targetPath && pathName.startsWith(targetPath))) &&
            !(isAccordion || isSubAccordion),
        },
        "nav-item",
        className,
      )}
      href={href}
      onClick={onClick && onClick}
      rel={rel}
      target={target}
    >
      {children}
      {isAccordion && (
        <div className="absolute top-3 flex flex-col items-center gap-1 ltr:-left-5 rtl:-right-5">
          <div
            className={cn("size-[5px] rounded-full bg-gray-700/50 dark:bg-gray-600", pathName === href && "bg-primary dark:bg-[#6683F8]")}
          ></div>
          <div className="h-[26px] w-px rounded-full bg-gray-300 dark:bg-gray"></div>
        </div>
      )}

      {isSubAccordion && (
        <div className="absolute top-3 flex flex-col items-center gap-1 ltr:-left-4 rtl:-right-4">
          <div
            className={`size-[5px] rounded-full bg-gray-700/50 dark:bg-gray-600 ${pathName === href && "bg-primary dark:bg-[#6683F8]"}`}
          ></div>
          <div className="h-6 w-px rounded-full bg-gray-300 dark:bg-gray"></div>
        </div>
      )}
    </Link>
  );
}
