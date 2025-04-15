"use client";

import { useState } from "react";
import { LayoutList, ThumbsUp, User2, Paintbrush, Search, Settings } from "lucide-react";

import { cn } from "@/shared/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";

interface EditorLayoutProps {
  children: React.ReactNode;
}

interface NavigationItem {
  icon: React.ElementType;
  label: string;
  id: string;
}

const navigationItems: NavigationItem[] = [
  { icon: LayoutList, label: "Actions", id: "actions" },
  { icon: ThumbsUp, label: "Social Links", id: "social" },
  { icon: User2, label: "Content", id: "content" },
  { icon: Paintbrush, label: "Design", id: "design" },
  { icon: Search, label: "Search", id: "search" },
  { icon: Settings, label: "Settings", id: "settings" },
];

export default function EditorLayout({ children }: EditorLayoutProps) {
  const [activeTab, setActiveTab] = useState("actions");
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex h-screen w-full">
      {/* Navigation Menu - Vertical on desktop, horizontal on mobile */}
      <nav
        className={cn(
          "bg-background flex border-r transition-all duration-200",
          isMobile ? "fixed bottom-0 left-0 right-0 h-16 flex-row border-r-0 border-t" : "h-full w-20 flex-col",
        )}
      >
        <div className={cn("flex gap-1 p-2", isMobile ? "w-full flex-row overflow-x-auto" : "flex-col")}>
          {navigationItems.map((item) => (
            <Button
              className={cn("flex h-auto flex-col items-center justify-center gap-1 py-3", isMobile ? "min-w-[4rem] flex-1" : "w-full")}
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              variant={activeTab === item.id ? "default" : "outline-general"}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className={cn("flex-1 overflow-auto", isMobile ? "pb-16" : "")}>{children}</main>
    </div>
  );
}
