import type { Columns } from "../../../SharedTypes";
import {
  Select,
  MenuItem,
  Box,
  Typography,
  CircularProgress,
  Checkbox,
} from "@mui/material";
import type { UnpostedDetail, PaymentType } from "../types";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";

type ColumnCreatorProps = {
  editingRowKey: string | null;
  setEditingRowKey: (key: string | null) => void;
  selectedNewMethodId: number | null;
  selectedReceipts: string[];
  isAllSelected: boolean;
  setSelectedNewMethodId: (id: number | null) => void;
  handleSaveClick: (row: UnpostedDetail) => void;
  isChangingMethod: boolean;
  paymentMethods: PaymentType[];
  handleSelectRow: (receiptNo: string) => void;
  handleSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const getColumns = ({
  editingRowKey,
  setEditingRowKey,
  selectedNewMethodId,
  setSelectedNewMethodId,
  handleSaveClick,
  isChangingMethod,
  paymentMethods,
  handleSelectRow,
  handleSelectAll,
  selectedReceipts,
  isAllSelected,
}: ColumnCreatorProps): Columns<UnpostedDetail>[] => {
  return [
    {
      key: "PAYMENT_METHOD",
      label: "طريقة الدفع",
      render: (value: string, row: UnpostedDetail) => {
        const isEditing = editingRowKey === row.RECEIPT_NO;
        if (isEditing) {
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                minWidth: 100,
                direction: "rtl",
              }}
            >
              <Select
                size="small"
                fullWidth
                sx={{ height: 30 }}
                defaultValue={row.PAYMENT_METHOD_ID}
                value={selectedNewMethodId ?? ""}
                onChange={(e) =>
                  setSelectedNewMethodId(e.target.value as number)
                }
              >
                {(paymentMethods ?? []).map((method) => (
                  <MenuItem key={method.ID} value={method.ID}>
                    {method.DESCRIPTION}
                  </MenuItem>
                ))}
              </Select>
              <IconButton
                size="small"
                color="primary"
                onClick={() => handleSaveClick(row)}
                disabled={isChangingMethod}
                sx={{ p: "4px" }}
              >
                {isChangingMethod ? (
                  <CircularProgress size={22} color="inherit" />
                ) : (
                  <SaveIcon />
                )}
              </IconButton>
            </Box>
          );
        }

        return (
          <Typography
            onClick={() => {
              setEditingRowKey(row.RECEIPT_NO);
              setSelectedNewMethodId(row.PAYMENT_METHOD_ID);
            }}
            sx={{
              cursor: "pointer",
              color: "orangered",
              fontWeight: "bold",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {value}
          </Typography>
        );
      },
    },
    {
      key: "ISSUED_AMOUNT",
      label: "المبلغ المحصل",
    },
    {
      key: "BILLGROUP",
      label: "المجموعه",
    },
    {
      key: "WALK_NO",
      label: "المسار",
    },

    {
      key: "SEQ_NO",
      label: "رقم السجل",
    },
    {
      key: "BOOK_NO",
      label: "السجل",
    },
    {
      key: "CUSTKEY",
      label: "رقم الحساب ",
    },
    {
      key: "number",
      label: "م",
      render: (_value, _row, rowIndex) => rowIndex + 1,
    },
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      key: "selector" as any,
      label: (
        <Checkbox
          color="primary"
          indeterminate={selectedReceipts.length > 0 && !isAllSelected}
          checked={isAllSelected}
          onChange={handleSelectAll}
          size="small"
          sx={{ p: 0, color: "white" }}
        />
      ),
      render: (_value, row) => (
        <Checkbox
          color="primary"
          checked={selectedReceipts.includes(row.RECEIPT_NO)}
          onChange={() => handleSelectRow(row.RECEIPT_NO)}
          size="small"
          sx={{ p: 0 }}
        />
      ),
    },
  ];
};

