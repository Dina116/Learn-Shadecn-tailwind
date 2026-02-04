import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import type { TableProbs } from "../../pages/SharedTypes";

export default function SharedTablePagination<T>({
  data,
  columns,
}: TableProbs<T>) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const safeData = data ?? [];
  const hasData = safeData.length > 0;

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ width: "100%" }}>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow className="border-b border-white hover:bg-sky-900 text-center">
              {columns.map((item) => (
                <TableCell
                  key={String(item.key)}
                  className=" text-white text-center border-l border-white"
                  sx={{
                    backgroundColor: "rgb(14, 70, 107)",
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {item.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {hasData ? (
              safeData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    className=" text-black text-center border-l border-sky-900 text-center"
                  >
                    {columns.map((col, colIndex) => {
                      const value = row[col.key];
                      console.log("row:", row);
                      console.log("col.key:", col.key);
                      console.log("value:", value);
                      return (
                        <TableCell
                          key={colIndex}
                          className=" text-black text-center border-l border-sky-900"
                          sx={{ textAlign: "center" }}
                        >
                          {col.render
                            ? col.render(value, row, rowIndex)
                            : String(value)}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  sx={{
                    textAlign: "center",
                    py: 4,
                    fontSize: "1.1rem",
                    color: "gray",
                  }}
                >
                  No data
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex flex-row justify-start">
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={safeData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ color: "gray" }}
        />
      </div>
    </Paper>
  );
}
