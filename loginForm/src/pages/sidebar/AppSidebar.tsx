import { LayoutGrid, FileCheck, Database, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "ادارة المستخدمين",
    url: "/home",
    icon: LayoutGrid,
  },
  {
    title: "تعيين التقارير",
    url: "/assignreports",
    icon: FileCheck,
  },
  {
    title: "ادارة الاقسام",
    url: "/managedepartment",
    icon: Database,
  },
  {
    title: "تعريف الشركات",
    url: "/companyinfo",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar side="right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="flex flex-row justify-end text-sky-900 hover:text-sky-900 font-bold"
                  >
                    <a href={item.url}>
                      <span>{item.title}</span>
                      <item.icon />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
