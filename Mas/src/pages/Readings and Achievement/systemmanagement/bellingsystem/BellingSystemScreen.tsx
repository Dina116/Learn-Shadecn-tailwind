import { Button, MenuItem, Select, Typography } from "@mui/material";
import BellingTable from "./BellingTable";
import { useBellingSystem } from "../../../../hooks/systemmanagement/bellingsystem/useBellingSystem";


export default function BellingSystemScreen() {
  const {
    activeLoad,
    groupId,
    handleLoadByGroup,
    handleLoadUnassigned,
    handleChange,
  } = useBellingSystem();
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
            مسارات التحصيل
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
                onChange={handleChange}
                sx={{ width: 200, height: 30, direction: "rtl" }}
                size="small"
              >
                <MenuItem value="*">*-الكل</MenuItem>
                <MenuItem value="2001">2001-سفاجا - المجموعة الأولي</MenuItem>
                <MenuItem value="2009">2009-سفاجا الخلسة</MenuItem>
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
            <BellingTable groupId={groupId} loadType={activeLoad} />
          </div>
        )}
      </div>
    </div>
  );
}
