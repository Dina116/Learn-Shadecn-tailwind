import { useLocation } from "react-router-dom";
import LogOutPopover from "./LogOutPopover";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDrawerStore } from "./useDrawerStore";
export  const drawerWidth = 200;
export default function Header() {
  const location = useLocation();

  const {open,setOpen}=useDrawerStore()

  if (location.pathname === "/") return null;
  return (
    <>
      <header
        className="fixed w-full z-20 top-0 start-0 bg-[radial-gradient(circle,_#0086cf_0%,_#005a8e_100%)] shadow-md"
        style={{
          width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
          marginRight: open ? `${drawerWidth}px` : 0,
        }}
      >
        <nav className="bg-neutral-primary">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w- p-2">
            <div className="flex items-center gap-1">
              <span className="text-xs text-white ">SYSTEM</span>
              <LogOutPopover />
            </div>
            <div className="flex flex-row">
              <span className="flex justify-end items-center self-center text-sm text-white font-semibold whitespace-nowrap">
                {/* <span className="text-xs text-yellow-300 ml-2">(v3.9.5)</span>{" "} */}
                شركة مياه الشرب و الصرف الصحي بالبحر الأحمر
              </span>
              <IconButton
                size="small"
                onClick={() => setOpen(true)}
                sx={{ color: "white" }}
              >
                <MenuIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
