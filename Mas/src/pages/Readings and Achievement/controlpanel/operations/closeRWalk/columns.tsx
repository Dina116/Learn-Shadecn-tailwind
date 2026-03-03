import {
  Checkbox,
  Chip,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import type { MultiLevelHeaderTableColumn } from "../../../../SharedTypes";
import VisibilityIcon from "@mui/icons-material/Visibility";
import type { BOOKCYCLEWithStatus } from "../../api/useControlApi";

export const getCloseRWalkColumns = (
  allData: BOOKCYCLEWithStatus[],
  selectedRowKeys: string[],
  onSelectionChange: (keys: string[]) => void,
  onUpdateRow: (bookNo: string) => void,
  onShowError: (bookNo: string) => void,
  selectableRows: BOOKCYCLEWithStatus[],
): MultiLevelHeaderTableColumn[] => {
  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allSelectableKeys = selectableRows.map((row) => row.BOOK_NO);
      onSelectionChange(allSelectableKeys);
    } else {
      onSelectionChange([]);
    }
  };
  return [
    {
      field: "selection",
      width: 60,
      header: () => (
        <Checkbox
          sx={{ color: "white" }}
          size="small"
          indeterminate={
            selectedRowKeys.length > 0 &&
            selectedRowKeys.length < allData.length
          }
          checked={
            allData.length > 0 && selectedRowKeys.length === allData.length
          }
          onChange={handleSelectAll}
        />
      ),
      render: (_value, row) => {
        const isSelected = selectedRowKeys.includes(row.BOOK_NO);
        const isCompleted = row.status === "completed";
        const handleSelectRow = () => {
          if (isCompleted) return;
          const newSelection = isSelected
            ? selectedRowKeys.filter((key) => key !== row.BOOK_NO)
            : [...selectedRowKeys, row.BOOK_NO];
          onSelectionChange(newSelection);
        };
        return (
          <Checkbox
            size="small"
            color="primary"
            checked={isSelected}
            onChange={handleSelectRow}
            disabled={isCompleted}
          />
        );
      },
    },
    {
      field: "number",
      header: "م",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (_value: any, _row: any, rowIndex: number) => rowIndex + 1,
    },
    { field: "BILLGROUP", header: "المجموعة" },
    { field: "BOOK_NO", header: "السجل" },
    { field: "WALK_NO", header: "المسار" },
    {
      field: "WALK_DESCRIPTION",
      header: "الوصف",
      render: (value) => <Typography color="error">{value}</Typography>,
    },
    {
      field: "BILNG_DATE",
      header: "الدورة ",
    },
    {
      field: "COUNT_CYCLES",
      header: "العدد",
      render: (value) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {value && { value }}
          </div>
        );
      },
    },
    {
      field: "status",
      header: "الحالة",
      render: (
        value: string | undefined,
        _row: BOOKCYCLEWithStatus,
        _rowIndex: number,
        isUpdating: boolean,
      ) => {
        if (isUpdating) {
          return <CircularProgress size={20} />;
        }
        if (value === "completed") {
          return <Typography color="success.main">تم</Typography>;
        }
        if (value === "failed") {
          return <Typography color="error.main">فشل</Typography>;
        }
      },
    },
    {
      header: "المحصل",
      field: "EMPID_C",
      render: (value, row) => {
        const reader = row.READER || "";
        const parts = reader.split("-");
        const name = parts[0] ?? "";
        const phone = parts[1] ?? "";

        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {value && (
              <Chip
                label={value}
                color="primary"
                size="small"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  alignSelf: "flex-start",
                }}
              />
            )}

            {reader && (
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {name}
                {phone ? ` - ${phone}` : ""}
              </Typography>
            )}
          </div>
        );
      },
      width: 90,
    },
    {
      header: "القارئ",
      field: "EMPID_R",
      render: (value, row) => {
        const reader = row.READER || "";
        const parts = reader.split("-");
        const name = parts[0] ?? "";
        const phone = parts[1] ?? "";

        return (
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Chip
              label={value}
              color="primary"
              size="small"
              sx={{
                color: "white",
                fontWeight: "bold",
                alignSelf: "flex-start",
              }}
            />

            {reader && (
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {name}
                {phone ? ` - ${phone}` : ""}
              </Typography>
            )}
          </div>
        );
      },
      width: 90,
    },
    {
      field: "wrong",
      header: "الخطأ",
      render: (_value, row) => {
        const isCompleted = row.status === "success";
        return (
          <IconButton
            size="small"
            color="default"
            onClick={() => onShowError(row.BOOK_NO)}
            disabled={isCompleted}
          >
            <VisibilityIcon />
          </IconButton>
        );
      },
    },
  ];
};
// export const CollectionsPulledColumns: MultiLevelHeaderTableColumn[] = [];
