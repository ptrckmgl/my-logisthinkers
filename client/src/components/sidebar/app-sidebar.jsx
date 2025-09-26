"use client";

import * as React from "react";
import { BookOpen, Bot, Settings2, SquareTerminal, Truck, LayoutDashboard, FilePlus, Archive } from "lucide-react";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
// import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Maverick",
    email: "maverick@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Smart Create",
      url: "#",
      icon: FilePlus,
    },
    {
      title: "Rentals",
      url: "#",
      icon: Truck,
    },
    {
      title: "DocHub",
      url: "#",
      icon: Archive,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" style={{}} {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5 mt-2">
              <a href="#">
                <Truck className="!size-5" />
                <span className="text-base font-semibold">JLJ Transport Logistics</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
