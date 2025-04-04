"use client";

import { useRef, useState } from "react";
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function BusinessCategories() {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState<string>("startups");

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div>
          <Tabs defaultValue="startups" onValueChange={setSelectedTab}>
            {/* Buttons */}
            <div className="flex justify-center">
              <TabsList className="relative inline-flex flex-wrap justify-center rounded-xl bg-white p-2 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] max-[480px]:max-w-[180px]">
                <TabsTrigger
                  className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-hidden ${selectedTab === "startups" ? "bg-gray-800 text-gray-200" : "text-gray-700"}`}
                  value="startups"
                >
                  <svg
                    className={`fill-current ${selectedTab === "startups" ? "text-gray-400" : "text-gray-500"}`}
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z" />
                  </svg>
                  <span>Startups</span>
                </TabsTrigger>
                <TabsTrigger
                  className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-hidden ${selectedTab === "web-apps" ? "bg-gray-800 text-gray-200" : "text-gray-700"}`}
                  value="web-apps"
                >
                  <svg
                    className={`fill-current ${selectedTab === "web-apps" ? "text-gray-400" : "text-gray-500"}`}
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.936.278A7.983 7.983 0 0 1 8 0a8 8 0 1 1-8 8c0-.722.104-1.413.278-2.064a1 1 0 1 1 1.932.516A5.99 5.99 0 0 0 2 8a6 6 0 1 0 6-6c-.53 0-1.045.076-1.548.21A1 1 0 1 1 5.936.278Zm.132 7.204A2.003 2.003 0 0 0 8 10a2 2 0 1 0-.518-3.932L3.707 2.293a1 1 0 0 0-1.414 1.414l3.775 3.775Z" />
                  </svg>
                  <span>Web Apps</span>
                </TabsTrigger>
                <TabsTrigger
                  className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-hidden ${selectedTab === "ecommerce" ? "bg-gray-800 text-gray-200" : "text-gray-700"}`}
                  value="ecommerce"
                >
                  <svg
                    className={`fill-current ${selectedTab === "ecommerce" ? "text-gray-400" : "text-gray-500"}`}
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 2a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0V2Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 0-2 0v12a1 1 0 1 0 2 0V2Z" />
                  </svg>
                  <span>eCommerce</span>
                </TabsTrigger>
                <TabsTrigger
                  className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-hidden ${selectedTab === "enterprise" ? "bg-gray-800 text-gray-200" : "text-gray-700"}`}
                  value="enterprise"
                >
                  <svg
                    className={`fill-current ${selectedTab === "enterprise" ? "text-gray-400" : "text-gray-500"}`}
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.06 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 1 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331A2.162 2.162 0 0 1 .06 10.003Zm7.855-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33a.172.172 0 0 0 .17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.084 2.023a.172.172 0 0 0-.17-.001h.001ZM9.075.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.924.285a2.173 2.173 0 0 1 2.15 0h.001Z" />
                  </svg>
                  <span>Enterprise</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab panels */}
            <div className="mt-10 relative flex h-[324px] items-center justify-center" ref={tabsRef}>
              {/* Small blue dots */}
              <div className="absolute">
                <svg className="fill-blue-500" fill="none" height={41} viewBox="0 0 164 41" width={164} xmlns="http://www.w3.org/2000/svg">
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
              {/* Blue glow */}
              <div className="absolute ">
                <svg fill="none" height={160} viewBox="0 0 432 160" width={432} xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_f_2044_9)" opacity="0.6">
                    <path
                      className="fill-blue-500"
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
              <div className="absolute inset-x-0 top-0  h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-0 bottom-0  h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-[200px] top-1/2  h-px bg-linear-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply"></div>
              {/* Diagonal lines */}
              <div className="absolute inset-x-[300px] top-1/2  h-px rotate-[20deg] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-[300px] top-1/2  h-px -rotate-[20deg] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              {/* Vertical lines */}
              <div className="absolute inset-y-0 left-1/2  w-px -translate-x-[216px] bg-linear-to-b from-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-y-0 left-1/2  w-px translate-x-[216px] bg-linear-to-t from-gray-200 to-transparent mix-blend-multiply"></div>
              {/* Logos */}
              <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[background:conic-gradient(from_180deg,transparent,var(--color-blue-500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                    <Image alt="Logo 01" className="relative" height={32} src={Logo01} width={32} />
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col">
                <TabsContent value="startups">
                  <div className="absolute -translate-x-[136px]">
                    <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 02" className="relative" height={22} src={Logo02} width={23} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[136px]">
                    <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 03" className="relative" height={22} src={Logo03} width={22} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 04" className="relative" height={22} src={Logo04} width={24} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-y-[82px] translate-x-[216px]">
                    <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 05" className="relative" height={25} src={Logo05} width={25} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[216px] translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 06" className="relative" height={18} src={Logo06} width={20} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[216px] translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 07" className="relative" height={25} src={Logo07} width={25} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[292px] opacity-40">
                    <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                        <Image alt="Logo 08" className="relative" height={20} src={Logo08} width={20} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[292px] opacity-40">
                    <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                        <Image alt="Logo 09" className="relative" height={13} src={Logo09} width={21} />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="web-apps">
                  <div className="absolute -translate-x-[136px]">
                    <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 03" className="relative" height={22} src={Logo03} width={22} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[136px]">
                    <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 04" className="relative" height={22} src={Logo04} width={24} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 05" className="relative" height={25} src={Logo05} width={25} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-y-[82px] translate-x-[216px]">
                    <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 02" className="relative" height={22} src={Logo02} width={23} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[216px] translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 07" className="relative" height={25} src={Logo07} width={25} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[216px] translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 06" className="relative" height={18} src={Logo06} width={20} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[292px] opacity-40">
                    <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                        <Image alt="Logo 09" className="relative" height={13} src={Logo09} width={21} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[292px] opacity-40">
                    <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                        <Image alt="Logo 08" className="relative" height={20} src={Logo08} width={20} />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="ecommerce">
                  <div className="absolute -translate-x-[136px]">
                    <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 02" className="relative" height={22} src={Logo02} width={23} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[136px]">
                    <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 03" className="relative" height={22} src={Logo03} width={22} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 04" className="relative" height={22} src={Logo04} width={24} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-y-[82px] translate-x-[216px]">
                    <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 05" className="relative" height={25} src={Logo05} width={25} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[216px] translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 06" className="relative" height={18} src={Logo06} width={20} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[216px] translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 07" className="relative" height={25} src={Logo07} width={25} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[292px] opacity-40">
                    <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                        <Image alt="Logo 08" className="relative" height={20} src={Logo08} width={20} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[292px] opacity-40">
                    <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                        <Image alt="Logo 09" className="relative" height={13} src={Logo09} width={21} />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="enterprise">
                  <div className="absolute -translate-x-[136px]">
                    <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 03" className="relative" height={22} src={Logo03} width={22} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[136px]">
                    <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 04" className="relative" height={22} src={Logo04} width={24} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 05" className="relative" height={25} src={Logo05} width={25} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-y-[82px] translate-x-[216px]">
                    <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 02" className="relative" height={22} src={Logo02} width={23} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[216px] translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 07" className="relative" height={25} src={Logo07} width={25} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[216px] translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Image alt="Logo 06" className="relative" height={18} src={Logo06} width={20} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[292px] opacity-40">
                    <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                        <Image alt="Logo 09" className="relative" height={13} src={Logo09} width={21} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[292px] opacity-40">
                    <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                        <Image alt="Logo 08" className="relative" height={20} src={Logo08} width={20} />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
