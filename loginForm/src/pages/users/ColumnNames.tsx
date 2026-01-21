import { CheckCircle, XCircle } from "lucide-react";
import type { Columns } from "../sharedTypes";
import EditUserDialog from "./EditUserDialog";
import DeleteUserDialog from "./DeleteUserDialog";

export const columns: Columns[] = [
  {
    key: "actions",
    label: "الاجراءات",
    render: (_value: any, row: any, rowIndex: number, handlers: any) => (
      <div className="flex gap-2 justify-end text-lg">
        <EditUserDialog
          rowdata={row}
          onSubmit={(updatedData) =>
            handlers.onEdit(row, rowIndex, updatedData)
          }
        />
        <DeleteUserDialog
          onDelete={() => {
            handlers.onDelete(row, rowIndex);
            console.log("dina");
          }}
        />

        {/* <button
          onClick={() => handlers.onDelete(row, rowIndex)}
          className="hover:bg-red-100 p-1 rounded"
        >
          🗑️
        </button> */}
      </div>
    ),
  },
  {
    key: "assignjob",
    label: "الوظائف",
  },
  {
    key: "status",
    label: "نشط",
    render: (value: boolean) =>
      value ? (
        <CheckCircle className="text-green-500 w-5 h-5" />
      ) : (
        <XCircle className="text-red-500 w-5 h-5" />
      ),
  },
  {
    key: "defaultbranch",
    label: "الفرع الافتراضي",
  },
  {
    key: "entername",
    label: "اسم الدخول",
  },
  {
    key: "username",
    label: "اسم المستخدم",
  },

  {
    key: "userCode",
    label: "كود المستخدم",
  },
  {
    key: "number",
    label: "م",
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
];
