import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import CollectorCell from "../../../../componenet/systemmanagement/CollectorCell";
import type { BillsFieldsProps } from "../types";
import useCollectBill from "../../../../hooks/dataprocessing/collectbills/useCollectorsData";

export default function BillsFields({
  collectors,
  selectedCollectorId,
  onCollectorChange,
  isLoadingDetails,
  onCollectError,
}: BillsFieldsProps) {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const { mutate: collectBillMutate, isPending: isCollecting } = useCollectBill(
    selectedCollectorId,
    onCollectError,
  );
  const handleCollectClick = () => {
    if (!selectedCollectorId || !invoiceNumber) {
      return;
    }
    collectBillMutate({
      payment_no: invoiceNumber,
      empid: selectedCollectorId,
      locked: false,
    });
    console.log(
      "جاري تحصيل الفاتورة:",
      invoiceNumber,
      "للكشاف رقم:",
      selectedCollectorId,
    );
  };

  return (
    <Box className="flex gap-4 items-end" sx={{ direction: "rtl" }}>
      <div className="w-80">
        <Typography fontSize={13} fontWeight="bold">
          الكشاف <span style={{ color: "red" }}>*</span>
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
      {selectedCollectorId !== null && !isLoadingDetails && (
        <>
          <div className="w-60">
            <Typography fontSize={13} fontWeight="bold">
              الفاتورة <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: 30,
                  fontSize: "0.8rem",
                },
              }}
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />
          </div>
          <div>
            <Button
              variant="contained"
              onClick={handleCollectClick}
              disabled={isCollecting}
              sx={{ height: 25, marginBottom: 0.5 }}
            >
              {isCollecting ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "تحصيل"
              )}
            </Button>
          </div>
        </>
      )}
    </Box>
  );
}
