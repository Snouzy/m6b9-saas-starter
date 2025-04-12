"use client";

import { Fragment, cloneElement, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Typography } from "@/components/ui/typography";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { DASHBOARD_LINKS } from "../../../app/[locale]/(dashboard-layout)/dashboard-links";

import type { NavigationLinkGroups } from "./navigation.type";

export const MobileDropdownMenu = ({ links, className }: { links: NavigationLinkGroups[]; className?: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu onOpenChange={setOpen} open={open}>
      <DropdownMenuTrigger asChild>
        <Button className={className} size="sm" variant="ghost">
          {open ? <X /> : <Menu />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        style={{
          width: "calc(100vw - 2rem)",
          marginRight: "1rem",
        }}
      >
        {links.map((section, index) => (
          <Fragment key={index}>
            {section.title ? <DropdownMenuLabel className="text-muted-foreground">{section.title}</DropdownMenuLabel> : null}
            {section.links.map((link) => (
              <DropdownMenuItem asChild key={link.url}>
                <Typography
                  as={Link}
                  className="flex items-center gap-2 text-base"
                  href={link.url}
                  onClick={() => setOpen(false)}
                  variant="large"
                >
                  {cloneElement(link.icon, {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    className: "h-4 w-4",
                  })}
                  <span>{link.title}</span>
                </Typography>
              </DropdownMenuItem>
            ))}
            {index < DASHBOARD_LINKS.length - 1 ? <DropdownMenuSeparator /> : null}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
