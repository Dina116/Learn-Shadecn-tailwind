import HomeCard from "./HomeCard";
import UsersSvg from "./UsersSvg";
import JobsSvg from "./JobsSvg";
import Navigation from "./navigation";

export default function HomeScreen() {
  const { handleJobsNavigation, handleUserNavigation } = Navigation();

  return (
    <>
      <div className="p-8 md:p-12  bg-gray-100 min-h-screen">
        <div className=" text-right ">
          <h6
            className="text-lg text-black font-bold 
      inline-block         
      pb-1                 
      bg-gradient-to-r from-blue-500 to-teal-400  
      bg-no-repeat          
      bg-[length:100%_3px]  
      bg-bottom           "
          >
            ادارة المستخدمين
          </h6>
        </div>
        <div className="flex flex-row justify-center p-20 min-h-screen bg-gray-100 flex-col gap-4  ">
          <HomeCard
            title="الوظائف"
            subTitle="حذف وإضافةوتعديل الوظائف"
            onClick={handleJobsNavigation}
          >
            <JobsSvg />
          </HomeCard>
          <HomeCard
            title="المستخدمين"
            subTitle="حذف وإضافةوتعديل المستخدمين"
            onClick={handleUserNavigation}
          >
            <UsersSvg />
          </HomeCard>
        </div>
      </div>
    </>
  );
}
