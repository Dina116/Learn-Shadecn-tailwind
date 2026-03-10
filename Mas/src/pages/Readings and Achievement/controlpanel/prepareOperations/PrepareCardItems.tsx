import {
  checkList,
  disLike,
  factCheck,
  storeIcon,
  syncAlt,
} from "../../../../componenet/card/CardsIcons";

const Routes = {
  MoneyTransfeer: "/readings/controlpanel/moneyTransfeer",
};
export const PrepareCardItems = [
  {
    id: "supply_process",
    title: "التوريدات",
    subTitle: "عملية التوريد",
    icon: storeIcon,
    path: Routes.MoneyTransfeer,
  },
  {
    id: "data_preparation",
    title: "تجهيز البيانات",
    subTitle: "السماح للوحدة المحمولة بتحميل البيانات",
    icon: checkList,
    // path: Routes.COLLECTION_PULL,
  },
  {
    id: "billing_data_update",
    title: "تحديث بيانات الفواتير",
    subTitle: "تحديث بيانات العملاء فواتير",
    icon: syncAlt,
    // path: Routes.COLLECTION_PULL,
  },
  {
    id: "billing_group_update",
    title: "تحديث بيانات الفواتير بالمجموعة",
    subTitle: "تحديث بيانات الفواتير على مستوى المجموعة المحاسبية",
    icon: syncAlt,
    // path: Routes.COLLECTION_PULL,
  },
  {
    id: "tax_portal_prep",
    title: "تجهيز الفواتير بوابة الضرائب",
    subTitle: "تجهيز فواتير العملاء لبوابة الضرائب",
    icon: factCheck,
    // path: Routes.COLLECTION_PULL,
  },
  {
    id: "tax_rejected_bills",
    title: "فواتير مرفوضة من الضرائب",
    subTitle: "فواتير تم رفضها من بوابة الضرائب",
    icon: disLike,
    // path: Routes.COLLECTION_PULL,
  },
];
