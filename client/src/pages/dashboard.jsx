import AppSidebar from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import CardStats from "@/components/card-stats";
import { LayoutDashboard } from "lucide-react";

export default function Dashboard() {
  return (
    <>
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
          <div className="flex flex-col gap-4 p-4 pt-10">
            <div className="flex flex-1 flex-row gap-8  ">
              <CardStats />
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
