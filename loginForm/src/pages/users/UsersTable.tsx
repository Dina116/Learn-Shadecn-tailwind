import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function UsersTable() {
  return (
    <Table>
      <TableHeader className="bg-blue-900">
        <TableRow className="border-b border-white">
          <TableHead className=" text-white text-right border-l border-white">
            الاجراءات
          </TableHead>
          <TableHead className=" text-white text-right border-l border-white">
            الوظائف
          </TableHead>
          <TableHead className=" text-white text-right border-l border-white">
            نشط
          </TableHead>
          <TableHead className=" text-white text-right border-l border-white">
            الفرع الافتراضي
          </TableHead>
          <TableHead className=" text-white text-right border-l border-white">
            اسم الدخول
          </TableHead>
          <TableHead className=" text-white text-right border-l border-white">
            كود المستخدم{" "}
          </TableHead>
          <TableHead className=" text-white text-right border-l border-white">
            م
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* مثال لصف بيانات */}
        <TableRow className="border-b border-gray-300 bg-white">
          <TableCell className="text-right">...</TableCell>

          <TableCell className="text-right border-l border-gray-300">
            مدير
          </TableCell>
          <TableCell className="text-right border-l border-gray-300">
            نعم
          </TableCell>
          <TableCell className="text-right border-l border-gray-300">
            الفرع الرئيسي
          </TableCell>
          <TableCell className="text-right border-l border-gray-300">
            ahmed.ali
          </TableCell>
          <TableCell className="text-right border-l border-gray-300">
            USR-001
          </TableCell>
          <TableCell className="text-right border-l border-gray-300">
            1
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
