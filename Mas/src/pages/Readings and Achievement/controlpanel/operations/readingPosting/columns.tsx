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

export const getReadingsPostingColumns = (
  allData: BOOKCYCLEWithStatus[],
  selectedRowKeys: string[],
  onSelectionChange: (keys: string[]) => void,
  onUpdateRow: (book_No: string) => void,
  onShowError: (book_No: string) => void,
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
    {
      header: "المجموعه",
      field: "BILLGROUP",
    },
    {
      header: "السجل",
      field: "BOOK_NO",
    },
    {
      header: "المسار",
      field: "WALK_NO",
    },
    {
      header: "الوصف",
      field: "WALK_DESCRIPTION",
      render: (value) => <Typography color="error">{value}</Typography>,
    },
    {
      header: "الدورة",
      field: "BILNG_DATE",
      width: 120,
    },
    {
      header: "العدد",
      field: "AffectedRows",
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
      width: 60,
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
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {/* chip */}
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
        const isCompleted = row.status === "completed";
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
