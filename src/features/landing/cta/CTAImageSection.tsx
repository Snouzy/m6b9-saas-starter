import Link from "next/link";

import { Typography } from "@/components/ui/typography";
import { buttonVariants } from "@/components/ui/button";

import { SectionLayout } from "../SectionLayout";

export const CTAImageSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://res.cloudinary.com/dbtnehfrf/image/upload/v1694941212/hb6tpx6jwwhtwqtyjfpy.png)",
        backgroundSize: "cover",
      }}
    >
      <SectionLayout className="flex min-h-[500px] flex-col items-center justify-center gap-4 text-white drop-shadow-md" variant="image">
        <Typography className="text-center text-5xl font-extrabold" variant="h2">
          Vous souhaitez en savoir plus ?
        </Typography>
        <Typography className="w-8/12 text-center font-bold" variant="base">
          Que ce soit pour une question, une demande de devis, une remarque : n'hésitez pas à nous contacter via notre formulaire de
          contact. Je me ferai un plaisir de revenir vers vous pour en discuter ensemble.
        </Typography>
        <Link className={buttonVariants({ size: "lg" })} href="https://calendly.com/lemurian-agency/30min">
          Discutons en !
        </Link>
      </SectionLayout>
    </div>
  );
};
