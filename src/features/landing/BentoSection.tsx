"use client";

import {
  // BarChart3,
  // Calendar,
  // CalendarCheck,
  // CheckCircle,
  Sparkles,
  // X,
} from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/Bento";
// import { Alert, AlertTitle } from "@/components/ui/alert";
// import { Loader } from "@/components/ui/loader";
// import { Typography } from "@/components/ui/typography";
// import type { Variants } from "framer-motion";

import { SectionLayout } from "./SectionLayout";

export function BentoGridSection() {
  return (
    <SectionLayout>
      <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            className={cn("[&>p:text-lg]", item.className)}
            description={item.description}
            header={item.header}
            icon={item.icon}
            key={i}
            title={item.title}
          />
        ))}
      </BentoGrid>
    </SectionLayout>
  );
}

// const Skeleton1 = () => {
//   const variants: Variants = {
//     initial: { opacity: 0 },
//     animate: { opacity: 1 },
//   };

//   return (
//     <motion.div
//       initial="initial"
//       whileHover="animate"
//       className="flex h-full flex-col gap-2"
//     >
//       <motion.div className="flex flex-row items-start gap-2 rounded-2xl border border-border bg-background p-3">
//         <img
//           alt="avatar"
//           src="/images/AndyPhotoNoir&Blanc.jpeg"
//           className="size-6 shrink-0 rounded-full"
//         />
//         <div>
//           <p className="text-xs text-neutral-500">
//             Create a Thread to announce Now.ts
//           </p>
//         </div>
//       </motion.div>
//       <motion.div
//         variants={variants}
//         className="flex flex-row items-start justify-end gap-2 rounded-2xl border border-border bg-background p-3"
//       >
//         <p className="text-xs text-neutral-500">
//           Today I announced my new project, Now.TS, the perfect way to create
//           professional Next.js application in days.
//         </p>
//         <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
//       </motion.div>
//     </motion.div>
//   );
// };

// const Skeleton2 = () => {
//   const variants: Variants = {
//     initial: { opacity: 0, y: -10 },
//     animate: { opacity: 1, y: 0 },
//   };
//   return (
//     <motion.div
//       initial="initial"
//       whileHover="animate"
//       className="flex h-full flex-col gap-2"
//     >
//       <motion.div>
//         <Alert variant="default" className="">
//           <Loader size={20} />
//           <AlertTitle>Schedule your threads...</AlertTitle>
//         </Alert>
//       </motion.div>
//       <motion.div variants={variants}>
//         <Alert variant="success" className="">
//           <CheckCircle size={20} />
//           <AlertTitle>Your threads are now scheduled for 7:00 AM</AlertTitle>
//         </Alert>
//       </motion.div>
//     </motion.div>
//   );
// };

const Skeleton3 = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      animate="animate"
      className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex size-full min-h-[6rem] flex-1 flex-col space-y-2 rounded-lg"
      initial="initial"
      style={{
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      variants={variants}
    >
      <motion.div className="size-full rounded-lg"></motion.div>
    </motion.div>
  );
};

// const Skeleton4 = () => {
//   const first = {
//     initial: {
//       x: 20,
//       rotate: -5,
//     },
//     hover: {
//       x: 0,
//       rotate: 0,
//     },
//   };
//   const second = {
//     initial: {
//       x: -20,
//       rotate: 5,
//     },
//     hover: {
//       x: 0,
//       rotate: 0,
//     },
//   };
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       whileHover="hover"
//       className="flex flex-1 flex-row gap-4"
//     >
//       <motion.div
//         variants={first}
//         className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-border bg-background p-4"
//       >
//         <Typography variant="large">Fille-de-la-grace.com</Typography>
//         <Typography variant={"muted"}>In the last 30 days</Typography>
//         <Typography variant={"muted"} className="text-green-500">
//           +12%
//         </Typography>
//       </motion.div>
//       <motion.div className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-border bg-background p-4">
//         <Typography variant="large">VanilleB2B.com</Typography>
//         <Typography variant={"muted"}>In the last 30 days</Typography>
//         <Typography variant={"muted"} className="text-green-500">
//           +21%
//         </Typography>
//       </motion.div>
//       <motion.div
//         variants={second}
//         className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-border bg-background p-4"
//       >
//         <Typography variant="large">Marketplace.com</Typography>
//         <Typography variant={"muted"}>In the last 30 days</Typography>
//         <Typography variant={"muted"} className="text-green-500">
//           +12%
//         </Typography>
//       </motion.div>
//     </motion.div>
//   );
// };

// const Skeleton5 = () => {
//   const variants = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: 10,
//       rotate: 5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };
//   const variantsSecond = {
//     initial: {
//       x: 0,
//     },
//     animate: {
//       x: -10,
//       rotate: -5,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   return (
//     <motion.div
//       initial="initial"
//       whileHover="animate"
//       className="flex flex-col gap-2"
//     >
//       <motion.div
//         variants={variants}
//         className="flex flex-row items-start gap-2 rounded-2xl border border-border bg-background p-3"
//       >
//         <img
//           src="/images/AndyPhotoNoir&Blanc.jpeg"
//           alt="avatar"
//           height="100"
//           width="100"
//           className="size-10 rounded-full"
//         />
//         <p className="text-xs text-neutral-500">
//           What I need to do to get more followers ?
//         </p>
//       </motion.div>
//       <motion.div
//         variants={variantsSecond}
//         className="flex flex-row items-start justify-end gap-2 rounded-2xl border border-border bg-background p-3"
//       >
//         <div>
//           <p className="text-xs text-neutral-500">Searching...</p>
//           <motion.p
//             className="text-xs text-neutral-500"
//             variants={{
//               initial: {
//                 opacity: 0,
//               },
//               animate: {
//                 opacity: 1,
//               },
//             }}
//           >
//             Based on the Threads activity of the past 30 days, you should focus
//             creating content on Next.js
//           </motion.p>
//         </div>
//         <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
//       </motion.div>
//     </motion.div>
//   );
// };

const items = [
  {
    title: "Unlcoaching.com",
    description: (
      <span className="text-sm">Réalisation d&apos;un site vitrine avec un blog, et presentation activité pour un coach sportif.</span>
    ),
    header: <Skeleton3 />,
    className: "md:col-span-1",
    icon: <Sparkles size={20} />,
  },
  {
    title: "Fille-de-la-grace.fr",
    description: <span className="text-sm">Création d&apos;un site vitrine pour mon activité de services et création de site web .</span>,
    header: <Skeleton3 />,
    className: "md:col-span-1",
    icon: <Sparkles size={20} />,
  },
  {
    title: "Vanille-B2B.com",
    description: <span className="text-sm">Réalisation d&apos;une application de service et d&apos;entre aide solidaire.</span>,
    header: <Skeleton3 />,
    className: "md:col-span-1",
    icon: <Sparkles size={20} />,
  },
  {
    title: "Unlcoaching.app",
    description: (
      <span className="text-sm">
        Application permettant à un coach sportif de créer, publier et vendre ses pack personnalisés d&apos;exercices.
      </span>
    ),
    header: <Skeleton3 />,
    className: "md:col-span-1",
    icon: <Sparkles size={20} />,
  },

  {
    title: "Marketplace.com",
    description: (
      <span className="text-sm">
        Application permettant à un coach sportif de créer, publier et vendre ses pack personnalisés d&apos;exercices.
      </span>
    ),
    header: <Skeleton3 />,
    className: "md:col-span-1",
    icon: <Sparkles size={20} />,
  },
  {
    title: "I-Doctor.com",
    description: (
      <span className="text-sm">
        Application permettant à un coach sportif de créer, publier et vendre ses pack personnalisés d&apos;exercices.
      </span>
    ),
    header: <Skeleton3 />,
    className: "md:col-span-1",
    icon: <Sparkles size={20} />,
  },
];
