import { Typography } from "@mui/material";
import ConsumerTable from "./ConsumerActivitiesTable";
import UpdateFromBillingDatabase from "./updatefrombillingdatabase";

import SubActivitiesTable from "./SubActivitiesTable";
import { useForm } from "../../../../hooks/systemmanagement/consumeractivities/useForm";

export default function ConsumerActivitiesScreen() {
  const { data } = useForm();
  return (
    <div className="w-full h-screen  bg-gray-100 pe-8">
      <div className="flex flex-col gap-2  w-full">
        <div className=" text-right ">
          <h6
            className="text-2xl text-black font-extrabold mt-1
        inline-block                          
        bg-gradient-to-r from-orange-600 to-orange-400  
        bg-no-repeat          
        bg-[length:100%_3px]  
        bg-bottom"
          >
            الأنشطة الإستهلاكية
          </h6>
        </div>
        <div className="flex flex-col w-full justify-end items-end bg-white  rounded-lg pe-4 ps-4 ">
          <UpdateFromBillingDatabase />
          <ConsumerTable/>
          <Typography
            sx={{
              color: "orangered",
              textAlign: "center",
              width: "100%",
              mt: 4,
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            الانشطة الفرعية
          </Typography>
          <SubActivitiesTable data={data} />
        </div>
      </div>
    </div>
  );
}
