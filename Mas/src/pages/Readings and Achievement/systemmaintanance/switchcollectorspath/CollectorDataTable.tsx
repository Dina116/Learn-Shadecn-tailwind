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
  data: CollectorData[];
  headers: string[];
}

export default function CollectorDataTable({
  title,
  titleColor,
  data,
  headers,
}: CollectorDataTableProps) {
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
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow
              sx={{
                "& .MuiTableCell-root": {
                  backgroundColor: "#004d40",
                  color: "white",
                  fontWeight: "bold",
                },
              }}
            >
              {headers.map((header) => (
                <TableCell key={header} align="right">
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={headers.length} align="center">
                  لا توجد بيانات لعرضها
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" } }}
                >
                  <TableCell align="right">{row.code}</TableCell>
                  <TableCell align="right">{row.cycle}</TableCell>
                  <TableCell align="right">{row.group}</TableCell>
                  <TableCell align="right">{row.register}</TableCell>
                  <TableCell align="right">{row.path}</TableCell>
                  <TableCell align="right">{row.invoiceCount}</TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
