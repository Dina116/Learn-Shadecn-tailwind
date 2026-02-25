import {
  Box,
  Button,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type { MarketingTableProps } from "../types";

const headerBackgroundColor = "#0e3e4e";
export default function MarketingTable({
  apiResponse,
  selectedBillGroups,
  onSelectionChange,
  onExecute,
}: MarketingTableProps) {
  const tableData = apiResponse?.DETAILS || [];

  const handleRowToggle = (billGroup: string) => {
    const newSelection = selectedBillGroups.includes(billGroup)
      ? selectedBillGroups.filter((bg) => bg !== billGroup)
      : [...selectedBillGroups, billGroup];
    onSelectionChange(newSelection);
  };

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allBillGroups = tableData.map((row) => row.BILLGROUP);
      onSelectionChange(allBillGroups);
    } else {
      onSelectionChange([]);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "orangered" }}
          onClick={onExecute}
          size="small"
        >
          تنفيذ
        </Button>
      </Box>
      <TableContainer
        component={Paper}
        sx={{ border: "1px solid #e0e0e0", direction: "rtl" }}
      >
        <Table sx={{ minWidth: 900 }} aria-label="marketing plan table">
          <TableHead
            sx={{
              "& .MuiTableCell-root": {
                py: 0.5,
                fontSize: 12,
              },
            }}
          >
            <TableRow
              sx={{
                "& .MuiTableCell-root": {
                  backgroundColor: "#0e3e4e",
                  color: "white",
                  fontWeight: "bold",
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                },
              }}
            >
              <TableCell rowSpan={2} sx={{ p: 1, width: "5%" }}>
                <Checkbox
                  sx={{ color: "white", "&.Mui-checked": { color: "white" } }}
                  indeterminate={
                    selectedBillGroups.length > 0 &&
                    selectedBillGroups.length < tableData.length
                  }
                  checked={
                    tableData.length > 0 &&
                    selectedBillGroups.length === tableData.length
                  }
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell rowSpan={2} sx={{ width: "5%" }}>
                م
              </TableCell>
              <TableCell rowSpan={2}>المجموعة</TableCell>
              <TableCell colSpan={2}>الفواتير المصدرة</TableCell>
              <TableCell
                colSpan={2}
              >{`الفواتير > ${apiResponse?.REF_AMOUNT || ""}`}</TableCell>
              <TableCell colSpan={2}>المستهدف للتسويق</TableCell>
              <TableCell colSpan={2}>المطبق فعلياً</TableCell>
            </TableRow>
            <TableRow
              sx={{
                "& .MuiTableCell-root": {
                  backgroundColor: headerBackgroundColor,
                  color: "white",
                  fontWeight: "bold",
                  border: "1px solid #e0e0e0",
                  textAlign: "center",
                },
              }}
            >
              <TableCell>عدد</TableCell>
              <TableCell>قيمة</TableCell>
              <TableCell>عدد</TableCell>
              <TableCell>قيمة</TableCell>
              <TableCell>عدد</TableCell>
              <TableCell>قيمة</TableCell>
              <TableCell>عدد</TableCell>
              <TableCell>قيمة</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={10}
                  align="center"
                  sx={{ py: 5, border: 0 }}
                >
                  <Typography color="text.secondary">No data</Typography>
                </TableCell>
              </TableRow>
            ) : (
              tableData.map((row, index) => {
                const isSelected = selectedBillGroups.includes(row.BILLGROUP);
                return (
                  <TableRow
                    key={row.BILLGROUP}
                    hover
                    onClick={() => handleRowToggle(row.BILLGROUP)}
                    role="checkbox"
                    aria-checked={isSelected}
                    selected={isSelected}
                    sx={{
                      cursor: "pointer",
                      "& .MuiTableCell-root": {
                        border: "1px solid #e0e0e0",
                        textAlign: "center",
                      },
                    }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox color="primary" checked={isSelected} />
                    </TableCell>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell component="th" scope="row">
                      {row.BILLGROUP}
                    </TableCell>
                    <TableCell>{row.TOTAL_COUNT}</TableCell>
                    <TableCell>{row.TOTAL_AMOUNT?.toLocaleString()}</TableCell>
                    <TableCell>{row.LARG_COUNT}</TableCell>
                    <TableCell>{row.LARG_AMOUNT?.toLocaleString()}</TableCell>
                    <TableCell>{row.TARGET_COUNT}</TableCell>
                    <TableCell>{row.TARGET_AMOUNT?.toLocaleString()}</TableCell>
                    <TableCell>{row.ACTUAL_COUNT}</TableCell>
                    <TableCell>{row.ACTUAL_AMOUNT?.toLocaleString()}</TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
