import { Typography } from "@/components/ui/typography";

import { SectionLayout } from "../landing/SectionLayout";
import { EmailForm } from "./EmailForm";

export const EmailFormSection = () => {
  return (
    <SectionLayout className="relative flex w-full flex-col items-center gap-16" size="lg">
      <div className="relative m-auto flex max-w-xl flex-col gap-4 text-center">
        <Typography className="font-extrabold uppercase text-primary" variant="small">
          Be the first to use our Link in Bio service
        </Typography>
        <Typography className="text-center text-4xl lg:text-5xl" variant="h2">
          Join the waiting list of{" "}
          <span className="text-gradient bg-gradient-to-r from-red-500 via-red-400 to-yellow-400 font-mono font-extrabold uppercase">
            FrontFit Links
          </span>
        </Typography>
        <Typography variant="h3">Get early access to our powerful link management platform.</Typography>
        <div className="mx-auto mt-6 w-full max-w-md">
          <EmailForm submitButtonLabel="Join" successMessage="Thank you for joining the waiting list" />
        </div>
      </div>
    </SectionLayout>
  );
};
