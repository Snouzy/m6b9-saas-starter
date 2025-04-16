"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  ClipboardType,
  Component,
  FileType,
  Fingerprint,
  Gauge,
  Gem,
  LogOut,
  Menu,
  MessageSquareText,
  PanelLeftDashed,
  Phone,
  PieChart,
  RectangleEllipsis,
  ScrollText,
  Settings,
  Sheet,
  SquareKanban,
  TableProperties,
  UserCog,
  Camera,
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";

import { useI18n } from "locales/client";
import ProfilePicture from "@public/images/profile.png";
import { cn } from "@/shared/lib/utils";
import { toR2PublicUrl } from "@/shared/lib/storage/to-R2-public-url";
import { paths } from "@/shared/constants/paths";
import { useSidebarToggle } from "@/features/layout/useSidebarToggle";
import NavLink from "@/features/layout/nav-link";
import { ContactFeedbackPopover } from "@/features/contact-feedback/ui/contact-feedback-popover";
import { useLogout } from "@/features/auth/model/useLogout";
import { env } from "@/env";
import { useCurrentUser } from "@/entities/user/model/useCurrentUser";
import { displayFirstNameAndFirstLetterLastName } from "@/entities/user/lib/display-name";
import { brandedToast } from "@/components/ui/toast";
import { Skeleton } from "@/components/ui/skeleton";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogoSvg } from "@/components/svg/LogoSvg";

interface UploadProfileImageParams {
  file: File;
}

interface UploadProfileImageResult {
  url: string;
}

export function useProfileImageUpload() {
  const t = useI18n();

  return useMutation<UploadProfileImageResult, Error, UploadProfileImageParams>({
    mutationFn: async ({ file }) => {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();

        if (res.status === 415) {
          brandedToast({ title: t("INVALID_FILE_TYPE"), variant: "error" });
        }

        if (res.status === 413) {
          brandedToast({ title: t("FILE_TOO_LARGE"), variant: "error" });
        }

        if (res.status === 400) {
          brandedToast({ title: t("NO_FILE_UPLOADED"), variant: "error" });
        }

        if (res.status === 500) {
          brandedToast({ title: t("IMAGE_PROCESSING_ERROR"), variant: "error" });
        }

        throw new Error(data.error || t("upload_failed"));
      }

      return res.json();
    },
  });
}

export function ProfileImageUploadForm({ isDisabled }: { isDisabled: boolean }) {
  const t = useI18n();
  const [isUploading, setIsUploading] = useState(false);
  const user = useCurrentUser();
  const initialUrl = user?.image ? toR2PublicUrl(user.image, env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL) : null;
  const [preview, setPreview] = useState<string | null>(initialUrl);
  const uploadMutation = useProfileImageUpload();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleUpload = (file: File) => {
    if (isDisabled) return;
    setIsUploading(true);
    uploadMutation.mutate(
      { file },
      {
        onSuccess: () => {
          setIsUploading(false);
          brandedToast({ title: t("upload_success"), variant: "success" });
        },
        onError: (error) => {
          setPreview(initialUrl);
          setIsUploading(false);
          console.error("error", error);
        },
      },
    );
  };

  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <div className="group relative">
        <div
          className={cn(
            "flex size-[72px] items-center justify-center overflow-hidden rounded-full border-2 border-gray-200 bg-gray-100 transition-opacity",
            (isUploading || isDisabled) && "opacity-60",
          )}
        >
          {!mounted ? (
            <Skeleton height={40} rounded="rounded-full" width={40} />
          ) : preview ? (
            <Image alt="Preview" className="h-full w-full object-cover" height={72} src={preview} width={72} />
          ) : (
            <Skeleton height={40} rounded="rounded-full" width={40} />
          )}
          <label
            className={cn(
              "absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/40 opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100",
              (isUploading || isDisabled) && "pointer-events-none",
            )}
            htmlFor="profileImage"
            tabIndex={0}
            title={t("change_profile_picture")}
          >
            <Camera className="size-7 text-white" />
            <input
              accept="image/png, image/jpeg"
              className="hidden"
              disabled={isUploading || isDisabled}
              id="profileImage"
              name="profileImage"
              onChange={(e) => {
                if (isDisabled) return;
                const file = e.target.files?.[0];
                if (file) {
                  setPreview(URL.createObjectURL(file));
                  handleUpload(file);
                }
              }}
              type="file"
            />
          </label>
          {(isUploading || isDisabled) && (
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white/60">
              {isUploading ? <span className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-black" /> : null}
            </div>
          )}
        </div>
      </div>
      <span className="text-xs text-gray-500">{t("profile_image_hint")}</span>
    </div>
  );
}

export const AuthenticatedHeader = () => {
  const t = useI18n();
  const pathName = usePathname();
  const user = useCurrentUser();
  const { toggleSidebar } = useSidebarToggle();
  const logout = useLogout();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 z-30 w-full bg-white shadow-sm dark:bg-black-dark">
      <div className="flex items-center justify-between gap-5 px-4 py-[15px] lg:px-5">
        <Link className="inline-block shrink-0 lg:ltr:ml-2.5 lg:rtl:mr-2.5" href="/">
          <LogoSvg className="w-24" />
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <div className="order-2 inline-flex lg:order-none">
            <ContactFeedbackPopover>
              <Button variant="outline">
                <MessageSquareText className="h-5 w-5" />
                Feedback
              </Button>
            </ContactFeedbackPopover>
          </div>
          <div className="hidden lg:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="group flex cursor-pointer items-center gap-2.5 rounded-lg [&[data-state=open]>button>svg]:rotate-180">
                  <div className="size-8 shrink-0 overflow-hidden rounded-full">
                    <Image alt="Profile Img" className="h-full w-full object-cover" height={32} src={ProfilePicture} width={32} />
                  </div>
                  <div className="hidden min-w-[80px] space-y-1 lg:block">
                    {!mounted ? (
                      <>
                        <div className="h-3 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                        <div className="h-4 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                      </>
                    ) : user ? (
                      <>
                        <h5 className="line-clamp-1 text-[10px]/3 font-semibold dark:text-gray-500">{t("re_hello")}</h5>
                        <h2 className="line-clamp-1 text-xs font-bold text-black dark:text-white">
                          {displayFirstNameAndFirstLetterLastName(user)}
                        </h2>
                      </>
                    ) : (
                      <>
                        <Skeleton height="0.75rem" width="4rem" />
                        <Skeleton height="1rem" width="5rem" />
                      </>
                    )}
                  </div>
                  <button
                    className="mt-auto text-black transition group-hover:opacity-70 ltr:-ml-1 rtl:-mr-1 dark:text-white"
                    type="button"
                  >
                    <ChevronDown className="h-4 w-4 shrink-0 duration-300" />
                  </button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[200px] space-y-1 rounded-lg p-1.5 text-sm font-medium" sideOffset={12}>
                <DropdownMenuItem className="p-0">
                  <Link
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-2 ${pathName === `/${paths.settings}` && "!bg-gray-400 !text-black dark:!bg-white/5 dark:!text-white"}`}
                    href={`/${paths.settings}`}
                  >
                    <UserCog className="size-[18px] shrink-0" />
                    Profil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Button
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-2 ${pathName === "/login" && "!bg-gray-400 !text-black dark:!bg-white/5 dark:!text-white"}`}
                    onClick={() => logout.mutateAsync()}
                    variant={null}
                  >
                    <LogOut className="size-[18px] shrink-0" />
                    Déconnexion
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <button className="order-3 duration-300 hover:opacity-80 lg:hidden dark:text-white" onClick={toggleSidebar} type="button">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Horizontal sidebar */}
      <div className="sidebar hidden items-center gap-4 overflow-y-auto border-t border-gray-300 px-6 py-2.5 dark:border-gray-700/70">
        <HoverCard openDelay={0}>
          <HoverCardTrigger asChild>
            <button
              className="nav-link rounded-lg !px-2.5 hover:bg-gray-400 data-[state=open]:bg-gray-400 data-[state=open]:text-black dark:hover:bg-white/10 dark:data-[state=open]:bg-white/10 dark:data-[state=open]:text-white"
              type="button"
            >
              <Gauge className="size-[18px] shrink-0" />
              <span>Dashboard</span>
              <ChevronDown className="size-4 shrink-0" />
            </button>
          </HoverCardTrigger>
          <HoverCardContent align="start" className="h-full max-h-96 min-w-40 overflow-y-auto p-1.5">
            <ul className="submenu space-y-1">
              <li>
                <NavLink href="/">Sales</NavLink>
              </li>
              <li>
                <NavLink href="/crypto-dashboard">Crypto</NavLink>
              </li>
              <li>
                <NavLink href="/analytics-dashboard">Analytics</NavLink>
              </li>
              <li>
                <NavLink href="/crm-dashboard">CRM</NavLink>
              </li>
              <li>
                <NavLink href="/projects-dashboard">Projects</NavLink>
              </li>
              <li>
                <NavLink href="/hospitality-dashboard">Hospitality</NavLink>
              </li>
              <li>
                <HoverCard openDelay={0}>
                  <HoverCardTrigger asChild>
                    <button
                      className="dark: flex w-full items-center rounded-lg px-2 py-1 font-medium text-gray-700 transition hover:bg-light-theme hover:text-primary dark:text-gray-600 dark:hover:bg-[#818CF8]/[6%] dark:hover:text-[#6683F8]"
                      type="button"
                    >
                      eCommerce
                      <ChevronRight className="ml-auto size-3.5 shrink-0" />
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent align="start" className="max-h-96 min-w-40 overflow-y-auto p-1.5" side="right">
                    <ul className="submenu space-y-1">
                      <li>
                        <NavLink href="/product-card">Product list</NavLink>
                      </li>
                      <li>
                        <NavLink href="/add-product">Add new product</NavLink>
                      </li>
                      <li>
                        <NavLink href="/product-details">Product Details</NavLink>
                      </li>
                      <li>
                        <NavLink href="/product-checkout">Product Checkout</NavLink>
                      </li>
                    </ul>
                  </HoverCardContent>
                </HoverCard>
              </li>
            </ul>
          </HoverCardContent>
        </HoverCard>
        <NavLink
          className={`nav-link rounded-lg !px-2.5 hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === "/chat" && "!bg-gray-400 !text-black dark:!bg-white/10"}`}
          href="/chat"
        >
          <MessageSquareText className="size-[18px] shrink-0" />
          <span>Chat</span>
        </NavLink>

        <NavLink
          className={`nav-link rounded-lg !px-2.5 hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === "/scrumboard" && "!bg-gray-400 !text-black dark:!bg-white/10"}`}
          href="/scrumboard"
        >
          <SquareKanban className="size-[18px] shrink-0" />
          <span>Scrumboard</span>
        </NavLink>

        <HoverCard openDelay={0}>
          <HoverCardTrigger asChild>
            <button
              className="nav-link rounded-lg !px-2.5 hover:bg-gray-400 data-[state=open]:bg-gray-400 data-[state=open]:text-black dark:hover:bg-white/10 dark:data-[state=open]:bg-white/10 dark:data-[state=open]:text-white"
              type="button"
            >
              <SquareKanban className="size-[18px] shrink-0 -rotate-90" />
              <span>Blog</span>
              <ChevronDown className="size-4 shrink-0" />
            </button>
          </HoverCardTrigger>
          <HoverCardContent align="start" className="h-full max-h-96 min-w-40 overflow-y-auto p-1.5">
            <ul className="submenu space-y-1">
              <li>
                <NavLink href="/blog-list">Blog-list</NavLink>
              </li>
              <li>
                <NavLink href="/blog-details">Blog details</NavLink>
              </li>
              <li>
                <NavLink href="/add-blog">Add New Blog</NavLink>
              </li>
            </ul>
          </HoverCardContent>
        </HoverCard>

        <HoverCard openDelay={0}>
          <HoverCardTrigger asChild>
            <button
              className="nav-link rounded-lg !px-2.5 hover:bg-gray-400 data-[state=open]:bg-gray-400 data-[state=open]:text-black dark:hover:bg-white/10 dark:data-[state=open]:bg-white/10 dark:data-[state=open]:text-white"
              type="button"
            >
              <ScrollText className="size-[18px] shrink-0" />
              <span>Invoice</span>
              <ChevronDown className="size-4 shrink-0" />
            </button>
          </HoverCardTrigger>
          <HoverCardContent align="start" className="h-full max-h-96 min-w-40 overflow-y-auto p-1.5">
            <ul className="submenu space-y-1">
              <li>
                <NavLink href="/invoice">Invoice</NavLink>
              </li>
              <li>
                <NavLink href="/invoice-details">Invoice details</NavLink>
              </li>
              <li>
                <NavLink href="/create-invoice">Create Invoice</NavLink>
              </li>
            </ul>
          </HoverCardContent>
        </HoverCard>

        <HoverCard openDelay={0}>
          <HoverCardTrigger asChild>
            <button
              className="nav-link rounded-lg !px-2.5 hover:bg-gray-400 data-[state=open]:bg-gray-400 data-[state=open]:text-black dark:hover:bg-white/10 dark:data-[state=open]:bg-white/10 dark:data-[state=open]:text-white"
              type="button"
            >
              <Component className="size-[18px] shrink-0" />
              <span>Components</span>
              <ChevronDown className="size-4 shrink-0" />
            </button>
          </HoverCardTrigger>
          <HoverCardContent align="start" className="h-full max-h-96 min-w-40 overflow-y-auto">
            <ul className="submenu space-y-1">
              <li>
                <NavLink href="/accordion-page">Accordion</NavLink>
              </li>
              <li>
                <NavLink href="/alert">Alert</NavLink>
              </li>
              <li>
                <NavLink href="/alert-dialog">Alert Dialog</NavLink>
              </li>
              <li>
                <NavLink href="/avatar">Avatar</NavLink>
              </li>
              <li>
                <NavLink href="/breadcrumbs">Breadcrumb</NavLink>
              </li>
              <li>
                <NavLink href="/buttons">Button</NavLink>
              </li>
              <li>
                <NavLink href="/card-page">Cards</NavLink>
              </li>
              <li>
                <NavLink href="/carousel">Carousel</NavLink>
              </li>
              <li>
                <NavLink href="/dropdown">Dropdown Menu</NavLink>
              </li>
              <li>
                <NavLink href="/empty-stats">Empty Stats</NavLink>
              </li>
              <li>
                <NavLink href="/hover-card">Hover Card</NavLink>
              </li>
              <li>
                <NavLink href="/modal">Modals</NavLink>
              </li>
              <li>
                <NavLink href="/popover">Popover</NavLink>
              </li>
              <li>
                <NavLink href="/scroll-area">Scroll Area</NavLink>
              </li>

              <li>
                <NavLink href="/sonner">Sonner</NavLink>
              </li>
              <li>
                <NavLink href="/tabs">Tab</NavLink>
              </li>

              <li>
                <NavLink href="/tag">Tag</NavLink>
              </li>

              <li>
                <NavLink href="/toasts">Toasts</NavLink>
              </li>
              <li>
                <NavLink href="/toggle-group">Toggle Group</NavLink>
              </li>
              <li>
                <NavLink href="/tooltip">Tooltip</NavLink>
              </li>
            </ul>
          </HoverCardContent>
        </HoverCard>

        <NavLink
          className={`nav-link rounded-lg !px-2.5 hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === "/chart" && "!bg-gray-400 !text-black dark:!bg-white/10"}`}
          href="/chart"
        >
          <PieChart className="size-[18px] shrink-0" />
          <span>Charts</span>
        </NavLink>

        <NavLink
          className={`nav-link rounded-lg !px-2.5 hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === "/typography" && "!bg-gray-400 !text-black dark:!bg-white/10"}`}
          href="/typography"
        >
          <FileType className="size-[18px] shrink-0" />
          <span>Typography</span>
        </NavLink>
        <NavLink
          className={`nav-link rounded-lg !px-2.5 hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === "/sidebar-page" && "!bg-gray-400 !text-black dark:!bg-white/10"}`}
          href="/sidebar-page"
        >
          <PanelLeftDashed className="size-[18px] shrink-0" />
          <span>Sidebar</span>
        </NavLink>
        <NavLink
          className={`nav-link rounded-lg !px-2.5 hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === "/sheet-page" && "!bg-gray-400 !text-black dark:!bg-white/10"}`}
          href="/sheet-page"
        >
          <Sheet className="size-[18px] shrink-0" />
          <span>Sheet</span>
        </NavLink>
        <NavLink
          className={`nav-link rounded-lg !px-2.5 hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === "/navigation-menu" && "!bg-gray-400 !text-black dark:!bg-white/10"}`}
          href="/navigation-menu"
        >
          <RectangleEllipsis className="size-[18px] shrink-0" />
          <span>Navigation Menu</span>
        </NavLink>
        <NavLink
          className={`nav-link rounded-lg !px-2.5 hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === "/pricing-plan" && "!bg-gray-400 !text-black dark:!bg-white/10"}`}
          href="/pricing-plan"
        >
          <Gem className="size-[18px] shrink-0" />
          <span>Pricing</span>
        </NavLink>

        <NavLink
          className={`nav-link rounded-lg !px-2.5 hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === "/table" && "!bg-gray-400 !text-black dark:!bg-white/10"}`}
          href="/table"
        >
          <TableProperties className="size-[18px] shrink-0" />
          <span>Table</span>
        </NavLink>

        <HoverCard openDelay={0}>
          <HoverCardTrigger asChild>
            <button
              className="nav-link rounded-lg !px-2.5 hover:bg-gray-400 data-[state=open]:bg-gray-400 data-[state=open]:text-black dark:hover:bg-white/10 dark:data-[state=open]:bg-white/10 dark:data-[state=open]:text-white"
              type="button"
            >
              <ClipboardType className="size-[18px] shrink-0" />
              <span>Forms</span>
              <ChevronDown className="size-4 shrink-0" />
            </button>
          </HoverCardTrigger>
          <HoverCardContent align="start" className="h-full max-h-96 min-w-40 overflow-y-auto p-1.5">
            <ul className="submenu space-y-1">
              <li>
                <NavLink href="/checkbox">Check Box & Radio</NavLink>
              </li>
              <li>
                <NavLink href="/combobox">Combobox</NavLink>
              </li>

              <li>
                <NavLink href="/command">Command</NavLink>
              </li>
              <li>
                <NavLink href="/form">Form</NavLink>
              </li>
              <li>
                <NavLink href="/inputs">Input</NavLink>
              </li>

              <li>
                <NavLink href="/input-otp">Input OTP</NavLink>
              </li>
            </ul>
          </HoverCardContent>
        </HoverCard>

        <NavLink
          className={`nav-link rounded-lg !px-2.5 hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === "/settings" && "!bg-gray-400 !text-black dark:!bg-white/10"}`}
          href="/settings"
        >
          <Settings className="size-[18px] shrink-0" />
          <span>Settings</span>
        </NavLink>

        <HoverCard openDelay={0}>
          <HoverCardTrigger asChild>
            <button
              className="nav-link rounded-lg !px-2.5 hover:bg-gray-400 data-[state=open]:bg-gray-400 data-[state=open]:text-black dark:hover:bg-white/10 dark:data-[state=open]:bg-white/10 dark:data-[state=open]:text-white"
              type="button"
            >
              <Fingerprint className="size-[18px] shrink-0" />
              <span>Authentication</span>
              <ChevronDown className="size-4 shrink-0" />
            </button>
          </HoverCardTrigger>
          <HoverCardContent align="start" className="h-full max-h-96 min-w-40 overflow-y-auto p-1.5">
            <ul className="submenu space-y-1">
              <li>
                <NavLink href="/login" target="_blank">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink href="/register" target="_blank">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink href="/forgot" target="_blank">
                  Forgot
                </NavLink>
              </li>
              <li>
                <NavLink href="/password" target="_blank">
                  Password
                </NavLink>
              </li>
            </ul>
          </HoverCardContent>
        </HoverCard>

        <NavLink
          className={`nav-link rounded-lg !px-2.5 hover:bg-gray-400 dark:hover:bg-white/10 ${pathName === "/contact-us" && "!bg-gray-400 !text-black dark:!bg-white/10"}`}
          href="/contact-us"
        >
          <Phone className="size-[18px] shrink-0" />
          <span>Contact Us</span>
        </NavLink>
      </div>
    </header>
  );
};
