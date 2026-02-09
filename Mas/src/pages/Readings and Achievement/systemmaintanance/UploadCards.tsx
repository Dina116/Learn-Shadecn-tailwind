import OutlinedCardWithDialog from "../../../componenet/shared/OutlinedCardWithDialog";
import {
  allowConcateIcon,
  declineIcon,
  lockOpenIcon,
  phoneLockIcon,
  repeatOnIcon,
  repeatOpenIcon,
  replayIcon,
  reverseIcon,
  switchIcon,
} from "../../../componenet/CardsIcons";
import type { UploadCardsProps } from "./types";

const cardItems = [
  {
    id: "reverse_collection",
    content: "عكس سحب تحصيل من الفواتير",
    children: reverseIcon,
    onClick: false,
  },
  {
    id: "cancel_preparation",
    content: "الغاء تجهيز مسار التحصيل",
    children: declineIcon,
    onClick: false,
  },
  {
    id: "lock_collection_unit",
    content: "اغلاق التحصيل لمسار تعذر اغلاقة ع الوحدة",
    children: phoneLockIcon,
    onClick: false,
  },
  {
    id: "reprepare_closed_path",
    content: "اعادة تجهيز مسار للتحصيل مغلق ع الوحده",
    children: repeatOnIcon,
    onClick: false,
  },
  {
    id: "reopen_group_collection",
    content: "اعادة فتح التحصيل لمجموعة",
    children: repeatOpenIcon,
    onClick: false,
  },
  {
    id: "allow_merge_two_orders",
    content: "السماح بدمج توردتين",
    children: allowConcateIcon,
    onClick: false,
  },
  {
    id: "switch_collectors_path",
    content: "تبديل عهدة الفواتير لمسار بين محصلين",
    children: switchIcon,
    onClick: true,
  },
  {
    id: "add_remove_paths",
    content: "اضافة / حذف مسارات من المحصلين",
    children: switchIcon,
    onClick: true,
  },
  {
    id: "reopen_mobile_unit_path",
    content: "اعادة فتح مسار تحصيل مغلق علي الوحدة المحمولة لكل الدورات",
    children: replayIcon,
    onClick: false,
  },
  {
    id: "reopen_closed_paths",
    content: "اعادة فتح مسارات التحصيل المغلقة",
    children: lockOpenIcon,
    onClick: false,
  },
];

export default function UploadCards({ data = [] }: UploadCardsProps) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      style={{ direction: "rtl" }}
    >
      {cardItems.map((item) => {
        console.log("data from UploadCards", data);
        return (
          <div key={item.content} className="w-full mx-auto">
            <OutlinedCardWithDialog
              children={item.children}
              content={item.content}
              data={data}
              title={item.content}
              id={item.id}
            />
          </div>
        );
      })}
    </div>
  );
}
