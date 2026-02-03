import { useLocation } from "react-router-dom";
import LogOutPopover from "./LogOutPopover";
import { IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDrawerStore } from "./useDrawerStore";
import { drawerWidth } from "./DrawerStyles";

export default function Header() {
  const location = useLocation();

  const { open, setOpen } = useDrawerStore();

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
          <div className="flex flex-wrap justify-between items-center mx-auto max-w- pt-2 pb-4 ps-2 ">
            <div className="flex items-center gap-1">
              <span className="text-xs text-white ">SYSTEM</span>
              <LogOutPopover />
            </div>

            <Toolbar
              disableGutters
              sx={{
                padding: 0,
                direction: "rtl",
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                gap: 2,
                minHeight: { xs: "40px", sm: "40px" },
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpen(true)}
                edge="start"
                sx={[open && { display: "none" }]}
              >
                <MenuIcon
                  fontSize="small"
                  onClick={() => {
                    if (open) {
                      setOpen(false);
                    } else {
                      setOpen(true);
                    }
                  }}
                />
              </IconButton>
              <Typography
                noWrap
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  fontWeight: "bold",
                  color: "whites",
                }}
              >
                شركة مياه الشرب و الصرف الصحي بالبحر الأحمر
              </Typography>
            </Toolbar>
          </div>
        </nav>
      </header>
    </>
  );
}
