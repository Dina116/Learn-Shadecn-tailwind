import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import {
  useChangePaymentMethod,
  useCollectors,
  usePaymentMethods,
  useUnpostedDetails,
} from "../../../../hooks/dataprocessing/useCollectorsData";
import SharedTablePagination from "../../../../componenet/shared/SharedTablePagination";
import useChangePaymentState from "../../../../hooks/dataprocessing/changepaymentmethod/useChangePaymentState";

import ChangePaymentFields from "./ChangePaymentFields";
import useEditRow from "../../../../hooks/dataprocessing/changepaymentmethod/useEditRow";
import useReceiptSelection from "../../../../hooks/dataprocessing/changepaymentmethod/useReceiptSelection";
import useTableColumns from "../../../../hooks/dataprocessing/changepaymentmethod/useTableColumns";

export default function ChangePaymentMethod() {
  const { data: collectorsData } = useCollectors();
  const { data: paymentMethods } = usePaymentMethods();
  const {
    isSearchByAccount,
    setIsSearchByAccount,
    accountNumber,
    setAccountNumber,
    selectedCollectorId,
    setSelectedCollectorId,
    searchCriteria,
    handleSearch,
  } = useChangePaymentState();
  const { data: unpostedDetails } = useUnpostedDetails(searchCriteria.empid);
  const { mutate: changeMethodMutate, isPending: isChangingMethod } =
    useChangePaymentMethod(searchCriteria.empid);

  const {
    editingRowKey,
    setEditingRowKey,
    selectedNewMethodId,
    setSelectedNewMethodId,
    handleSaveClick,
  } = useEditRow(changeMethodMutate);
  const {
    bulkNewMethodId,
    setBulkNewMethodId,
    selectedReceipts,
    handleSelectRow,
    handleSelectAll,
    handleBulkSave,
  } = useReceiptSelection(unpostedDetails, changeMethodMutate);
  const tableColumns = useTableColumns(
    {
      editingRowKey,
      setEditingRowKey,
      selectedNewMethodId,
      setSelectedNewMethodId,
      handleSaveClick,
      isChangingMethod,
      paymentMethods: paymentMethods ?? [],
      selectedReceipts,
      handleSelectRow,
      handleSelectAll,
    },
    unpostedDetails,
  );
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <div className=" text-right pe-12 ">
            <h6
              className="text-2xl text-black font-extrabold mt-1
         inline-block                          
         bg-gradient-to-r from-orange-600 to-orange-400  
         bg-no-repeat          
         bg-[length:100%_3px]  
         bg-bottom"
            >
              تغيير طريقة الدفع
            </h6>
          </div>
          <div className="flex flex-row bg-white h-25 p-5 rounded-lg items-center gap-5 justify-end">
            <ChangePaymentFields
              collectors={collectorsData ?? []}
              isSearchByAccount={isSearchByAccount}
              onSearchTypeChange={setIsSearchByAccount}
              accountNumber={accountNumber}
              onAccountNumberChange={setAccountNumber}
              selectedCollectorId={selectedCollectorId}
              onCollectorChange={setSelectedCollectorId}
              onSearch={handleSearch}
            />
          </div>
          {selectedReceipts.length > 1 && (
            <Box
              sx={{
                p: 2,
                bgcolor: "white",
                borderRadius: 1,
                display: "flex",
                alignItems: "flex-end",
                gap: 2,
                direction: "rtl",
              }}
            >
              <div>
                <Typography fontSize={14} fontWeight="bold" sx={{ mb: 0.5 }}>
                  طريقة الدفع
                </Typography>
                <Select
                  size="small"
                  displayEmpty
                  value={bulkNewMethodId ?? ""}
                  onChange={(e) => setBulkNewMethodId(e.target.value as number)}
                  sx={{
                    minWidth: 200,
                    bgcolor: "white",
                    "& .MuiSelect-icon": {
                      left: 8,
                      right: "auto",
                    },
                  }}
                >
                  {(paymentMethods ?? []).map((method) => (
                    <MenuItem key={method.ID} value={method.ID}>
                      {method.DESCRIPTION}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleBulkSave}
                disabled={isChangingMethod}
                sx={{ height: 35, padding: 0, margin: 0 }}
              >
                حفظ
              </Button>
            </Box>
          )}
          <div className="flex bg-white">
            <Box mt={4} sx={{ width: "100%", paddingRight: 1, paddingLeft: 1 }}>
              <SharedTablePagination
                columns={tableColumns}
                data={unpostedDetails}
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
