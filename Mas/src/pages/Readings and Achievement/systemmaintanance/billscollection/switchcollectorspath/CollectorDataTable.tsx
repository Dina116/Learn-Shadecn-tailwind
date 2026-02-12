import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import type { WalkPath } from "./types";
import type { Columns } from "../../../../SharedTypes";


export interface CollectorData {
  code: string;
  cycle: string;
  group: string;
  register: string;
  path: string;
  invoiceCount: number;
  value: number;
}

interface CollectorDataTableProps {
  title: string;
  titleColor: string;
  data: WalkPath[];
  headers: Columns<WalkPath>[];
}

export default function CollectorDataTable({
  title,
  titleColor,
  data = [],
  headers = [],
}: CollectorDataTableProps) {
  const hasData = data && data.length > 0;
  return (
    <Paper elevation={2} sx={{ border: "1px solid #ddd", height: "100%" }}>
      <Box sx={{ backgroundColor: titleColor, p: 1, width: "100%" }}>
        <Typography
          variant="h6"
          sx={{
            color: title === "من" ? "#fff" : "#000",
            fontWeight: "bold",
            textAlign: "right",
          }}
        >
          {title}:
        </Typography>
      </Box>
      <TableContainer
        sx={{
          height: "calc(100% - 48px)",
          overflow: "auto",
          padding: 1,
        }}
      >
        <Table
          stickyHeader
          sx={{
            border: "1px solid #ccc",
            borderRadius: 2,
            overflow: "hidden",
            borderCollapse: "separate",
          }}
        >
          <TableHead>
            <TableRow
              sx={{
                "& .MuiTableCell-root": {
                  backgroundColor: "#004d40",
                  color: "white",
                  fontWeight: "bold",
                  height: 20,
                  lineHeight: 1.2,
                  whiteSpace: "nowrap",
                },
              }}
            >
              {headers.map((col) => (
                <TableCell key={col.key} align="right">
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {!hasData ? (
              <TableRow>
                <TableCell colSpan={headers?.length || 1} align="center">
                  لا توجد بيانات لعرضها
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" } }}
                >
                  {headers.map((col) => (
                    <TableCell key={col.key} align="right">
                      {col.render
                        ? col.render(
                            row[col.key as keyof WalkPath],
                            row,
                            rowIndex,
                          )
                        : row[col.key as keyof WalkPath] || "-"}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
