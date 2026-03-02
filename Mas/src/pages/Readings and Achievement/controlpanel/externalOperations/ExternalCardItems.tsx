import {
  contentSearchIcon,
  driveFileIcon,
  inventoryIcon,
  publicIcon,
  publicOffIcon,
} from "../../../../componenet/card/CardsIcons";

export const ExternalCardItems = [
  {
    id: "fawry_open",
    title: "فتح منافذ فوري",
    subTitle: "السماح بالتحصيل",
    icon: publicIcon,
  },
  {
    id: "fawry_close",
    title: "إغلاق منافذ فوري",
    subTitle: "عدم السماح بالإستعلام أو التحصيل",
    icon: publicOffIcon,
  },
  {
    id: "route_monitoring",
    title: "وحدة مراقبة المسارات",
    subTitle: "مراقبة ومتابعة تداول المسارات",
    icon: contentSearchIcon,
  },
  {
    id: "billing_groups_status",
    title: "حالة المجموعات في الفواتير",
    subTitle: "مراقبة حالة المجموعات في ايدمز",
    icon: contentSearchIcon,
  },
  {
    id: "inventory_close_post",
    title: "ترحيل الجرد وإغلاق التحصيل",
    subTitle: "ترحيل الجرد",
    icon: driveFileIcon,
  },
  {
    id: "inventory_process",
    title: "الجرد",
    subTitle: "الجرد",
    icon: inventoryIcon,
  },
];
