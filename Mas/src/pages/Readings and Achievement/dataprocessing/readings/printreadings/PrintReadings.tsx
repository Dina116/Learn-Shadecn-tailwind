import { Button } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import type {
  QueryParams,
  ReaderFormValues,
  ReadersFormRef,
  ReadingDataType,
  WalkFormValues,
} from "../../types";
import ReadersDialog from "./ReadersDialog";
import { useMemo, useRef, useState } from "react";
import SharedTablePagination from "../../../../../componenet/shared/SharedTablePagination";
import { columns } from "./columns";
import WalkingDialog from "./WalkingDialog";
import { getActivityItems } from "./utils/getActivityItems ";
import { useReaders, useReadingsData } from "./useReading";

export default function PrintReadings() {
  const [isReaderDialogOpen, setIsReaderDialogOpen] = useState(false);
  const [isWalkingDialogOpen, setIsWalkingDialogOpen] = useState(false);

  const [queryParams, setQueryParams] = useState<QueryParams | null>(null);

  const { data: readersData } = useReaders();
  const { data: TableData } = useReadingsData(queryParams);

  const flattenedTableData = useMemo((): ReadingDataType[] => {
    if (!TableData) {
      return [];
    }
    return TableData.map((item) => Object.values(item)[0]).filter(Boolean);
  }, [TableData]);

  const formRef = useRef<ReadersFormRef>(null);
  const handleReaderFormSubmit = (data: ReaderFormValues) => {
    const activityItems = getActivityItems(data.consumpFrom, data.consumpTo);
    const filterParts = [`Hand/EMPID_R eq ${data.readerId}`];
    const selectedActivity = activityItems.find(
      (item) => item.id === data.activityId,
    );
    if (selectedActivity?.filter) {
      filterParts.push(selectedActivity.filter);
    }
    const finalFilterString = filterParts.join(" and ");

    setQueryParams({
      empId: data.readerId,
      filter: finalFilterString,
    });
    setIsReaderDialogOpen(false);
  };

  const handleDialogSave = () => {
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  const handleWalkFormSubmit = (data: WalkFormValues) => {
    const activityItems = getActivityItems(data.consumpFrom, data.consumpTo);
    const filterParts = [
      `Hand/BILLGROUP eq '${data.BILLGROUP}'`,
      `Hand/BOOK_NO_R eq '${data.BOOK_NO}'`,
      `Hand/WALK_NO_R eq '${data.WALK_NO}'`,
    ];
    const selectedActivity = activityItems.find(
      (item) => item.id === data.activityId,
    );
    if (selectedActivity?.filter) {
      filterParts.push(selectedActivity.filter);
    }
    const finalFilterString = filterParts.join(" and ");

    setQueryParams({
      group: data.BILLGROUP,
      path: data.WALK_NO,
      book: data.BOOK_NO,
      filter: finalFilterString,
    });
    setIsWalkingDialogOpen(false);
  };

  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="flex-1">
        <div className="flex flex-col gap-4 p-2 ">
          <div className=" text-right  ">
            <h6
              className="text-2xl text-black font-extrabold mt-1
         inline-block                          
         bg-gradient-to-r from-orange-600 to-orange-400  
         bg-no-repeat          
         bg-[length:100%_3px]  
         bg-bottom"
            >
              طباعة كشوف القراءات
            </h6>
          </div>
          <div className="flex flex-col w-full bg-white p-2 rounded-lg">
            <div className="flex justify-end p-2 gap-2">
              <>
                <Button
                  variant="outlined"
                  startIcon={<SearchOutlinedIcon />}
                  sx={{
                    outlineColor: "orangered",
                    fontWeight: "bold",
                    color: "orangered",
                    border: 1,
                    borderColor: "orangered",
                    "&:hover": { backgroundColor: "#fceee9" },
                  }}
                  size="small"
                  onClick={() => setIsWalkingDialogOpen(true)}
                >
                  بالمسار
                </Button>
                <WalkingDialog
                  title="كشف قراءة"
                  formRef={formRef}
                  handleCloseDialog={() => setIsWalkingDialogOpen(false)}
                  handleFormSubmit={handleWalkFormSubmit}
                  isDialogOpen={isWalkingDialogOpen}
                  handleSave={handleDialogSave}
                />
              </>
              <>
                <Button
                  variant="contained"
                  startIcon={<PersonOutlineOutlinedIcon />}
                  sx={{
                    backgroundColor: "orangered",
                    color: "white",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#e03e00" },
                  }}
                  size="small"
                  onClick={() => setIsReaderDialogOpen(true)}
                >
                  بالكشاف
                </Button>
                <ReadersDialog
                  title="كشف قراءة"
                  data={readersData || []}
                  formRef={formRef}
                  handleCloseDialog={() => setIsReaderDialogOpen(false)}
                  handleFormSubmit={handleReaderFormSubmit}
                  isDialogOpen={isReaderDialogOpen}
                  handleSave={handleDialogSave}
                />
              </>
            </div>
          </div>
          {/* {readingdataLoading && <CircularProgress />} */}
          <SharedTablePagination columns={columns} data={flattenedTableData} />
        </div>
      </div>
    </div>
  );
}
