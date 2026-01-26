import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as MuiDrawer,
  IconButton,
  Divider,
  styled,
  useTheme,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import MoneyIcon from "@mui/icons-material/Money";
import { useLocation, Link } from "react-router-dom";
import { useDrawerStore } from "./useDrawerStore"; // افترض أن هذا هو hook الخاص بك لإدارة حالة الـ drawer

const drawerWidth = 240;

// قائمة عناصر القائمة الجانبية مع المسارات والأيقونات الخاصة بها
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

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const { open, setOpen } = useDrawerStore();
  const location = useLocation();
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer variant="permanent" anchor="right" open={open}>
      <DrawerHeader
        sx={{
          flexDirection: "column",
          bgcolor: "grey.300",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          {open && (
            <span
              style={{
                fontWeight: "bold",
                color: "#0c4a6e",
                fontSize: "0.875rem",
              }}
            >
              (MAS)ماس
            </span>
          )}
        </div>
        {open && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "4px",
              padding: "0 16px",
            }}
          >
            <span style={{ color: "#ef4444", fontSize: "0.75rem" }}>
              (v2.76.4)
            </span>
            <span style={{ fontSize: "0.75rem" }}>
              منظومة إدارة القراء والمحصلين
            </span>
          </div>
        )}
      </DrawerHeader>
      <Divider />
      <List>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.url;
          return (
            <ListItem key={item.title} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                component={Link}
                to={item.url}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  py: 1.5,
                  flexDirection: "row-reverse", // لعكس ترتيب الأيقونة والنص
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
                    mr: open ? 2 : "auto", // عكس الهامش ليكون على اليمين
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
                    textAlign: "right", // لمحاذاة النص إلى اليمين
                    color: isActive ? theme.palette.primary.main : "inherit",
                    fontWeight: isActive ? "bold" : "regular",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
