import {
  Table,
  TableBody,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { TableProbs } from "@/pages/sharedTypes";
// import type { TableProbs } from "@/pages/users/types";

export function SharedTable(tableProps: TableProbs) {
  return (
    <Table>
      <TableHeader className="bg-blue-900 ">
        <TableRow className="border-b border-white hover:bg-blue-900">
          {tableProps.columns.map((item) => (
            <TableHead className=" text-white text-right border-l border-white">
              {item.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))} */}
      </TableBody>
      <TableFooter>
      </TableFooter>
    </Table>
  );
}
