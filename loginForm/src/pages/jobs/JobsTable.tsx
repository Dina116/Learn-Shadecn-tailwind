import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function JobsTable() {
  return (
    <Table>
      <TableHeader className="bg-blue-900">
        <TableRow className="border-b border-white">
          <TableHead className=" text-white text-right border-l border-white">
            الاجراءات
          </TableHead>
          <TableHead className=" text-white text-right border-l border-white">
            نشط
          </TableHead>
          <TableHead className=" text-white text-right border-l border-white">
            عدد المستخدمين
          </TableHead>
          <TableHead className=" text-white text-right border-l border-white">
            الوصف
          </TableHead>
          <TableHead className=" text-white text-right border-l border-white">
            اسم الوظيفة
          </TableHead>
          <TableHead className="text-white text-right border-l border-white">
            كود الوظيفة
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody></TableBody>
    </Table>
  );
}
