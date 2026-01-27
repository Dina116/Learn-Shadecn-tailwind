import Header, { drawerWidth } from "./Header";
import DrawerIcon from "./DrawerIcon";
import { Outlet } from "react-router-dom";
import { useDrawerStore } from "./useDrawerStore";
import Breadcrumb from "../BreadcrumbMap";
import { Divider } from "@mui/material";

export default function Layout() {
  const { open } = useDrawerStore();
  return (
    <>
      <Header />
      <DrawerIcon />
      <main
        className="pt-15 pe-7 transition-all duration-300 bg-gray-100"
        style={{
          marginRight: open ? `${drawerWidth}px` : 0,
        }}
      >
        <Breadcrumb />
        <Divider className="flex flex-row w-full pt-1 " />
        <Outlet />
      </main>
    </>
  );
}
