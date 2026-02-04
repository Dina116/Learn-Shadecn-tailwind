import type { Columns } from "../../../SharedTypes";

export const columns: Columns[] = [
  //   {
  //     key: "actions",
  //     label: "الاجراءات",
  //     // render: (_value: any, row: any, rowIndex: number, handlers: any) => (
  //     //   <div className="flex gap-2 justify-end text-lg">
  //     //     {/* <EditUserDialog
  //     //       rowdata={row}
  //     //       onSubmit={(updatedData) =>
  //     //         handlers.onEdit(row, rowIndex, updatedData)
  //     //       }
  //     //     /> */}
  //     //     <DeleteScoutsDialog
  //     //       onDelete={() => {
  //     //         handlers.onDelete(row, rowIndex);
  //     //       }}
  //     //       btnname="🗑️"
  //     //       title="رسالة حذف"
  //     //       content="هل أنت متأكد من حذف الوظيفة؟"
  //     //     />
  //     //   </div>
  //     // ),
  //   },
  {
    key: "UNUSED",
    label: "الحالة",
  },
  {
    key: "STATION_NO",
    label: "الفرع",
  },

  {
    key: "DESCRIPTION",
    label: "الوصف",
  },

  {
    key: "GROUP_ID",
    label: "الكود",
  },
  {
    key: "number",
    label: "م",
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
];
