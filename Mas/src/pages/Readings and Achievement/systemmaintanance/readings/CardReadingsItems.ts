import {
  declineIcon,
  phoneLockIcon,
  repeatOnIcon,
  repeatOpenIcon,
  replayIcon,
  reverseIcon,
  switchIcon,
} from "../../../../componenet/CardsIcons";
import type { CardReadingItem } from "../types";

export const cardReadingsItems: CardReadingItem[] = [
  {
    id: "reverse_readings",
    content: "عكس سحب القراءات من الفواتير",
    icon: reverseIcon,
  },
  {
    id: "cancel_readings_preparation",
    content: "الغاء تجهيز مسار القراءات",
    icon: declineIcon,
  },
  {
    id: "lock_reading_collection_unit",
    content: "اغلاق القراءات لمسار تعذر اغلاقة ع الوحدة",
    icon: phoneLockIcon,
  },
  {
    id: "reprepare_readind_closed_path",
    content: "اعادة تجهيز مسار للقراءات مغلق ع الوحده",
    icon: repeatOnIcon,
  },
  {
    id: "reopen_reading_group_collection",
    content: "اعادة فتح القراءة لمجموعة",
    icon: repeatOpenIcon,
  },
  {
    id: "switch_scouts_path",
    content: "تبديل مسار قراءة بين كشافين",
    icon: switchIcon,
  },
  {
    id: "reopen_reading_closed_paths",
    content: "اعادة فتح مسار قراءة مغلق علي الوحدة المحمولة ",
    icon: replayIcon,
  },
];
