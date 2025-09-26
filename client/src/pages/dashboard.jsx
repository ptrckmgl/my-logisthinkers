import { AppSidebar } from "../components/sidebar/app-sidebar";
import { Separator } from "../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { SearchForm } from "../components/search-form";
import { CardStats } from "../components/card-stats";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <SearchForm />
          </div>
        </header>
        <div className="flex flex-row gap-4 ml-6 mt-6">
          <CardStats></CardStats>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
