import type { IActivityType } from "../../types";

export const getActivityItems = (
  consumpFrom?: number,
  consumpTo?: number,
): IActivityType[] => [
  { id: 1, title: "الكل", filter: "" },
  {
    id: 2,
    title: "بدون تعامل",
    filter: `Hand/cr_reading eq null and (Hand/READING_NOTE eq null or Hand/READING_NOTE eq 0)`,
  },
  { id: 3, title: "الاستهلاك السلبي", filter: "Hand/consump lt 0" },
  { id: 4, title: "الاستهلاك الصفري", filter: "Hand/consump eq 0" },
  {
    id: 5,
    title: "الاستهلاك المرتفع",
    filter: `Hand/consump ge ${consumpFrom || 100}${consumpTo ? ` and Hand/consump le ${consumpTo}` : ""}`,
  },
  {
    id: 7,
    title: "لديه متوسط",
    filter: "Hand/CONN_AVRG_CONSUMP gt 0 or Hand/MODIFIED_AVRG_CONSUMP gt 0",
  },
  {
    id: 8,
    title: "متوسط معدل",
    filter:
      "Hand/CONN_AVRG_CONSUMP ne Hand/MODIFIED_AVRG_CONSUMP and (Hand/MODIFIED_AVRG_CONSUMP gt 0)",
  },
  {
    id: 9,
    title: "كل الملاحظات",
    filter: "Hand/cr_reading eq null and Hand/READING_NOTE gt 0",
  },
  { id: 10, title: "مقدره", filter: "(Hand/IS_ESTIM_READING eq true)" },
  { id: 11, title: "انشطة متعددة", filter: "(Hand/IS_MULTI_CONN eq true)" },
  { id: 12, title: "بدون عداد", filter: "NO_METER" },
  { id: 13, title: "قراءات من البوابة الالكترونية", filter: "PORTAL" },
];
