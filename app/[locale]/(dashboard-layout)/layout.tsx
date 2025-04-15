import { redirect } from "next/navigation";

import Sidebar from "@/features/layout/sidebar";
import { AuthenticatedHeader } from "@/features/layout/authenticated-header";
import { serverAuth } from "@/entities/user/model/get-server-session-user";

import type { PropsWithChildren } from "react";

export default async function DashboardLayout(props: PropsWithChildren) {
  const user = await serverAuth();

  // if (!user) {
  //   redirect("/auth/signin");
  // }

  if (!user?.emailVerified) {
    redirect("/auth/verify-email");
  }

  return (
    <div className="main-content">
      <AuthenticatedHeader />
      <Sidebar />
      <div className="mt-[60px] p-4 transition-all lg:ltr:ml-[260px] lg:rtl:mr-[260px]" id="main-content">
        {props.children}
      </div>
    </div>
  );
}
