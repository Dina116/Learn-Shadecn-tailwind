import {
  closeIcone,
  downloadIcon,
  uploadIcon,
} from "../../../../componenet/card/CardsIcons";
const Routes = {
  COLLECTION_PULL: "/readings/controlpanel/collectedPulledPerGroup",
  READING_PULL: "/readings/controlpanel/readingsPulled",
  COLLECTION_POSTING: "/readings/controlpanel/collectionPosting",
  READING_POSTING: "/readings/controlpanel/readingsPosting",
  closeRWalk: "/readings/controlpanel/closeRWalk",
  closeCWalk: "/readings/controlpanel/closeCWalk",
  pulledHistory:"/readings/controlpanel/pulledHistory"
};
export const OperationsCardItems = [
  {
    id: "group_pull",
    title: "سحب بالمجموعة",
    subTitle: "شاشة لسحب الفواتير على مستوى المجموعة",
    icon: downloadIcon,
  },
  {
    id: "collection_pull",
    title: "سحب التحصيل",
    subTitle: "سحب الفواتير لبدء دورة التحصيل",
    icon: downloadIcon,
    path: Routes.COLLECTION_PULL,
  },
  {
    id: "readings_pull",
    title: "سحب القراءات",
    subTitle: "سحب العملاء لبدء دورة القراءات",
    icon: downloadIcon,
    path: Routes.READING_PULL,
  },
  {
    id: "collection_post",
    title: "ترحيل التحصيل",
    subTitle: "ترحيل التحصيل إلى قاعدة بيانات الفواتير",
    icon: uploadIcon,
    path: Routes.COLLECTION_POSTING,
  },
  {
    id: "readings_post",
    title: "ترحيل القراءات",
    subTitle: "ترحيل القراءات إلى قاعدة بيانات الفواتير",
    icon: uploadIcon,
    path: Routes.READING_POSTING,
  },
  {
    id: "collection_route_close",
    title: "إغلاق مسار تحصيل",
    subTitle: "إغلاق دورة التحصيل للاستعداد لدورة جديدة",
    icon: closeIcone,
    path: Routes.closeCWalk,
  },
  {
    id: "readings_route_close",
    title: "إغلاق مسار قراءة",
    subTitle: "إغلاق دورة القراءات للاستعداد لدورة جديدة",
    icon: closeIcone,
    path: Routes.closeRWalk,
  },
  {
    id: "billing_update_log",
    title: "سجل تحديث الفواتير",
    subTitle: "سجل تحديث الفواتير على مستوى مجموعة/مسار",
    icon: downloadIcon,
    path: Routes.pulledHistory,
  },
];
