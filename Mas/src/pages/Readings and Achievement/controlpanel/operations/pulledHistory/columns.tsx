export const column = [
  {
    field: "number",
    header: "م",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
  },
  {
    header: "مسار / مجموعه",
    field: "IS_Walk",
    allowEditing: false,
    // calculateCellValue: (data) => (data.IS_Walk ? "مسار" : "مجموعه"),
  },
  {
    header: "المجموعة",
    field: "Billgroup",
    allowEditing: false,
  },
  {
    header: "بداية الوقت",
    field: "ProcessStartTime.datetime",
    allowEditing: false,
    dataType: "datetime",
    format: "yyyy-MM-dd - hh:mm a", // using 12 hours format
  },
  {
    header: "نهاية الوقت",
    allowEditing: false,
    dataType: "datetime",
    field: "ProcessEndTime.datetime",
    format: "yyyy-MM-dd - hh:mm a", // using 12 hours format
  },
  {
    header: "عدد المسارات الناجحة",
    field: "success",
    allowEditing: false,
    // calculateCellValue: (data) => data.SusccsedWalks.length || 0,
  },
  {
    header: "عدد المسارات الخاطئة",
    field: "failed",
    allowEditing: false,
    // calculateCellValue: (data) => data.FailedWalks.length || 0,
  },
];
