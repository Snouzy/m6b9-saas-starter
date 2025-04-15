import { ReactElement } from "react";
import { redirect } from "next/navigation";

import { getServerUrl } from "@/lib/server-url";
import { serverRequiredUser } from "@/lib/auth/helper";
import { paths } from "@/config/paths";

interface RootLayoutProps {
  params: Promise<{ locale: string }>;
  children: ReactElement;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const auth = await serverRequiredUser();

  if (auth.emailVerified) {
    redirect(`${getServerUrl()}/${paths.dashboard}`);
  }

  return <div>{children}</div>;
}
