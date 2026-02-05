import OutlinedCard from "../../../componenet/shared/OutlinedCard";
import {
  declineIcon,
  phoneLockIcon,
  repeatOnIcon,
  repeatOpenIcon,
  replayIcon,
  reverseIcon,
  switchIcon,
} from "../CardsIcons";
const cardItems = [
  {
    content: "عكس سحب القراءات من الفواتير",
    children: reverseIcon,
    path: "",
  },
  {
    content: "الغاء تجهيز مسار القراءات",
    children: declineIcon,
    path: "",
  },
  {
    content: "اغلاق القراءات لمسار تعذر اغلاقة ع الوحدة",
    children: phoneLockIcon,
    path: "",
  },
  {
    content: "اعادة تجهيز مسار للقراءات مغلق ع الوحده",
    children: repeatOnIcon,
    path: "",
  },
  {
    content: "اعادة فتح القراءة لمجموعة",
    children: repeatOpenIcon,
    path: "",
  },
  {
    content: "تبديل مسار قراءة بين كشافين",
    children: switchIcon,
    path: "",
  },
  {
    content: "اعادة فتح مسار قراءة مغلق علي الوحدة المحمولة ",
    children: replayIcon,
    path: "",
  },
];
export default function ReadingCards() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      style={{ direction: "rtl" }}
    >
      {cardItems.map((item) => {
        return (
          <div key={item.path} className="w-full mx-auto">
            <OutlinedCard
              children={item.children}
              content={item.content}
              path={item.path}
            />
          </div>
        );
      })}
    </div>
  );
}
