import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  Box,
  CssBaseline,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import MoneyIcon from "@mui/icons-material/Money";
import { Link } from "react-router-dom";
import { AppBar, Drawer, DrawerHeader } from "./DrawerStyles";
import Header from "./Header";
import { useDrawerStore } from "./useDrawerStore";

const menuItems = [
  { title: "الاستعلامات", url: "/search", icon: SearchIcon },
  { title: "خدمة العملاء", url: "/support", icon: SupportAgentIcon },
  { title: "القراءات و التحصيل", url: "/readings", icon: KeyboardIcon },
  { title: "الخزينة", url: "/treasury", icon: MoneyIcon },
];

export default function TestDrawer() {
  const theme = useTheme();
  const { open, setOpen } = useDrawerStore();

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Header />
      </AppBar>
      <Drawer variant="permanent" open={open} anchor="right">
        <DrawerHeader sx={{ backgroundColor: "#d0d2d6", marginBottom: 5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <IconButton onClick={handleDrawerClose} sx={{ p: 0.5 }}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
            <span className="font-bold text-sky-900 text-sm">(MAS)ماس</span>
          </Box>
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
            <span className="text-red-500 text-xs">(v2.76.4)</span>
            <span className="text-xs">منظومة إدارة القراء والمحصلين</span>
          </Box>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => {
            const isActive = location.pathname.startsWith(item.url);
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
                    sx={[
                      {
                        minHeight: 48,
                        px: 2.5,
                        bgcolor: isActive ? "action.selected" : "transparent",
                      },
                      open
                        ? {
                            justifyContent: "initial",
                          }
                        : {
                            justifyContent: "center",
                          },
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        {
                          minWidth: 0,
                          justifyContent: "center",
                          color: isActive
                            ? theme.palette.primary.main
                            : "#456dda",
                        },
                        open
                          ? {
                              mr: 3,
                            }
                          : {
                              mr: "auto",
                            },
                      ]}
                    >
                      <item.icon />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={[
                        {
                          textAlign: "right",
                        },
                        open
                          ? {
                              opacity: 1,
                            }
                          : {
                              opacity: 0,
                            },
                      ]}
                    />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
