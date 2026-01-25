import type { Columns } from "../sharedTypes";
import EditCompanyDialog from "./EditCompanyDialog";
import type { companyFormType } from "./types";

export const columns: Columns[] = [
  {
    key: "actions",
    label: "الاجراءات",
    render: (_value: any, row: companyFormType, rowIndex: number, handlers: any) => (
      <div className="flex gap-2 justify-center text-lg">
        <EditCompanyDialog
          rowdata={row}
          onSubmit={(updatedData) =>
            handlers.onEdit(row, rowIndex, updatedData)
          }
        />
      </div>
    ),
  },

  {
    key: "prepared",
    label: "prepared",
  },
  {
    key: "branchnumber",
    label: "رقم الفرع",
  },
  {
    key: "companynumber",
    label: "رقم الشركة",
  },

  {
    key: "companyid",
    label: "الرقم التعريفي للشركة",
  },
  {
    key: "#ID",
    label: "#ID",
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
];
