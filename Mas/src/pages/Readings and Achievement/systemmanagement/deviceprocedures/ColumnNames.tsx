import Box from "@mui/material/Box";
import type { Columns } from "../../../SharedTypes";
import DeleteDeviceDialog from "./DeleteDeviceDialog";
import EditDeviceProcedureDialog from "./EditDeviceProcedureDialog";

export const columns: Columns[] = [
  {
    key: "actions",
    label: "الاجراءات",
    render: (_value: any, row: any) => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <EditDeviceProcedureDialog rowdata={row} />
        <DeleteDeviceDialog
          deviceId={row.ACTION_ID}
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
    key: "DESCRIPTION",
    label: "النوع",
  },

  {
    key: "ACTION_ID",
    label: "الكود",
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
