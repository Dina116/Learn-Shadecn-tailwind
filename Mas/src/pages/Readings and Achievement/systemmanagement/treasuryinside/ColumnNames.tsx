import Box from "@mui/material/Box";
import type { Columns } from "../../../SharedTypes";
import DeleteTreasuryDialog from "./DeleteTreasuryDialog";
import EditTreasuryDialog from "./EditTreasuryDialog";

export const columns: Columns[] = [
  {
    key: "actions",
    label: "الاجراءات",
    render: (_value: any, row: any, rowIndex: number, handlers: any) => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <EditTreasuryDialog
          rowdata={row}
          onSubmit={(updatedData) =>
            handlers.onEdit(row, rowIndex, updatedData)
          }
        />
        <DeleteTreasuryDialog
          onDelete={() => {
            handlers.onDelete(row, rowIndex);
          }}
          btnname="🗑️"
          title="رسالة حذف"
          content="هل انت متأكد من حذف النوع"
        />
      </Box>
    ),
    minWidth: "80px",
    align: "center",
  },

  {
    key: "branch",
    label: "الفرع",
     minWidth: "80px",
  },
  {
    key: "descriprtion",
    label: "الوصف",
  },

  {
    key: "code",
    label: "الرقم",
    width: "15%",
    align: "center",
  },
  {
    key: "number",
    label: "م",
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
    width: "5%",
    align: "center",
  },
];
