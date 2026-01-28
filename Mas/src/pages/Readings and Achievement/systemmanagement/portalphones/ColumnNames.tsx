// import { XCircle, CheckCircle } from "lucide-react";
import { Box } from "@mui/material";
import type { Columns } from "../../../SharedTypes";
import DeletePortalDialog from "./DeletePortalDialog";
import EditPortalDialog from "./EditPortalDialog";

export const columns: Columns[] = [
  {
    key: "actions",
    label: "الاجراءات",
    render: (_value: any, row: any, rowIndex: number, handlers: any) => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse", 
          alignItems: "center", 
          justifyContent: "center", 
          gap: 1,
        }}
      >
        <DeletePortalDialog
          onDelete={() => handlers.onDelete(row, rowIndex)}
          btnname="🗑️"
          title="رسالة حذف"
          content="هل انت متأكد من حذف الجهاز"
        />
        <EditPortalDialog
          rowdata={row}
          onSubmit={(updatedData) =>
            handlers.onEdit(row, rowIndex, updatedData)
          }
        />
      </Box>
    ),
  },
  {
    key: "chipnumber",
    label: "رقم الشريحة",
  },
  {
    key: "status",
    label: "الحالة",
    render: (value: boolean) =>
      value ? (
        <div className="flex flex-row justify-center items-center">
          <span className="text-blue-500 w-5 h-5 text-center">نشط</span>
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center">
          <span className="text-red-500 w-5 h-5 text-center">غير نشط</span>
        </div>
      ),
  },
  {
    key: "dedicatedto",
    label: "مخصص ل",
  },
  {
    key: "branch",
    label: "الفرع",
  },

  {
    key: "devicecode",
    label: "كود الوحده",
  },

  {
    key: "devicenumber",
    label: "رقم الجهاز",
  },
  {
    key: "number",
    label: "م",
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
];
