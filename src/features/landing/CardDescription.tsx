"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/shared/lib/utils";
import { Typography } from "@/components/ui/typography";

export const CardDescription = ({ className }: { className: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const cardDescriptionContent = {
    heading: {
      title: "Our Mission",
      subTitle: "about us",
    },
    content: {
      img: "/images/andy.jpeg",
      descriptions: [
        "We're on a mission to help creators, influencers, and businesses connect with their audience through a beautiful and effective link in bio solution.",
        "With our customizable and user-friendly interface, you can create a professional link in bio page that reflects your brand and helps you grow your online presence.",
      ],
    },
  };

  return (
    <section className={cn("brutal-grid-bg border-b-4 border-t-4 border-black py-20", className)} ref={ref}>
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 text-center lg:max-w-xl">
          {cardDescriptionContent.heading.subTitle && (
            <motion.span
              className="mb-3 inline-block text-[13px] uppercase tracking-widest text-black"
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4 } }}
            >
              {cardDescriptionContent.heading.subTitle}
            </motion.span>
          )}

          {cardDescriptionContent.heading.title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
            >
              <Typography className="text-4xl font-extrabold uppercase text-black" variant="h2">
                {cardDescriptionContent.heading.title}
              </Typography>
            </motion.h2>
          )}
        </div>

        <div className="justify-center lg:flex">
          <div className="items-center gap-20 lg:flex lg:w-10/12">
            <div className="relative mb-10 lg:order-2 lg:mb-0 lg:w-6/12">
              <motion.div
                className="relative z-[2]"
                initial={{ opacity: 0, x: 20 }}
                style={{ y: imgScroll1 }}
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
              >
                <Image
                  alt="Andy profile"
                  className="shadow-brutal !h-[400px] !w-full rounded-none border-4 border-black object-cover object-center"
                  height={400}
                  src={cardDescriptionContent.content.img}
                  width={600}
                />
              </motion.div>
            </div>

            <div className="lg:w-6/12">
              {cardDescriptionContent.content.descriptions.map((description, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  key={index}
                  viewport={{ once: true }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2 + index * 0.2, duration: 0.4 },
                  }}
                >
                  <Typography className="font-mono mb-6 text-[17px] leading-relaxed text-black" variant="p">
                    {description}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDescription;
