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
  Toolbar,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import MoneyIcon from "@mui/icons-material/Money";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Drawer, DrawerHeader } from "./DrawerStyles";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import Header from "./Header";

const menuItems = [
  { title: "الاستعلامات", url: "/search", icon: SearchIcon },
  { title: "خدمة العملاء", url: "/support", icon: SupportAgentIcon },
  { title: "القراءات و التحصيل", url: "/readings", icon: KeyboardIcon },
  { title: "الخزينة", url: "/treasury", icon: MoneyIcon },
];

export default function TestDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Header />
      </AppBar>

      <Drawer variant="persistent" anchor="right" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => {
            const isActive = location.pathname.startsWith(item.url);
            return (
              <ListItem
                key={item.title}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  component={Link}
                  to={item.url}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
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
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: isActive ? theme.palette.primary.main : "#456dda",
                    }}
                  >
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{ textAlign: "right", opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
