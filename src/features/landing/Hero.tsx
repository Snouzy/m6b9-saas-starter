import Link from "next/link";
import { Rocket } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { Typography } from "../../components/ui/typography";
import { ReviewSmall } from "./review/ReviewSmall";

export const Hero = () => {
  return (
    <main className="brutal-grid-bg relative m-auto my-20 flex min-h-[700px] max-w-7xl items-center gap-8 px-4 max-lg:flex-col border-t-4 border-black">
      <div className="relative flex flex-1 flex-col items-start gap-6 text-black">
        <Typography className="!leading-[1.1] text-5xl font-extrabold uppercase tracking-tight max-sm:text-4xl" variant="h1">
          Convertis depuis tes liens
          <span className="relative ml-3 inline-block rotate-2">
            <span className="text-primary bg-accent px-2 py-1">de ta bio</span> 💪
          </span>
        </Typography>

        <Typography className="text-muted-foreground text-lg max-w-lg font-mono">
          Engage tes visiteurs et convertis-les en clients n&apos;a jamais été aussi simple.
        </Typography>

        <div className="mt-4 flex flex-wrap gap-4">
          <Link
            className={cn(buttonVariants({ variant: "brutalAccent", size: "md" }))}
            href="https://calendly.com/lemurian-agency/30min"
            target="_blank"
          >
            {/* <Calendar size={18} /> */}
            <Rocket size={18} />
            Commencer à convertir
          </Link>

          {/* <Link
            className={cn(
              "brutal-hover:shake inline-flex items-center justify-center gap-2 rounded-none border-2 border-black bg-accent px-6 py-3 text-black hover:bg-black hover:text-white transition-colors uppercase text-sm font-bold shadow-brutal",
            )}
            href="https://fitfunnel.io"
            target="_blank"
          >
            <Rocket size={18} />
            Démarrer
          </Link> */}
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
          <span className="font-mono text-sm text-muted-foreground">220+ utilisateurs</span>
        </ReviewSmall>
      </div>

      <div className="flex flex-1 justify-end">
        <img
          alt="Hero images"
          className="max-w-lg rounded-sm border-4 border-black object-contain shadow-brutal max-md:max-w-md"
          src="/images/header.png"
        />
      </div>
    </main>
  );
};
