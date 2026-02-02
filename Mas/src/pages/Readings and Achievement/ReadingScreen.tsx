import OutlinedCard from "../../componenet/shared/OutlinedCard";
import GroupsIcon from "@mui/icons-material/Groups";
import {
  accountTree,
  directionIcon,
  gasIcon,
  homeIcon,
  phoneIcon,
  userIcon,
} from "./CardsIcons";

const groupIcon = (
  <GroupsIcon
    sx={{
      position: "absolute",
      left: 16,
      top: -15,
      color: "rgb(12 74 110)",
      fontSize: "2rem",
      backgroundColor: "rgb(185, 210, 225)",
      borderRadius: "50%",
      padding: "4px",
    }}
  />
);
const cardItems = [
  {
    content: "لوحة التحكم الرئيسية",
    children: groupIcon,
    path: "",
  },
  {
    content: "ادارة النظام",
    children: userIcon,
    path: "/systemManagement",
  },
  {
    content: "صيانه النظام",
    children: phoneIcon,
    path: "",
  },
  {
    content: "معالجة البيانات",
    children: homeIcon,
    path: "",
  },
  {
    content: "سجل صيانة الاجهزة",
    children: accountTree,
    path: "",
  },
  {
    content: "المسح الميداني",
    children: directionIcon,
    path: "",
  },
  {
    content: "ادارة تنشيط التحصيل",
    children: gasIcon,
    path: "",
  },
];
export default function ReadingScreen() {
  return (
    <div className="w-full h-screen  flex justify-end bg-gray-100">
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
            القراءات والتحصيل
          </h6>
        </div>
        <div className="flex flex-row-reverse flex-wrap justify-start gap-8 margin-right: 26px;">
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
