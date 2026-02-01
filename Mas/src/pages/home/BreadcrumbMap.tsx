import { Divider } from "@mui/material";
import { useLocation } from "react-router-dom";

const BreadcrumbMap: Record<string, string> = {
  "/home": "الرئيسية",
  "/search": "الاستعلامات",
  "/support": "خدمة العملاء",
  "/readings": "القراءات و التحصيل",
  "/treasury": "الخزينة",
  "/systemManagement": "ادارة النظام",
  "/scouts": "سجل الكشافيين",
  "/users": "سجل المستخدمين",
  "/portalphones": "الوحدات المحمولة",
  "/consumeractivities": "الانشطة الاستهلاكية",
  "/bellingsystem": "مسارات التحصيل",
  "/deviceprocedures": "اجراءات الاجهزة ",
  "/treasuryinside": "الخزينة",
};

export default function Breadcrumb() {
  const location = useLocation();

  const currentPage = BreadcrumbMap[location.pathname] || "صفحة غير معروفة";

  return (
    <div className="flex flex-row-reverse justify-start text-xs font-semibold text-gray-600 ">
      <span className="text-sky-800">الرئيسية</span>
      {location.pathname !== "/home" && (
        <>
          <span className="mx-1">/</span>
          <span className="text-gray-500">{currentPage}</span>
          <Divider />
        </>
      )}
    </div>
  );
}
