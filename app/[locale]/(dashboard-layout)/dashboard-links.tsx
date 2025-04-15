import { LayoutDashboard, User2, Globe, Link } from "lucide-react";

import { getI18n } from "locales/server";
import { useI18n } from "locales/client";
import { paths } from "@/shared/constants/paths";

import type { NavigationLinkGroups } from "@/features/navigation/navigation.type";

type T = ReturnType<typeof useI18n> | Awaited<ReturnType<typeof getI18n>>;
export const DASHBOARD_LINKS = (t: T): NavigationLinkGroups[] => [
  {
    links: [
      {
        title: t("my_links"),
        icon: <Link />,
        url: `/${paths.dashboard}/${paths.linkInBio}`,
      },
      {
        title: t("dashboard"),
        icon: <LayoutDashboard />,
        url: `/${paths.dashboard}`,
      },
      {
        title: t("my_website"),
        icon: <Globe />,
        url: `/${paths.dashboard}/${paths.website}`,
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
