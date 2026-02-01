import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const BreadcrumbMap: Record<string, string> = {
  home: "الرئيسية",
  search: "الاستعلامات",
  support: "خدمة العملاء",
  readings: "القراءات و التحصيل",
  treasury: "الخزينة",
  systemManagement: "ادارة النظام",
  scouts: "سجل الكشافيين",
  users: "سجل المستخدمين",
  portalphones: "الوحدات المحمولة",
  consumeractivities: "الانشطة الاستهلاكية",
  bellingsystem: "مسارات التحصيل",
  deviceprocedures: "اجراءات الاجهزة ",
  treasuryinside: "الخزينة",
};

export default function Breadcrumb() {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        mb: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        direction: "rtl",
      }}
    >
      <Link component={RouterLink} to="/" underline="hover">
        الرئيسية
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        const label = BreadcrumbMap[value] || value;

        return isLast ? (
          <Typography key={to} color="text.primary">
            {label}
          </Typography>
        ) : (
          <Link key={to} component={RouterLink} to={to} underline="hover">
            {label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
