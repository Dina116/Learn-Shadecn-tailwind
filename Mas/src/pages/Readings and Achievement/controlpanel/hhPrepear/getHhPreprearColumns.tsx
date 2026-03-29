/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MultiLevelHeaderTableColumn } from "@/pages/SharedTypes";
import type { BOOKCYCLE } from "../types";
import Checkbox from "@mui/material/Checkbox";
import { CircularProgress, Typography, Box } from "@mui/material";
import { Status } from "../status";
import { GetReadingWalkKey } from "./useHHPrepear";

export const getHhPreprearColumns = (
  data: BOOKCYCLE[],
  handleSelectOne: (
    type: "reading" | "collect" | "all_collection",
    value: boolean,
    key: string,
  ) => void,
  handleSelectAll: (
    type: "reading" | "collect" | "all_collection",
    value: boolean,
  ) => void,
): MultiLevelHeaderTableColumn[] => {

  const isAllChecked = (type: "reading" | "collect" | "all_collection") => {
    if (!data.length) return false;

    return data.every((row) => {
      if (type === "reading") return row.IS_ALLOWED_R;
      if (type === "collect") return row.IS_ALLOWED_C;
      return row.IS_ALLOWED_C_FRONT;
    });
  };

  const isIndeterminate = (type: "reading" | "collect" | "all_collection") => {
    const someChecked = data.some((row) => {
      if (type === "reading") return row.IS_ALLOWED_R;
      if (type === "collect") return row.IS_ALLOWED_C;
      return row.IS_ALLOWED_C_FRONT;
    });

    return someChecked && !isAllChecked(type);
  };

  const renderStatus = (row: BOOKCYCLE) => {
    switch (row.status) {
      case Status.running:
        return <CircularProgress size={20} />;
      case Status.completed:
        return <Typography color="success.main">تم</Typography>;
      case Status.failed:
        return <Typography color="error.main">خطأ</Typography>;
      default:
        return null;
    }
  };


  return [
    {
      field: "index",
      header: "م",
      render: (_: any, __: any, index: number) => index + 1,
    },

    {
      field: "IS_ALLOWED_C",
      header: () => (
        <Box textAlign="center">
          <Typography>التحصيل</Typography>
          <Checkbox
            size="small"
            checked={isAllChecked("collect")}
            indeterminate={isIndeterminate("collect")}
            onChange={(e) => handleSelectAll("collect", e.target.checked)}
          />
        </Box>
      ),
      render: (_: any, row: BOOKCYCLE) => {
        const key = GetReadingWalkKey(row);

        return (
          <Checkbox
            checked={row.IS_ALLOWED_C || false}
            onChange={(e) => handleSelectOne("collect", e.target.checked, key)}
          />
        );
      },
    },
    {
      field: "IS_ALLOWED_R",
      header: () => (
        <Box textAlign="center">
          <Typography>القراءات</Typography>
          <Checkbox
            size="small"
            checked={isAllChecked("reading")}
            indeterminate={isIndeterminate("reading")}
            onChange={(e) => handleSelectAll("reading", e.target.checked)}
          />
        </Box>
      ),
      render: (_: any, row: BOOKCYCLE) => {
        const key = GetReadingWalkKey(row);

        return (
          <Checkbox
            checked={row.IS_ALLOWED_R || false}
            onChange={(e) => handleSelectOne("reading", e.target.checked, key)}
          />
        );
      },
    },

    { field: "BILLGROUP", header: "المجموعة" },
    { field: "BOOK_NO", header: "السجل" },
    { field: "WALK_NO", header: "المسار" },

    {
      field: "WALK_DESCRIPTION",
      header: "الوصف",
      render: (value: string, row: BOOKCYCLE) => (
        <Typography
          sx={{
            backgroundColor: row.isChanged ? "#ffe082" : "transparent",
            px: 1,
          }}
        >
          {value}
        </Typography>
      ),
    },

    {
      field: "COUNT_C",
      header: "عدد الفواتير",
    },

    {
      field: "COUNT_R",
      header: "عدد القراءات",
    },

    {
      field: "status",
      header: "الحالة",
      render: (_: any, row: BOOKCYCLE) => renderStatus(row),
    },
  ];
};
