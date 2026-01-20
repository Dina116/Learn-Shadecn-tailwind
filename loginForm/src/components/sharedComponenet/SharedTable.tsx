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
// import type { TableProbs } from "@/pages/users/types";

export function SharedTable<T extends Record<string, any>>({
  data,
  columns,
}: TableProbs<T>) {
  return (
    <Table>
      <TableHeader className="bg-blue-900 ">
        <TableRow className="border-b border-white hover:bg-blue-900">
          {columns.map((item) => (
            <TableHead className=" text-white text-right border-l border-white">
              {item.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((col, colIndex) => {
              const value = row[col.key];
              return (
                <TableCell key={colIndex} className={col.className}>
                  {col.render ? col.render(value, row) : String(value)}
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
