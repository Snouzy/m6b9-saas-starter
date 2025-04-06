"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { BentoGrid, BentoGridItem } from "@/components/ui/Bento";

export function BentoSection() {
  return (
    <section className="mt-0 md:mt-20" data-aos-id-2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <BentoGrid className="md:grid-cols-2">
              {/* Higher traffic */}
              <BentoGridItem
                className="bg-[#1e2b80] text-white"
                title={<span className="font-bold text-2xl mt-auto">Plus de traffic sur tes liens affiliés.</span>}
              />

              {/* Boosted revenue */}
              <BentoGridItem
                className="bg-[#f8a396] text-black"
                title={<span className="font-bold text-2xl mt-auto">Plus de revenus.</span>}
              />

              {/* Trust and loyalty */}
              <BentoGridItem
                className="md:col-span-2 bg-[#3f51b5] text-white"
                title={
                  <span className="font-bold text-2xl mt-auto">Une plus grande confiance et fidélité de la part de ta communauté.</span>
                }
              />

              {/* Brand partnerships */}
              <BentoGridItem
                className="bg-[#d6e6fa] text-black"
                title={<span className="font-bold text-2xl mt-auto">Plus de demandes de partenariats de marque.</span>}
              />

              {/* Better engagement */}
              <BentoGridItem
                className="bg-black text-white"
                title={<span className="font-bold text-2xl mt-auto">{"Plus d'engagement avec tes followers."}</span>}
              />
            </BentoGrid>
          </div>

          {/* Profile card - Now outside the BentoGrid */}
          <div className="md:w-1/4 bg-[#f0f8ff] rounded-xl shadow-input border border-border lg:min-w-[350px]">
            <div className="flex flex-col items-center p-8 gap-4">
              <div className="w-24 h-24 rounded-full overflow-hidden relative">
                <Image alt="Profile" className="object-cover" fill src="/images/profile.png" />
              </div>
              <div className="text-center">
                <p className="font-medium">@Sophie_Delish</p>
                <div className="flex gap-3 mt-2 justify-center">
                  <Link aria-label="Twitter" href="#">
                    <svg
                      fill="none"
                      height="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                  <Link aria-label="Instagram" href="#">
                    <svg
                      fill="none"
                      height="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </Link>
                  <Link aria-label="YouTube" href="#">
                    <svg
                      fill="none"
                      height="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                  </Link>
                  <Link aria-label="TikTok" href="#">
                    <svg
                      fill="none"
                      height="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                      <path d="M20 9V7a3 3 0 0 0-3-3h-2"></path>
                      <path d="M13 22V11a3 3 0 0 1 3-3h2"></path>
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="w-full mt-4">
                <Image alt="Product" className="  mb-4 w-full h-auto rounded" height={200} src="/images/product.png" width={300} />

                <Button className="w-full mb-2 flex items-center gap-2" variant="outline">
                  Get 10% Off
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>
                </Button>

                <Button className="w-full mb-4 bg-gray-600 text-white">Order Today</Button>

                <Button className="w-full mb-2 bg-[#f0f8e6]" variant="outline">
                  Listen to My Podcast
                </Button>

                <Button className="w-full bg-[#f0f8e6]" variant="outline">
                  Amazon Storefront
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
