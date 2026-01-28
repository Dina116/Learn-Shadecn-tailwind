import OutlinedCard from "../../../componenet/shared/OutlinedCard";
import {
  accountTree,
  constructionIcon,
  directionIcon,
  gasIcon,
  groupIcon,
  homeIcon,
  moneyIcon,
  phoneIcon,
  userIcon,
} from "../CardsIcons";

const cardItems = [
  {
    content: "الكشافين",
    children: groupIcon,
    path: "/scouts",
  },
  {
    content: "المستخدمين",
    children: userIcon,
    path: "/users",
  },
  {
    content: "الوحدات المحمولة",
    children: phoneIcon,
    path: "/portalphones",
  },
  {
    content: "الانشطة الاستهلاكية",
    children: homeIcon,
    path: "/consumeractivities",
  },
  {
    content: "المجموعات الحسابية",
    children: accountTree,
    path: "/accountinggroups",
  },
  {
    content: "مسارات التحصيل",
    children: directionIcon,
    path: "/bellingsystem",
  },
  {
    content: "مسارات القراءات",
    children: gasIcon,
    path: "/readingpaths",
  },
  {
    content: "اجراءات الاجهزة",
    children: constructionIcon,
    path: "",
  },
  {
    content: "الخزينة",
    children: moneyIcon,
    path: "",
  },
];
export default function SystemManagementScreen() {
  return (
    <div className="w-screen h-screen flex justify-end bg-gray-100">
      <div className="flex flex-col gap-5">
        <div className=" text-right pe-12 ">
          <h6
            className="text-2xl text-black font-extrabold mt-1
      inline-block                          
      bg-gradient-to-r from-orange-600 to-orange-400  
      bg-no-repeat          
      bg-[length:100%_3px]  
      bg-bottom"
          >
            إدارة النظام
          </h6>
        </div>
        <div className="flex flex-row-reverse flex-wrap justify-start gap-8 px-10">
          {cardItems.map((item, index) => {
            return (
              <div key={index} className="w-full sm:w-[45%] lg:w-[22%]">
                <OutlinedCard
                  children={item.children}
                  content={item.content}
                  path={item.path}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
