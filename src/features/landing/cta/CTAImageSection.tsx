import { buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { SectionLayout } from "../SectionLayout";

export const CTAImageSection = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dbtnehfrf/image/upload/v1694941212/hb6tpx6jwwhtwqtyjfpy.png)",
        backgroundSize: "cover",
      }}
    >
      <SectionLayout
        variant="image"
        className="flex min-h-[500px] flex-col items-center justify-center gap-4 text-white drop-shadow-md"
      >
        <Typography
          variant="h2"
          className="text-center text-5xl font-extrabold"
        >
          Vous souhaitez en savoir plus ?
        </Typography>
        <Typography variant="base" className="w-8/12 text-center font-bold">
          Que ce soit pour une question, une demande de devis, une remarque :
          n'hésitez pas à nous contacter via notre formulaire de contact. Je me
          ferai un plaisir de revenir vers vous pour en discuter ensemble.
        </Typography>
        <Link
          href="https://calendly.com/lemurian-agency/30min"
          className={buttonVariants({ size: "lg" })}
        >
          Discutons en !
        </Link>
      </SectionLayout>
    </div>
  );
};
