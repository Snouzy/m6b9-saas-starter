import Link from "next/link";

import { Button } from "@/components/ui/button";

export const SignInButton = () => {
  return (
    <Button asChild variant="outline">
      <Link href={"/auth/signin?callbackUrl=/dashboard"}>Se connecter</Link>
    </Button>
  );
};
