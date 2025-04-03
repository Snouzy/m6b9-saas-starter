import Link from "next/link";

import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { buttonVariants } from "@/components/ui/button";

import { SectionLayout } from "../SectionLayout";

export const CTAImageSection = () => {
  return (
    <div
      className="relative border-y-4 border-black shadow-brutal"
      style={{
        backgroundImage: "url(https://res.cloudinary.com/dbtnehfrf/image/upload/v1694941212/hb6tpx6jwwhtwqtyjfpy.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <SectionLayout
        className={cn("relative z-10 flex min-h-[500px] flex-col items-center justify-center gap-6 text-white text-center px-4")}
        variant="image"
      >
        <Typography className="text-4xl font-extrabold uppercase tracking-tight drop-shadow-xl max-sm:text-3xl" variant="h2">
          Vous souhaitez en savoir plus ?
        </Typography>

        <Typography className="w-full max-w-3xl text-base font-mono leading-relaxed text-white/90" variant="base">
          Que ce soit pour une question, une demande de devis, une remarque : n'hésitez pas à nous contacter via notre formulaire de
          contact. Je me ferai un plaisir de revenir vers vous pour en discuter ensemble.
        </Typography>

        <Link
          className={cn(
            buttonVariants({ size: "lg", variant: "brutalAccent" }),
            "brutal-hover:press-down shadow-brutal border-2 border-white text-white hover:text-black hover:bg-white",
          )}
          href="https://calendly.com/lemurian-agency/30min"
        >
          Discutons en !
        </Link>
      </SectionLayout>
    </div>
  );
};
