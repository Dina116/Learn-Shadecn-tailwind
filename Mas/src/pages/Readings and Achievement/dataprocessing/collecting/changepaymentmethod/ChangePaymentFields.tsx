import { Box, Checkbox, TextField, Typography, Button } from "@mui/material";
import CollectorCell from "../../../../../componenet/systemmanagement/CollectorCell";
import type { ChangePaymentFieldsProps } from "../../types";

export default function ChangePaymentFields({
  collectors,
  isSearchByAccount,
  onSearchTypeChange,
  accountNumber,
  onAccountNumberChange,
  selectedCollectorId,
  onCollectorChange,
  onSearch,
}: ChangePaymentFieldsProps) {
  return (
    <Box className="flex flex-col " sx={{ direction: "rtl" }}>
      <div className="flex flex-row w-fit gap-2  pb-2" dir="ltr">
        <Typography fontSize={13} fontWeight="bold">
          البحث بإستخدام رقم الحساب
        </Typography>
        <Checkbox
          color="primary"
          size="small"
          checked={isSearchByAccount}
          onChange={(e) => onSearchTypeChange(e.target.checked)}
          sx={{ padding: 0, marginBottom: 0.5 }}
        />
      </div>
      <div className="flex flex-row gap-4 items-end">
        {isSearchByAccount ? (
          <div className="w-100">
            <Typography fontSize={13} fontWeight="bold">
              رقم الحساب<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={accountNumber}
              onChange={(e) => onAccountNumberChange(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: 30,
                  fontSize: "0.8rem",
                },
              }}
            />
          </div>
        ) : (
          <div className="w-100">
            <Typography fontSize={13} fontWeight="bold">
              المحصل
            </Typography>
            <CollectorCell
              assignedCollectorId={selectedCollectorId ?? undefined}
              collectors={collectors ?? []}
              onCollectorChange={(newId) => {
                onCollectorChange(newId === 0 ? null : newId);
              }}
              shownameWithId={true}
            />
          </div>
        )}
        <div>
          <Button variant="contained" onClick={onSearch} sx={{ height: 30 }}>
            بحث
          </Button>
        </div>
      </div>
    </Box>
  );
}
