// import React from "react";
import Header, { drawerWidth } from "./Header";
import DrawerIcon from "./DrawerIcon";
import { Outlet } from "react-router-dom";
import { useDrawerStore } from "./useDrawerStore";
// import Sidebar from "./test";

export default function Layout() {
  const { open } = useDrawerStore();
  return (
    <>
      <Header />
      <DrawerIcon />
      {/* <Sidebar /> */}
      <main
        className="pt-12 transition-all duration-300"
        style={{
          marginRight: open ? `${drawerWidth}px` : 0,
        }}
      >
        <Outlet />
      </main>
    </>
  );
}
