import {
  Checkbox,
  Chip,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import type { MultiLevelHeaderTableColumn } from "../../../../SharedTypes";
import VisibilityIcon from "@mui/icons-material/Visibility";
import type { STATMDEPOSIT } from "../../types";
import type { StatusType } from "../../status";

export type STATMDEPOSITWithStatus = STATMDEPOSIT & {
  status?: StatusType;
  isFetchingStatus?: boolean;
};
export const getCollectionsPostingColumns = (
  allData: STATMDEPOSITWithStatus[],
  selectedRowKeys: number[],
  onSelectionChange: (keys: number[]) => void,
  onUpdateRow: (depositId: number) => void,
  onShowError: (depositId: number) => void,
  selectableRows: STATMDEPOSITWithStatus[],
): MultiLevelHeaderTableColumn[] => {
  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allSelectableKeys = selectableRows.map((row) => row.DEPOSIT_ID);
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
            selectedRowKeys.length < selectableRows.length
          }
          checked={
            allData.length > 0 && selectedRowKeys.length === allData.length
          }
          onChange={handleSelectAll}
        />
      ),
      render: (_value, row) => {
        const isSelected = selectedRowKeys.includes(row.DEPOSIT_ID);
        const isCompleted = row.status === "completed";
        const handleSelectRow = () => {
          if (isCompleted) return;
          const newSelection = isSelected
            ? selectedRowKeys.filter((key) => key !== row.DEPOSIT_ID)
            : [...selectedRowKeys, row.DEPOSIT_ID];
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
      header: "اسم المحصل",
      field: "DELIVERY_MAN",
      render: (value) => (
        <Chip
          label={value}
          color="primary"
          size="small"
          sx={{ color: "white", fontWeight: "bold" }}
        />
      ),
      width: 200,
    },
    {
      header: "تاريخ التوريد",
      field: "DELIVERY_DATE",
      width: 200,
    },
    {
      header: "عدد الفواتير",
      field: "COUNT",
    },
    {
      header: "المبلغ المورد",
      field: "AMOUNT",
    },
    {
      header: "رقم القسيمة",
      field: "RECEIPT_NO",
    },
    {
      header: "رقم العملية",
      field: "DEPOSIT_ID",
    },
    {
      field: "status",
      header: "الحالة",
      render: (
        value: string | undefined,
        _row: STATMDEPOSITWithStatus,
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
      field: "wrong",
      header: "الخطأ",
      render: (_value, row) => {
        const isCompleted = row.status === "completed";
        return (
          <IconButton
            size="small"
            color="default"
            onClick={() => onShowError(row.DEPOSIT_ID)}
            disabled={isCompleted}
          >
            <VisibilityIcon />
          </IconButton>
        );
      },
    },
  ];
};
