import { Breadcrumbs, Divider, Link, Typography } from "@mui/material";
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
  systemMaintanance: "صيانة النظام ",
  switchcollectorspath: "تبديل عهدة فواتير بين محصلين",
  addremovepaths: "اضافة وحذف مناطق للمحصلين",
  dataProcessing: "معالجة البيانات",
  switchReadersPathsScreen: "تبديل عهدة قراءات بين محصلين",
  collectbills: "تحصيل الفواتير",
  changepaymenttype: "تغيير طريقة الدفع",
  printreadings: "طباعة القراءات",
  rearrangementpaths: "اعادة ترتيب المسارات",
  collectionsactivation: "إدارة تنشيط التحصيل",
  MarketingPlanExecution: "تنفيذ خطة التسويق",
};

export default function Breadcrumb() {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);
  const commonStyles = {
    fontWeight: "bold",
    fontSize: "0.875rem",
  };
  if (
    pathnames.length === 0 ||
    (pathnames.length === 1 && pathnames[0] === "home")
  ) {
    return (
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ direction: "rtl", paddingRight: 4, paddingTop: 1 }}
      >
        <Typography
          sx={{ ...commonStyles, color: "black", fontSize: "0.75rem" }}
        >
          الرئيسية
        </Typography>
      </Breadcrumbs>
    );
  }
  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          direction: "rtl",
          paddingRight: 4,
          paddingTop: 1,
        }}
      >
        <Link
          component={RouterLink}
          to="/home"
          underline="hover"
          sx={{ ...commonStyles, color: "black" }}
        >
          الرئيسية
        </Link>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const label = BreadcrumbMap[value] || value;

          if (isLast) {
            return (
              <Typography
                key={to}
                sx={{
                  ...commonStyles,
                  color: "text.secondary",
                }}
              >
                {label}
              </Typography>
            );
          }

          return (
            <Link
              key={to}
              component={RouterLink}
              to={to}
              underline="hover"
              sx={{
                ...commonStyles,
                color: "black",
              }}
            >
              {label}
            </Link>
          );
        })}
      </Breadcrumbs>
      <Divider className="flex flex-row w-full pt-1 " />
    </>
  );
}
