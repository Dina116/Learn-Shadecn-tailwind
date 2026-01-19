import Navbar from "./header/Navbar";
import HomeCard from "./HomeCard";
import UsersSvg from "./UsersSvg";
import JobsSvg from "./JobsSvg";
import Navigation from "./navigation";

export default function HomeScreen() {
  const { handleJobsNavigation, handleUserNavigation } = Navigation();

  return (
    <>
      <Navbar />
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
    </>
  );
}
