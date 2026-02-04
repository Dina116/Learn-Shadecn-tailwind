// import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import type { TableProbs } from "../../pages/SharedTypes";

export default function SharedTable<T>({ data, columns }: TableProbs<T>) {
  return (
    <Paper sx={{ width: "90%", overflow: "hidden" }}>
      <TableContainer>
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
            {data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className=" border-l border-sky-900"
                sx={{ textAlign: "center" }}
              >
                {columns.map((col, colIndex) => {
                  const value = row[col.key];
                  console.log("row:", row);
                  console.log("col.key:", col.key);
                  console.log("value:", value);
                  return (
                    <TableCell
                      key={colIndex}
                      className="border-l border-sky-900"
                      sx={{ textAlign: "center" }}
                    >
                      {col.render
                        ? col.render(value, row, rowIndex)
                        : String(value ?? "")}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
