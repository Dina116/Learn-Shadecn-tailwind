import { Outlet, useLocation } from "react-router-dom";
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
    path: "scouts",
  },
  {
    content: "المستخدمين",
    children: userIcon,
    path: "users",
  },
  {
    content: "الوحدات المحمولة",
    children: phoneIcon,
    path: "portalphones",
  },
  {
    content: "الانشطة الاستهلاكية",
    children: homeIcon,
    path: "consumeractivities",
  },
  {
    content: "المجموعات الحسابية",
    children: accountTree,
    path: "accountinggroups",
  },
  {
    content: "مسارات التحصيل",
    children: directionIcon,
    path: "bellingsystem",
  },
  {
    content: "مسارات القراءات",
    children: gasIcon,
    path: "readingpaths",
  },
  {
    content: "اجراءات الاجهزة",
    children: constructionIcon,
    path: "deviceprocedures",
  },
  {
    content: "الخزينة",
    children: moneyIcon,
    path: "treasuryinside",
  },
];

export default function SystemManagementScreen() {
  const location = useLocation();
  const isParentRoute = location.pathname === "/systemManagement";
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="flex-1">
        {isParentRoute ? (
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
          </div>
        ) : (
          <Outlet key={location.pathname} />
        )}
      </div>
    </div>
  );
}
