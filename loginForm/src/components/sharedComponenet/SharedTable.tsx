import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { TableProbs } from "@/pages/sharedTypes";

export function SharedTable<T>({ data, columns }: TableProbs<T>) {
  return (
      <Table className="bg-white w-full">
        <TableHeader className="bg-sky-900 ">
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
        </TableHeader>
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
        <TableFooter></TableFooter>
      </Table>
  );
}
