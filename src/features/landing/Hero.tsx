import Link from "next/link";
import { Rocket, Calendar } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { CircleSvg } from "@/components/svg/CircleSvg";

import { Typography } from "../../components/ui/typography";
import { ReviewSmall } from "./review/ReviewSmall";

export const Hero = () => {
  return (
    <main className="relative m-auto my-12 flex min-h-[700px] max-w-7xl items-center gap-4 px-0 max-lg:flex-col md:px-4">
      <div className="relative flex flex-1 flex-col items-start gap-4 md:w-auto lg:gap-6 xl:gap-8">
        <Typography className="!leading-tight" variant="h1">
          Ta présence en ligne
          <span className="relative ml-2 inline-block rotate-2">
            <span className="text-secondary">en 10 clics.</span>
            <CircleSvg className="color-gradient-to-r from-red-500 to-orange-800 fill-primary" />
          </span>
        </Typography>
        <Typography variant="large">Personnalisez votre profil et découvrez les fonctionnalités de FitFunnel.</Typography>
        <div className="flex flex-row ">
          <Link
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "default",
              }),
              "mr-4",
            )}
            href="https://calendly.com/lemurian-agency/30min"
            target="blank"
          >
            <Calendar className="mr-2" size={20} />
            Prendre rendez-vous
          </Link>
          <Link className={cn(buttonVariants({ size: "lg", variant: "default" }))} href="https://fitfunnel.io" target="blank">
            <Rocket className="mr-2" size={20} />
            Démarrer
          </Link>
        </div>

        <ReviewSmall
          avatars={[
            "https://i.pravatar.cc/300?u=1",
            "https://i.pravatar.cc/300?u=2",
            "https://i.pravatar.cc/300?u=3",
            "https://i.pravatar.cc/300?u=4",
            "https://i.pravatar.cc/300?u=5",
          ]}
          stars={5}
        >
          220+ utilisateurs
        </ReviewSmall>
      </div>

      <div className="flex flex-1 justify-end ">
        <img alt="Hero images" className="max-w-lg rounded-lg object-contain max-md:max-w-md" src="/images/hero1.jpg" />
      </div>
    </main>
  );
};
