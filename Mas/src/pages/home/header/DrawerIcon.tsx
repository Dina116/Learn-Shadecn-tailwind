/* eslint-disable react-hooks/static-components */
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useDrawerStore } from "./useDrawerStore";
import { drawerWidth } from "./Header";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SearchIcon from "@mui/icons-material/Search";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { styled, useTheme } from "@mui/material/styles";
import MoneyIcon from "@mui/icons-material/Money";
import { useLocation } from "react-router-dom";

export default function DrawerIcon() {
  const { open, setOpen } = useDrawerStore();
  const location =useLocation()
  const theme = useTheme();
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));
  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
    >
      <DrawerHeader className="flex flex-col bg-gray-300 w-full ">
        <div className="flex w-full items-center justify-between px-5">
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <span className="font-bold text-sky-900 text-sm">(MAS)ماس</span>
        </div>
        <div className="flex flex-row gap-1 w-full">
          <span className="text-red-500 text-xs"> (v2.76.4)</span>
          <span className="text-xs">منظومة إدارة القراء والمحصلين</span>
        </div>
      </DrawerHeader>
      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton className="hover:bg-[radial-gradient(circle,_#0086cf_0%,_#005a8e_100%)]">
            {open && <ListItemText primary="الاستعلامات" />}
            <ListItemIcon>
              <SearchIcon sx={{ color: "#456dda" }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem disablePadding>
          <ListItemButton className="hover:bg-[radial-gradient(circle,_#0086cf_0%,_#005a8e_100%)]">
            {open && <ListItemText primary="خدمة العملاء" />}
            <ListItemIcon>
              <SupportAgentIcon sx={{ color: "#456dda" }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem disablePadding>
          <ListItemButton className="hover:bg-[radial-gradient(circle,_#0086cf_0%,_#005a8e_100%)]">
            {open && <ListItemText primary="القراءات و التحصيل" />}
            <ListItemIcon>
              <KeyboardIcon sx={{ color: "#456dda" }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem disablePadding>
          <ListItemButton className="hover:bg-[radial-gradient(circle,_#0086cf_0%,_#005a8e_100%)]">
            {open && <ListItemText primary="الخزينة" />}
            <ListItemIcon>
              <MoneyIcon sx={{ color: "#456dda" }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  );
}
