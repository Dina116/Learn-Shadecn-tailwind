import type { Columns } from "../sharedTypes";
import DeleteDepartmentDialog from "./DeleteDepartmentDialog";

export const columns: Columns[] = [
  {
    key: "actions",
    label: "الاجراءات",
    render: (_value: any, row: any, rowIndex: number, handlers: any) => {
      console.log("جاري الحذف");
      return (
        <div className="flex gap-2 justify-center text-lg">
          <DeleteDepartmentDialog
            onDelete={() => {
              handlers.onDelete(row, rowIndex);
            }}
            btnname="🗑️"
            message="هل أنت متأكد من حذف القسم"
          />
        </div>
      );
    },
  },
  {
    key: "englishdescription",
    label: "الوصف بالانجليزي",
  },
  {
    key: "arabicdescription",
    label: "الوصف بالعربي ",
  },
  {
    key: "departmentname",
    label: "الاسم",
  },

  {
    key: "jobcode",
    label: "#ID",
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
];
