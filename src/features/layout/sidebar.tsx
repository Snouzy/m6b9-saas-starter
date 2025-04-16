"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, MessageSquareText, Minus, Rocket, Settings, X } from "lucide-react";

import { useI18n } from "locales/client";
import RectangleGrid from "@public/images/rectangle-gird.png";
import { paths } from "@/shared/constants/paths";
import { useMediaQuery } from "@/fitlinks/hooks/use-media-query";
import NavLink from "@/fitlinks/features/layout/nav-link";
import { Card } from "@/fitlinks/components/ui/card";
import { Button } from "@/fitlinks/components/ui/button";
import { Accordion } from "@/fitlinks/components/ui/accordion";
import { ContactSupportDialog } from "@/features/contact/support/ContactSupportDialog";
import { LogoSvg } from "@/components/svg/LogoSvg";

const normalizePath = (urlOrPath: string) => {
  try {
    // Si c'est une URL absolue, extrait le pathname, sinon utilise tel quel
    const pathname = urlOrPath.startsWith("http") ? new URL(urlOrPath).pathname : urlOrPath;
    // Retire le segment de langue au début
    return pathname.replace(/^\/[a-zA-Z]{2}(?=\/|$)/, "");
  } catch {
    return urlOrPath;
  }
};

const Sidebar = () => {
  const t = useI18n();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathName = usePathname();
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      if (isTablet) {
        mainContent.style.marginLeft = "0px";
      } else {
        mainContent.style.marginLeft = isSidebarOpen ? "260px" : "60px";
      }
    }
  };

  const toggleSidebarResponsive = () => {
    document.getElementById("sidebar")?.classList.remove("open");
    document.getElementById("overlay")?.classList.toggle("open");
  };

  const isOpen = () => {
    const normalized = normalizePath(pathName);
    if (["/blog-list", "/blog-details", "/add-blog"].includes(pathName)) {
      return "item-2";
    } else if (
      [
        "/",
        "/crypto-dashboard",
        "/analytics-dashboard",
        "/crm-dashboard",
        "/projects-dashboard",
        "/hospitality-dashboard",
        "/product-card",
        "/add-product",
        "/product-details",
        "/product-checkout",
      ].includes(normalized)
    ) {
      return "item-1";
    } else if (["/invoice", "/invoice-details", "/create-invoice"].includes(pathName)) {
      return "item-3";
    } else if (
      [
        "/accordion-page",
        "/alert",
        "/alert-dialog",
        "/avatar",
        "/breadcrumbs",
        "/buttons",
        "/card-page",
        "/carousel",
        "/dropdown",
        "/empty-stats",
        "/hover-card",
        "/modal",
        "/popover",
        "/scroll-area",
        "/sonner",
        "/tabs",
        "/tag",
        "/toasts",
        "/toggle-group",
        "/tooltip",
      ].includes(pathName)
    ) {
      return "item-4";
    } else if (["/checkbox", "/combobox", "/command", "/form", "/inputs", "/input-otp"].includes(pathName)) {
      return "item-5";
    } else {
      return "";
    }
  };

  // useEffect(() => {
  //   if (document?.getElementById("overlay")?.classList?.contains("open")) {
  //     toggleSidebarResponsive();
  //   }
  // }, [pathName]);

  useEffect(() => {
    toggleSidebar();
  }, [isTablet]);

  return (
    <>
      <div className="fixed inset-0 z-30 hidden bg-black/50" id="overlay" onClick={toggleSidebarResponsive} />
      <Card
        className={`sidebar fixed top-0 z-40 flex h-screen w-[260px] flex-col rounded-none bg-white transition-all duration-300 lg:top-16 lg:h-[calc(100vh_-_64px)] ltr:-left-[260px] ltr:lg:left-0 rtl:-right-[260px] rtl:lg:right-0 dark:border-t dark:border-gray-300/10 ${isSidebarOpen ? "closed" : ""}`}
        id="sidebar"
      >
        <button
          className="absolute -top-3.5 hidden size-6 place-content-center rounded-full border border-gray-300 bg-white text-black lg:grid ltr:-right-2.5 rtl:-left-2.5 dark:border-gray-700 dark:bg-gray dark:text-white"
          onClick={toggleSidebar}
          type="button"
        >
          <ChevronDown className={`h-4 w-4 ltr:rotate-90 rtl:-rotate-90 ${isSidebarOpen ? "hidden" : ""}`} />
          <ChevronDown className={`hidden h-4 w-4 ltr:-rotate-90 rtl:rotate-90 ${isSidebarOpen ? "!block" : ""}`} />
        </button>
        <div className="flex items-start justify-between border-b border-gray-300 px-4 py-5 lg:hidden dark:border-gray-700/50">
          <Link className="inline-block" href="/">
            <LogoSvg className="w-24" />
          </Link>
          <button onClick={toggleSidebarResponsive} type="button">
            <X className="-mt-2 ml-auto size-4 hover:text-black ltr:-mr-2 rtl:-ml-2" />
          </button>
        </div>
        <Accordion
          className="sidemenu grow overflow-y-auto overflow-x-hidden px-2.5 pb-10 pt-2.5 transition-all"
          collapsible
          defaultValue={isOpen()}
          key={pathName}
          type="single"
        >
          <h3 className="mb-1 mt-2.5 whitespace-nowrap rounded-lg bg-gray-400 px-5 py-2.5 text-xs/tight font-semibold uppercase text-black dark:bg-gray-400/[6%] dark:text-white">
            <span>Link in bio</span>
            <Minus className="hidden h-4 w-5 text-gray" />
          </h3>
          <NavLink
            className={`nav-link ${normalizePath(pathName) === `/${paths.dashboard}` ? "!text-black" : ""}`}
            href={`/${paths.dashboard}`}
          >
            {" "}
            <MessageSquareText className="size-[18px] shrink-0" />
            <span>Tableau de bord</span>
          </NavLink>

          {/* <NavLink className={`nav-link ${pathName === `/${paths.linkInBio}` && "!text-black"}`} href={`/${paths.linkInBio}`}>
            <Pencil className="size-[18px] shrink-0" />
            <span>Modifier</span>
          </NavLink> */}
          {/* <h3 className="mt-2.5 whitespace-nowrap rounded-lg bg-gray-400 px-5 py-2.5 text-xs/tight font-semibold uppercase text-black dark:bg-gray-400/[6%] dark:text-white">
            <span>User Interface</span>
            <Minus className="text-gray hidden h-4 w-5" />
          </h3> */}
          {/* <AccordionItem
            className="p-0 !shadow-none dark:border-none"
            value="item-4"
          >
            <AccordionTrigger className="nav-link">
              <Component className="size-[18px] shrink-0" />
              <span>Components</span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="submenu space-y-2 ltr:pl-12 ltr:pr-5 rtl:pl-5 rtl:pr-12">
                <li>
                  <NavLink href="/accordion-page" isAccordion={true}>
                    Accordion
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/alert" isAccordion={true}>
                    Alert
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/alert-dialog" isAccordion={true}>
                    Alert Dialog
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/avatar" isAccordion={true}>
                    Avatar
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/breadcrumbs" isAccordion={true}>
                    Breadcrumb
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/buttons" isAccordion={true}>
                    Button
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/card-page" isAccordion={true}>
                    Cards
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/carousel" isAccordion={true}>
                    Carousel
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/dropdown" isAccordion={true}>
                    Dropdown Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/empty-stats" isAccordion={true}>
                    Empty Stats
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/hover-card" isAccordion={true}>
                    Hover Card
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/modal" isAccordion={true}>
                    Modals
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/popover" isAccordion={true}>
                    Popover
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/scroll-area" isAccordion={true}>
                    Scroll Area
                  </NavLink>
                </li>

                <li>
                  <NavLink href="/sonner" isAccordion={true}>
                    Sonner
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/tabs" isAccordion={true}>
                    Tab
                  </NavLink>
                </li>

                <li>
                  <NavLink href="/tag" isAccordion={true}>
                    Tag
                  </NavLink>
                </li>

                <li>
                  <NavLink href="/toasts" isAccordion={true}>
                    Toasts
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/toggle-group" isAccordion={true}>
                    Toggle Group
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/tooltip" isAccordion={true}>
                    Tooltip
                  </NavLink>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem> */}

          <h3 className="mb-1 mt-2.5 whitespace-nowrap rounded-lg bg-gray-400 px-5 py-2.5 text-xs/tight font-semibold uppercase text-black dark:bg-gray-400/[6%] dark:text-white">
            <span>Autre</span>
            <Minus className="hidden h-4 w-5 text-gray" />
          </h3>
          <NavLink className={`nav-link ${pathName === `/${paths.settings}` && "!text-black"}`} href={`/${paths.settings}`}>
            <Settings className="size-[18px] shrink-0" />
            <span>Paramètres</span>
          </NavLink>
        </Accordion>
        <ContactSupportDialog>
          <Button size="small" variant="link">
            {t("support")}
          </Button>
        </ContactSupportDialog>
        <div className="upgrade-menu sticky bottom-0 rounded-[10px] bg-light-theme p-4 transition-all">
          <span className="absolute left-0 right-0 top-0 -z-[1]">
            <Image alt="rectangle-grid" className="h-full w-full rounded-[10px]" height={230} src={RectangleGrid} width={250} />
          </span>
          <span className="grid size-9 place-content-center rounded-lg bg-white shadow-[0_1px_1px_0_rgba(0,0,0,0.05),0_1px_4px_0_rgba(0,0,0,0.03)]">
            <Rocket className="size-5 text-primary" />
          </span>
          <p className="mb-4 mt-3 font-semibold leading-5 text-black">Get detailed report, sales analysis, with pro plan</p>
          <Link href="https://sbthemes.lemonsqueezy.com/buy/69aeae3f-6c81-4804-a211-7b96e7e0e56a" target="_blank">
            <Button size="large" type="button" variant={"default"}>
              Upgrade Now
            </Button>
          </Link>
        </div>
      </Card>
    </>
  );
};

export default Sidebar;
