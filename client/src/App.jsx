// To run server:
// 1. enter in command: cd client
// 2. enter in command: npm run dev
// 3. ctrl + click the Local: http://localhost:5173/

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { LayoutDashboard } from "lucide-react";

export default function Page() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "16rem",
      }}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-3 pt-5">
          <LayoutDashboard size={50} className="pt-2"></LayoutDashboard>
          <h1 className="text-5xl font-bold">Dashboard</h1>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-10">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
