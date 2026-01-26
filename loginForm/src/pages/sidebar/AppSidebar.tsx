import { LayoutGrid, FileCheck, Database, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  // SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

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
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";
  return (
    <Sidebar
      side="right"
      collapsible="icon"
      className="border-l"
    >
      {/* <SidebarHeader className="border-b bg-white">
        {!isCollapsed && (
          <div className="flex flex-col items-center justify-center py-8 text-sky-900 font-bold text-center leading-tight">
            <span className="text-lg">منظومة ماس</span>
            <span className="text-xs font-normal text-sky-700">
              تحديث بيانات العملاء
            </span>
          </div>
        )}
        {isCollapsed && (
          <div className="h-[72px] flex items-center justify-center">
            <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
              <span className="text-sky-900 text-[10px]">ماس</span>
            </div>
          </div>
        )}
      </SidebarHeader> */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex flex-col items-center justify-center h-auto py-8 text-sky-900 font-bold text-center">
            {!isCollapsed && (
              <>
                <span>منظومة ماس</span>
                <span className="text-xs font-normal">
                  تحديث بيانات العملاء
                </span>
              </>
            )}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className={`
                        flex flex-row-reverse justify-start gap-4 font-bold py-6 px-4 transition-all
                        ${
                          isActive
                            ? "bg-sky-100 text-sky-900 border-l-4 border-sky-900"
                            : "text-sky-900 hover:text-sky-900 hover:bg-sky-50"
                        }
                      `}
                    >
                      <Link
                        to={item.url}
                        className="flex flex-row-reverse items-center w-full gap-3"
                      >
                        <item.icon
                          className={`h-6 w-6 shrink-0 ${isActive ? "text-sky-900" : ""}`}
                        />
                        {!isCollapsed && (
                          <span className="text-right flex-1 whitespace-nowrap">
                            {item.title}
                          </span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
            {/* <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className="flex flex-row-reverse justify-start gap-4 text-sky-900 hover:text-sky-900 font-bold py-6"
                  >
                    <a
                      href={item.url}
                      className="flex flex-row-reverse items-center w-full gap-3"
                    >
                      <item.icon className="h-6 w-6 shrink-0" />
                      {!isCollapsed && (
                        <span className="text-right flex-1">{item.title}</span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu> */}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
