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

export default function SharedTable<T>({ data, columns }: TableProbs<T>) {
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

  if (!data) {
    return (
      <Paper sx={{ padding: 2, textAlign: "center" }}>
        لا توجد بيانات لعرضها.
      </Paper>
    );
  }
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className="border-b border-white hover:bg-sky-900 text-center">
              {columns.map((item) => (
                <TableHead
                  key={String(item.key)}
                  className=" text-white text-center border-l border-white"
                >
                  {item.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, rowIndex) => (
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
                    >
                      {col.render
                        ? col.render(value, row, rowIndex)
                        : String(value)}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data?.length ?? 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
