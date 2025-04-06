import { LayoutDashboard, User2, Globe } from "lucide-react";

import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";

export const DASHBOARD_LINKS: NavigationLinkGroups[] = [
  {
    links: [
      {
        title: "Dashboard",
        icon: <LayoutDashboard />,
        url: "/dashboard",
      },
      {
        title: "My website",
        icon: <Globe />,
        url: "/dashboard/website",
      },
    ],
  },
  {
    title: "Other",
    links: [
      {
        title: "Users",
        icon: <User2 />,
        url: "/users",
      },
    ],
  },
];
