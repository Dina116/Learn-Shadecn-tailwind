import { useEffect, useState } from "react";
import SharedTablePagination from "../../../../../componenet/shared/SharedTablePagination";
import { getColumns } from "./columns";
import RearrangementForm from "./RearrangementForm";
import type { CustomerSeq, loadWalksType } from "../../types";
import {
  useDownloadWalks,
  usePostWalks,
  useSaveWalks,
} from "../../../../../hooks/dataprocessing/rearrangementpaths/useRearrangementWalks";
import { Box, CircularProgress } from "@mui/material";

export default function RearrangementPaths() {
  const [params, setParams] = useState<CustomerSeq | null>(null);
  const [editableTableData, setEditableTableData] = useState<loadWalksType[]>(
    [],
  );
  const { data: originalData, isFetching } = useDownloadWalks(params);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setEditableTableData(originalData ?? []);
  }, [originalData]);

  const saveMutation = useSaveWalks();
  const postMutation = usePostWalks();
  const handleOnSave = (formData: CustomerSeq) => {
    saveMutation.mutate({ formData, tableData: editableTableData });
  };
  const handleOnPost = (formData: CustomerSeq) => {
    postMutation.mutate({ formData, tableData: editableTableData });
  };
  const tableColumns = getColumns(setEditableTableData);

  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="flex-1">
        <div className="flex flex-col gap-4 p-2  ">
          <div className=" text-right pe-4 ">
            <h6
              className="text-2xl text-black font-extrabold mt-1
         inline-block                          
         bg-gradient-to-r from-orange-600 to-orange-400  
         bg-no-repeat          
         bg-[length:100%_3px]  
         bg-bottom"
            >
              اعادة ترتيب المسارات
            </h6>
          </div>
          <RearrangementForm
            onDownload={(data) => setParams(data)}
            onSave={handleOnSave}
            onPost={handleOnPost}
            loading={{
              download: isFetching,
              save: saveMutation.isPending,
              post: postMutation.isPending,
            }}
          />
          {isFetching ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <CircularProgress />
            </Box>
          ) : (
            <SharedTablePagination
              columns={tableColumns}
              data={editableTableData}
            />
          )}
        </div>
      </div>
    </div>
  );
}
