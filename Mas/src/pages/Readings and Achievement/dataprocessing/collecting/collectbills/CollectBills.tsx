import BillsFields from "./BillsFields";
import { useState } from "react";
import SharedTablePagination from "../../../../../componenet/shared/SharedTablePagination";
import { Box, Paper, Typography } from "@mui/material";
import { maintableColumns } from "./tableColumns";
import MistakesDialog from "./MistakesDialog";
import {
  useCollectors,
  useUnpostedDetails,
} from "../../../../../hooks/dataprocessing/useCollectorsData";
import useCollectionErrors from "../../../../../hooks/dataprocessing/collectbills/useCollectionErrors";
import { useCollectionSummary } from "../../../../../hooks/dataprocessing/collectbills/useCollectionSummary";

export default function CollectBills() {
  const [selectedCollectorId, setSelectedCollectorId] = useState<number | null>(
    null,
  );
  const { data: collectorsData } = useCollectors();
  const { data: unpostedDetails, isLoading: isLoadingDetails } =
    useUnpostedDetails(selectedCollectorId);

  const { errorLog, handleCollectionError } = useCollectionErrors();
  const { totalAmount, totalCount } = useCollectionSummary(unpostedDetails);
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row-reverse justify-between">
            <div className=" text-right pe-12 ">
              <h6
                className="text-2xl text-black font-extrabold mt-1
         inline-block                          
         bg-gradient-to-r from-orange-600 to-orange-400  
         bg-no-repeat          
         bg-[length:100%_3px]  
         bg-bottom"
              >
                تحصيل الفواتير
              </h6>
            </div>
            {selectedCollectorId && unpostedDetails && (
              <Paper
                elevation={3}
                sx={{
                  p: 0.5,
                  mt: 1,
                  height: 60,
                  backgroundColor: "white",
                  alignSelf: "flex-end",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 14,
                    color: "primary.main",
                  }}
                >
                  عدد الفواتير المحصلة للجلسة المفتوحه / إجمالي المبلغ
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {totalAmount.toFixed(2)} / {totalCount}
                </Typography>
              </Paper>
            )}
          </div>

          <div className="flex flex-row bg-white h-15 p-5 rounded-lg items-center gap-5 justify-end">
            <BillsFields
              collectors={collectorsData ?? []}
              selectedCollectorId={selectedCollectorId}
              onCollectorChange={setSelectedCollectorId}
              isLoadingDetails={isLoadingDetails}
              onCollectError={handleCollectionError}
            />
          </div>
          <MistakesDialog data={errorLog} />
          {selectedCollectorId && unpostedDetails && (
            <div className="flex bg-white">
              <Box
                mt={4}
                sx={{ width: "100%", paddingRight: 1, paddingLeft: 1 }}
              >
                <SharedTablePagination
                  columns={maintableColumns}
                  data={unpostedDetails}
                />
              </Box>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
