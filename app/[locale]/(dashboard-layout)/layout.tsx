import { redirect } from "next/navigation";
import { headers } from "next/headers";

import { auth } from "@/utils/auth";
import Sidebar from "@/features/layout/sidebar";
import { Header } from "@/features/layout/header";

import type { PropsWithChildren } from "react";
export default async function DashboardLayout(props: PropsWithChildren) {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;

  // if (!user) {
  //   redirect("/auth/signin");
  // }

  if (!user?.emailVerified) {
    redirect("/auth/verify-email");
  }

  return (
    <div className="main-content">
      <Header />
      <Sidebar />
      <div className="mt-[60px] p-4 transition-all lg:ltr:ml-[260px] lg:rtl:mr-[260px]" id="main-content">
        {props.children}
      </div>
    </div>
  );
}
