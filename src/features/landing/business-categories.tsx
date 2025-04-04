"use client";

import { useRef } from "react";
import Image from "next/image";

import Logo09 from "@public/images/logo-09.svg";
import Logo08 from "@public/images/logo-08.svg";
import Logo07 from "@public/images/logo-07.svg";
import Logo06 from "@public/images/logo-06.svg";
import Logo05 from "@public/images/logo-05.svg";
import Logo04 from "@public/images/logo-04.svg";
import Logo03 from "@public/images/logo-03.svg";
import Logo02 from "@public/images/logo-02.svg";
import Logo01 from "@public/images/logo-01.svg";

export function BusinessCategories() {
  const tabsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 mt-20 ">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h2 className="h2 font-red-hat-display mb-4">Affiche leur tout ton potentiel.</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Google Forms, Calendly, Instagram... <br /> Tous tes liens accessibles depuis une seule page, 24/7.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative">
          {/* Tab panels */}
          <div className="relative flex h-[324px] items-center justify-center" ref={tabsRef}>
            {/* Small blue dots */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg className="fill-orange-500" fill="none" height={41} viewBox="0 0 164 41" width={164} xmlns="http://www.w3.org/2000/svg">
                <circle cx={1} cy={8} fillOpacity="0.24" r={1} />
                <circle cx={1} cy={1} fillOpacity="0.16" r={1} />
                <circle cx={1} cy={15} r={1} />
                <circle cx={1} cy={26} fillOpacity="0.64" r={1} />
                <circle cx={1} cy={33} fillOpacity="0.24" r={1} />
                <circle cx={8} cy={8} r={1} />
                <circle cx={8} cy={15} r={1} />
                <circle cx={8} cy={26} fillOpacity="0.24" r={1} />
                <circle cx={15} cy={15} fillOpacity="0.64" r={1} />
                <circle cx={15} cy={26} fillOpacity="0.16" r={1} />
                <circle cx={8} cy={33} r={1} />
                <circle cx={1} cy={40} r={1} />
                <circle cx={1} cy={1} fillOpacity="0.24" r={1} transform="matrix(-1 0 0 1 164 7)" />
                <circle cx={1} cy={1} fillOpacity="0.16" r={1} transform="matrix(-1 0 0 1 164 0)" />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 164 14)" />
                <circle cx={1} cy={1} fillOpacity="0.64" r={1} transform="matrix(-1 0 0 1 164 25)" />
                <circle cx={1} cy={1} fillOpacity="0.24" r={1} transform="matrix(-1 0 0 1 164 32)" />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 157 7)" />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 157 14)" />
                <circle cx={1} cy={1} fillOpacity="0.24" r={1} transform="matrix(-1 0 0 1 157 25)" />
                <circle cx={1} cy={1} fillOpacity="0.64" r={1} transform="matrix(-1 0 0 1 150 14)" />
                <circle cx={1} cy={1} fillOpacity="0.16" r={1} transform="matrix(-1 0 0 1 150 25)" />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 157 32)" />
                <circle cx={1} cy={1} r={1} transform="matrix(-1 0 0 1 164 39)" />
              </svg>
            </div>
            {/* Orange glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg fill="none" height={160} viewBox="0 0 432 160" width={432} xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_2044_9)" opacity="0.6">
                  <path
                    className="fill-orange-500"
                    clipRule="evenodd"
                    d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
                    fillRule="evenodd"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height={160}
                    id="filter0_f_2044_9"
                    width={432}
                    x={0}
                    y={0}
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_2044_9" stdDeviation={32} />
                  </filter>
                </defs>
              </svg>
            </div>
            {/* Horizontal lines */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-[200px] top-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply"></div>
            {/* Diagonal lines */}
            <div className="absolute inset-x-[300px] top-1/2 h-px rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-[300px] top-1/2 h-px -rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            {/* Vertical lines */}
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-[216px] bg-gradient-to-b from-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-y-0 left-1/2 w-px translate-x-[216px] bg-gradient-to-t from-gray-200 to-transparent mix-blend-multiply"></div>
            {/* Logos */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[background:conic-gradient(from_180deg,transparent,var(--color-orange-500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
              <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                  <Image alt="Logo 01" className="relative" height={52} src={Logo01} width={52} />
                </div>
              </div>
            </div>

            <div className="relative flex flex-col">
              <div className="absolute -translate-x-[170px] -translate-y-[35px]">
                <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                    <Image alt="Logo 02" className="relative" height={32} src={Logo02} width={32} />
                  </div>
                </div>
              </div>
              <div className="absolute translate-x-[105px] -translate-y-[35px]">
                <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                    <Image alt="Logo 03" className="relative" height={22} src={Logo03} width={22} />
                  </div>
                </div>
              </div>
              <div className="absolute -translate-x-[255px] -translate-y-[115px]">
                <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                    <Image alt="Logo 04" className="relative" height={32} src={Logo04} width={32} />
                  </div>
                </div>
              </div>
              <div className="absolute -translate-y-[115px] translate-x-[175px]">
                <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                    <Image alt="Logo 05" className="relative" height={32} src={Logo05} width={32} />
                  </div>
                </div>
              </div>
              <div className="absolute translate-x-[175px] translate-y-[60px]">
                <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                    <Image alt="Logo 06" className="relative" height={42} src={Logo06} width={42} />
                  </div>
                </div>
              </div>
              <div className="absolute -translate-x-[255px] translate-y-[60px]">
                <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                    <Image alt="Logo 07" className="relative" height={32} src={Logo07} width={32} />
                  </div>
                </div>
              </div>
              <div className="absolute -translate-x-[292px] -translate-y-[25px] opacity-60">
                <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                    <Image alt="Logo 08" className="relative" height={20} src={Logo08} width={20} />
                  </div>
                </div>
              </div>
              <div className="absolute translate-x-[262px] -translate-y-[25px] opacity-40">
                <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                    <Image alt="Logo 09" className="relative" height={13} src={Logo09} width={21} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
