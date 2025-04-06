import { Header } from "@/features/layout/Header";
import { Footer } from "@/features/layout/Footer";

import type { PropsWithChildren } from "react";

export default async function RouteLayout(props: PropsWithChildren<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await props.params;
  console.log("locale:", locale);
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <div className="min-h-full flex-1 pb-16">{props.children}</div>
      <Footer />
    </div>
  );
}
