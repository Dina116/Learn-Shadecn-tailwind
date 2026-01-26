import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../home/header/Navbar";

export default function Layout() {
  return (
    <SidebarProvider
      defaultOpen={true}
      className="flex flex-row-reverse min-h-screen"
    >
      <AppSidebar />
      <main className="flex-1 flex flex-col min-w-0 bg-gray-50">
        <div className="sticky top-0 z-10 w-full">
          <Navbar>
            <div className="flex items-center gap-2">
              <SidebarTrigger />
            </div>
          </Navbar>
        </div>
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}
