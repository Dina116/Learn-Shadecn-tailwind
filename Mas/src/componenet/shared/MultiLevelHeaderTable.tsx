import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
} from "@mui/material";
import type {
  MultiLevelHeaderTableProps,
  MultiLevelHeaderTableColumn,
  Identifiable,
} from "../../pages/SharedTypes";
import React from "react";

const headerBackgroundColor = "#1A5366";

function MultiLevelHeaderTable<T extends Identifiable>({
  columns,
  data,
  isLoading,
  updatingRowKey,
  keyField,
}: MultiLevelHeaderTableProps<T>) {
  //   const rtlColumns = [...columns].reverse();
  const renderHeader = () => {
    const headerRows: MultiLevelHeaderTableColumn[][] = [[]];
    const secondHeaderRow: MultiLevelHeaderTableColumn[] = [];

    columns.forEach((col) => {
      headerRows[0].push(col);
      if (col.children) {
        col.children.forEach((child) => {
          secondHeaderRow.push(child);
        });
      }
    });

    const hasSecondRow = secondHeaderRow.length > 0;
    if (hasSecondRow) {
      headerRows.push(secondHeaderRow);
    }

    return headerRows.map((row, rowIndex) => (
      <TableRow
        key={rowIndex}
        sx={{
          "& .MuiTableCell-root": {
            backgroundColor: headerBackgroundColor,
            color: "white",
            fontWeight: "bold",
            border: "1px solid #e0e0e0",
            textAlign: "center",
            padding: "4px 2px",
            height: "32px",
            lineHeight: 1.1,
          },
        }}
      >
        {row.map((col, colIndex) => (
          <TableCell
            key={col.field + colIndex}
            colSpan={col.children ? col.children.length : 1}
            rowSpan={!col.children && hasSecondRow && rowIndex === 0 ? 2 : 1}
            sx={{ width: col.width }}
          >
            {typeof col.header === "function" ? col.header() : col.header}
          </TableCell>
        ))}
      </TableRow>
    ));
  };

  const getLeafColumns = (): MultiLevelHeaderTableColumn[] => {
    const leaves: MultiLevelHeaderTableColumn[] = [];
    columns.forEach((col) => {
      if (col.children) {
        leaves.push(...col.children);
      } else {
        leaves.push(col);
      }
    });
    return leaves;
  };

  const leafColumns = getLeafColumns();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 5,
        }}
      >
        <CircularProgress />
        <Typography sx={{ ml: 2 }}>جاري تحميل البيانات...</Typography>
      </Box>
    );
  }

  return (
    <TableContainer
      component={Paper}
      sx={{ border: "1px solid #e0e0e0", direction: "rtl" }}
    >
      <Table sx={{ minWidth: 900 }} aria-label="reusable table">
        <TableHead>{renderHeader()}</TableHead>
        <TableBody>
          {data?.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={leafColumns.length}
                align="center"
                sx={{ py: 5, border: 0 }}
              >
                <Typography color="text.secondary">No data</Typography>
              </TableCell>
            </TableRow>
          ) : (
            data?.map((row, index) => {
              const rowKey = String(row[keyField]);
              const isCurrentlyUpdating = updatingRowKey === rowKey;
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const isCompleted = (row as any).status === "completed";
              return (
                <TableRow
                  key={rowKey}
                  hover={!isCompleted}
                  sx={{
                    "& .MuiTableCell-root": {
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    },
                    ...(isCompleted && {
                      backgroundColor: "#f5f5f5",
                      color: "#bdbdbd",
                      cursor: "not-allowed",
                    }),
                    ...(isCurrentlyUpdating && {
                      opacity: 0.6,
                      transition: "opacity 0.3s",
                    }),
                  }}
                >
                  {leafColumns.map((col, colIndex) => (
                    <TableCell key={`${col.field}-${colIndex}`}>
                      {col.render
                        ? col.render(
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            (row as any)[col.field],
                            row,
                            index,
                            isCurrentlyUpdating,
                          )
                        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          (row as any)[col.field]}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const MultiLevelHeaderTablee = React.memo(
  MultiLevelHeaderTable,
) as typeof MultiLevelHeaderTable;

export default MultiLevelHeaderTablee;
