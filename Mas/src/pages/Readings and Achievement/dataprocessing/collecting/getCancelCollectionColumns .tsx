import { Box, Checkbox } from "@mui/material";
import type { Receipt } from "../types";
import type { Columns } from "../../../SharedTypes";

export const getCancelCollectionColumns = (
  tableData: Receipt[],
  selectedRows: Receipt[],
  setSelectedRows: (rows: Receipt[]) => void,
): Columns<Receipt>[] => {
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedRows(tableData);
      return;
    }
    setSelectedRows([]);
  };

  const handleRowSelect = (row: Receipt) => {
    const selectedIndex = selectedRows.findIndex(
      (selected) => selected.PAYMENT_NO === row.PAYMENT_NO,
    );
    let newSelected: Receipt[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, row);
    } else {
      newSelected = selectedRows.filter(
        (selected) => selected.PAYMENT_NO !== row.PAYMENT_NO,
      );
    }
    setSelectedRows(newSelected);
  };
  const numSelected = selectedRows.length;
  const rowCount = tableData.length;

  return [
    {
      key: "select",
      label: (
        <Checkbox
          color="primary"
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={rowCount > 0 && numSelected === rowCount}
          onChange={handleSelectAllClick}
          inputProps={{ "aria-label": "select all receipts" }}
          sx={{
            color: "white",
            "&.Mui-checked": { color: "white" },
            "&.MuiCheckbox-indeterminate": { color: "white" },
          }}
        />
      ),
      render: (value, row) => {
        const isSelected = selectedRows.some(
          (selected) => selected.PAYMENT_NO === row.PAYMENT_NO,
        );
        return (
          <Checkbox
            checked={isSelected}
            onChange={() => handleRowSelect(row)}
          />
        );
      },
    },
    { key: "PAYMENT_NO", label: "رقم الفاتورة" },
    { key: "RECEIPT_NO", label: "رقم السداد" },
    { key: "SURNAME", label: "الاسم" },
    { key: "COLLECTION_ID", label: "كود العملية" },
    {
      key: "COLLECTED_AMOUNT",
      label: "المبلغ المحصل",
      render: (value) => {
        const numericValue = Number(value);
        if (isNaN(numericValue)) {
          return null;
        }

        return (
          <Box
            sx={{
              backgroundColor: "#e6ffed",
              color: "#006d75",
              borderRadius: "4px",
              padding: "4px 8px",
              fontWeight: "500",
              display: "inline-block",
              minWidth: "60px",
            }}
          >
            {numericValue.toFixed(2)}
          </Box>
        );
      },
    },
    { key: "ISSUED_AMOUNT", label: "قيمة الفاتورة" },
    { key: "COLLECTION_DATE", label: "تاريخ التحصيل" },
    { key: "BILNG_DATE", label: "تاريخ الدورة" },
  ];
};
