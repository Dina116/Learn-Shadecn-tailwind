import type { Columns } from "../../../SharedTypes";

export const columns: Columns[] = [
  {
    key: "actions",
    label: "الاجراءات",
    // render: (_value: any, row: any, rowIndex: number, handlers: any) => (
    //   <div className="flex gap-2 justify-end text-lg">
    //     <EditUserDialog
    //       rowdata={row}
    //       onSubmit={(updatedData) =>
    //         handlers.onEdit(row, rowIndex, updatedData)
    //       }
    //     />
    //     <DeleteUserDialog
    //       onDelete={() => {
    //         handlers.onDelete(row, rowIndex);
    //       }}
    //       btnname="🗑️"
    //       message="هل أنت متأكد من حذف الوظيفة؟"
    //     />
    //   </div>
    // ),
  },
  {
    key: "status",
    label: "نشط",
    render: (value: boolean) =>
      value ? (
        <div className="flex flex-row justify-center items-center">
          <CheckCircle className="text-green-500 w-5 h-5 text-center" />
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center">
          <XCircle className="text-red-500 w-5 h-5 text-center" />
        </div>
      ),
  },
  {
    key: "portalPhone",
    label: "الوحدة المحمولة",
  },
  {
    key: "branch",
    label: "الفرع",
  },

  {
    key: "name",
    label: "الاسم",
  },

  {
    key: "Code",
    label: "الكود",
  },
  {
    key: "number",
    label: "م",
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
];