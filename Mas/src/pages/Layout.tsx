// import DrawerIcon from "./DrawerIcon";
import { Outlet } from "react-router-dom";
import { useDrawerStore } from "../hooks/header/useDrawerStore";
import Breadcrumb from "../componenet/breadcrumb/BreadcrumbMap";
import TestDrawer from "./home/header/test";

export default function Layout() {
  const { open } = useDrawerStore();
  return (
    <>
      {/* <Header /> */}
      {/* <DrawerIconn /> */}
      <TestDrawer />
      <main
        className="pt-15 pe-12 transition-all duration-300 bg-gray-100"
        style={{
          marginRight: open ? "250px" : "70px",
          width: open ? "83%" : "95%",

          padding: 4,
          marginTop: 60,
        }}
      >
        <Breadcrumb />
        <Outlet />
      </main>
    </>
  );
}
