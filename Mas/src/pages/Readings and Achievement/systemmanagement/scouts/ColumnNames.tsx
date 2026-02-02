import { Box } from "@mui/material";
import type { Columns } from "../../../SharedTypes";
import DeleteScoutsDialog from "./DeleteScoutsDialog";
import EditScoutsDialog from "./EditScoutsDialog";

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
        <EditScoutsDialog
          rowdata={row}
          onSubmit={(updatedData) =>
            handlers.onEdit(row, rowIndex, updatedData)
          }
        />
        <DeleteScoutsDialog
          onDelete={() => {
            handlers.onDelete(row, rowIndex);
          }}
          btnname="🗑️"
          title="رسالة حذف"
          content="هل أنت متأكد من حذف الوظيفة؟"
        />
      </Box>
    ),
  },
  {
    key: "READING",
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
    key: "DEVICE_ID",
    label: "الوحدة المحمولة",
  },
  {
    key: "BRANCH_ID",
    label: "الفرع",
  },

  {
    key: "FULL_NAME",
    label: "الاسم",
  },

  {
    key: "ID",
    label: "الكود",
  },
  {
    key: "number",
    label: "م",
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
];
