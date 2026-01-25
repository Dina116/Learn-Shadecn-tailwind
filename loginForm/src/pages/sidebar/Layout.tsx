import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../home/header/Navbar";

export default function Layout() {
  return (
    <SidebarProvider className="flex flex-col">
      <AppSidebar />
      <main>
        <Navbar>
          <SidebarTrigger />
        </Navbar>

        <Outlet />
      </main>
    </SidebarProvider>
  );
}
