import { DashboardNavigation } from "./DashboardNavigation";

import type { LayoutParams } from "@/types/next";

export default async function RouteLayout(props: LayoutParams<{}>) {
  return <DashboardNavigation>{props.children}</DashboardNavigation>;
}
