import { Button, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import ReadingTable from "./ReadingTables";
import type { LoadType } from "./types";

export default function ReadingPathsScreen() {
  const [groupId, setGroupId] = useState<string>("");
  const [activeLoad, setActiveLoad] = useState<LoadType>(null);

  const handleLoadByGroup = () => {
    console.log("1. handleLoad called. Current groupId:", groupId);
    if (!groupId) {
      setGroupId("*");
      console.log("2. groupId was empty, setting to '*'");
    }
    setActiveLoad("byGroup");
    console.log("3. setLoad(true) executed.");
  };

  const handleLoadUnassigned = () => {
    setActiveLoad("unassigned");
  };
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
            مسارات القراءات
          </h6>
        </div>
        <div className="flex flex-row w-full justify-between items-end bg-white rounded-lg p-2 gap-2 ">
          <div className="flex flex-row justify-start items-start gap-2">
            <Button variant="contained" size="small">
              ارسال التخصيص لقاعدة بيانات الفواتير
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={handleLoadUnassigned}
            >
              تحميل جميع المسارات الغير مخصصة
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={handleLoadByGroup}
            >
              تحديث من قاعدة بيانات الفواتير
            </Button>
          </div>
          <div className="flex flex-row justify-end items-end gap-2">
            <Button
              variant="contained"
              size="small"
              onClick={handleLoadByGroup}
            >
              تحميل
            </Button>
            <div className="flex flex-col justify-end items-end">
              <Typography sx={{ fontWeight: "bold", fontSize: 10 }}>
                المجموعات
              </Typography>
              <Select
                value={groupId ?? ""}
                onChange={(e) => setGroupId(e.target.value)}
                sx={{ width: 200, height: 30, direction: "rtl" }}
                size="small"
              >
                <MenuItem value="*">*-الكل</MenuItem>
                <MenuItem value="1001">1001-الغردقة - الدهار 1</MenuItem>
                <MenuItem value="1002">1002-الغردقة - الدهار 2</MenuItem>
                <MenuItem value="1003">1003-الغردقة - الميناء 1</MenuItem>
                <MenuItem value="1004">1004-الغردقة - الميناء 2</MenuItem>
                <MenuItem value="1005">1005-الغردقة - الأحياء</MenuItem>
                <MenuItem value="1006">1006-الغردقة - تجاري</MenuItem>
                <MenuItem value="1007">1007-الغردقة - كبار مشتركين</MenuItem>
                <MenuItem value="1009">1009-الغردقة - خلسه</MenuItem>
                <MenuItem value="1099">1099-الغردقة - test</MenuItem>
                <MenuItem value="1099">1099-الغردقة - test</MenuItem>
                <MenuItem value="80">80-ملغى</MenuItem>
                <MenuItem value="X1008">X1008-الغردقة - حكومي</MenuItem>
              </Select>
            </div>
          </div>
        </div>
        {activeLoad && (
          <div className="flex flex-col w-full justify-end items-end bg-white rounded-lg pe-2 ">
            <Button
              variant="contained"
              size="small"
              sx={{ margin: 2, backgroundColor: "green" }}
            >
              حفظ التعديلات
            </Button>
            <ReadingTable groupId={groupId} loadType={activeLoad} />
          </div>
        )}
      </div>
    </div>
  );
}
