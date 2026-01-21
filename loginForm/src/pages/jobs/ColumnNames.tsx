import { CheckCircle, XCircle } from "lucide-react";
import type { Columns } from "../sharedTypes";

export const columns: Columns[] = [
  {
    key: "actions",
    label: "الاجراءات",
    render: (_value: any, row: any, rowIndex: number, handlers: any) => (
      <div className="flex gap-2 justify-end text-lg">
        <button
          onClick={() => handlers.onEdit(row, rowIndex)}
          className="hover:bg-blue-100 p-1 rounded"
        >
          ✏️
        </button>
        <button
          onClick={() => handlers.onDelete(row, rowIndex)}
          className="hover:bg-red-100 p-1 rounded"
        >
          🗑️
        </button>
      </div>
    ),
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
    key: "usersnumbers",
    label: "عدد المستخدمين",
  },
  {
    key: "description",
    label: "الوصف",
  },
  {
    key: "jobname",
    label: "اسم الوظيفة",
  },

  {
    key: "jobcode",
    label: "كود الوظيفة",
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
];
