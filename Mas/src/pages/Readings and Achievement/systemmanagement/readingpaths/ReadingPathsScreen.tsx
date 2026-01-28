import { Button, Select, Typography } from "@mui/material";
import React from "react";

export default function ReadingPathsScreen() {
  return (
    <div className="w-screen h-screen bg-gray-100 pe-8">
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
            مسارات القراءات
          </h6>
        </div>
        <div className="flex flex-row w-full justify-between items-end bg-white rounded-lg p-2 gap-2 ">
          <div className="flex flex-row justify-start items-start gap-2">
            <Button variant="contained" size="small">
              ارسال التخصيص لقاعدة بيانات الفواتير
            </Button>
            <Button variant="contained" size="small">
              تحميل جميع المسارات الغير مخصصة
            </Button>
            <Button variant="contained" size="small">
              تحديث من قاعدة بيانات الفواتير
            </Button>
          </div>
          <div className="flex flex-row justify-end items-end gap-2">
            <Button variant="contained" size="small">
              تحميل
            </Button>
            <div className="flex flex-col justify-end items-end">
              <Typography sx={{ fontWeight: "bold", fontSize: 10 }}>
                المجموعات
              </Typography>
              <Select
                sx={{ width: 200, height: 30, direction: "rtl" }}
                size="small"
              ></Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
