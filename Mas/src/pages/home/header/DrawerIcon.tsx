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
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "الاستعلامات",
    url: "/search",
    icon: SearchIcon,
  },
  {
    title: "خدمة العملاء",
    url: "/support",
    icon: SupportAgentIcon,
  },
  {
    title: "القراءات و التحصيل",
    url: "/readings",
    icon: KeyboardIcon,
  },
  {
    title: "الخزينة",
    url: "/treasury",
    icon: MoneyIcon,
  },
];
export default function DrawerIcon() {
  const { open, setOpen } = useDrawerStore();
  const location = useLocation();
  const theme = useTheme();
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "stretch",
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
        width: open ? drawerWidth : 64,
        flexShrink: 0,
        whiteSpace: "nowrap",
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : 64,
          overflowX: "hidden",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
        },
      }}
    >
      <DrawerHeader
        className="flex flex-col bg-gray-300 w-full "
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
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
        <div className="flex flex-row gap-1 w-full mr-4">
          <span className="text-red-500 text-xs"> (v2.76.4)</span>
          <span className="text-xs ">منظومة إدارة القراء والمحصلين</span>
        </div>
      </DrawerHeader>
      <Divider />

      <List>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.url;
          return (
            <>
              <ListItem
                key={item.title}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  component={Link}
                  to={item.url}
                  className="hover:bg-[radial-gradient(circle,_#0086cf_0%,_#005a8e_100%)]"
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "flex-start" : "center",
                    gap: 2,
                    flexDirection: "row-reverse",
                    bgcolor: isActive ? "primary.light" : "transparent",
                    color: isActive ? "primary.contrastText" : "inherit",
                    borderLeft: isActive
                      ? `4px solid ${theme.palette.primary.main}`
                      : "none",
                    "&:hover": {
                      bgcolor: isActive ? "primary.light" : "action.hover",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                      color: isActive ? theme.palette.primary.main : "#456dda",
                    }}
                  >
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{
                      opacity: open ? 1 : 0,
                      whiteSpace: "nowrap",
                      transition: "opacity 0.2s",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </Drawer>
  );
}
