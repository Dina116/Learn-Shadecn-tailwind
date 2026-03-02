import { useCallback, useMemo, useState } from "react";
import {
  useGetBillGroupsApi,
  useGetReadingsMeterWalkCycleApi,
  useReadingPostingMas2Billing,
  type BOOKCYCLEWithStatus,
  type ExecutionError,
} from "../../api/useControlApi";
import type { BILLGROUPS, FilterValues } from "../../types";
import toast from "react-hot-toast";
import { getReadingsPostingColumns } from "./columns";
import type { Flages } from "./PostedFlages";

type RowExtraData = {
  status: "completed" | "failed";
  AffectedRows?: number;
};

export default function useReadingsPosting() {
  const [counters, setCounters] = useState({
    success: 0,
    failed: 0,
    pending: 0,
  });
  const [flagesDialogOpen, setFlagesDialogOpen] = useState(false);
  const [selectedFlages, setSelectedFlages] = useState<Flages | null>(null);
  const [executionErrors, setExecutionErrors] = useState<ExecutionError[]>([]);
  const [bookNoForErrorDialog, setBookNoForErrorDialog] = useState<
    string | null
  >(null);

  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [updatingRowKey, setUpdatingRowKey] = useState<string | null>(null);
  const [rowStatuses, setRowStatuses] = useState<
    Record<string, RowExtraData | undefined>
  >({});
  const [filters, setFilters] = useState<FilterValues | null>(null);

  const {
    data: billGroupsData,
    isLoading: isGroupsLoading,
    refetch,
  } = useGetBillGroupsApi();
  const {
    data: initialTableData,
    isLoading: isDataLoading,
    isFetching,
  } = useGetReadingsMeterWalkCycleApi(filters);

  const { execute: postMas2Billing, isLoading: isExecuting } =
    useReadingPostingMas2Billing(
      (response) => {
        setCounters((prev) => ({
          ...prev,
          success: prev.success + 1,
          pending: prev.pending - 1,
        }));

        setRowStatuses((prev) => ({
          ...prev,
          [response.BookNo]: {
            status: "completed",
            AffectedRows: response.AffectedRows,
          },
        }));
      },
      (error) => {
        setExecutionErrors((prev) => [...prev, error]);
        setCounters((prev) => ({
          ...prev,
          failed: prev.failed + 1,
          pending: prev.pending - 1,
        }));

        setRowStatuses((prev) => ({
          ...prev,
          [error.BOOK_NO]: {
            status: "failed",
          },
        }));
      },
    );

  const handleLoadData = useCallback((values: FilterValues) => {
    console.log("تم تحديث الفلاتر:", values);
    setFilters(values);
  }, []);

  const handleShowRowError = useCallback((book_No: string) => {
    setBookNoForErrorDialog(book_No);
  }, []);

  const handleUpdateRow = useCallback((book_No: string) => {
    console.log("سيتم تحديث الصف:", book_No);
    setUpdatingRowKey(book_No);
  }, []);

  const handleCloseErrorDialog = () => {
    setBookNoForErrorDialog(null);
  };

  const errorToShow = useMemo(() => {
    if (!bookNoForErrorDialog) return [];

    const foundError = executionErrors.find(
      (err) => err.BOOK_NO === bookNoForErrorDialog,
    );
    return foundError ? [foundError] : [];
  }, [bookNoForErrorDialog, executionErrors]);

  const formattedGroups = useMemo(() => {
    if (!billGroupsData) return [];
    return billGroupsData.map((group: BILLGROUPS) => ({
      id: group.GROUP_ID,
      name: `${group.GROUP_ID} - ${group.DESCRIPTION}`,
    }));
  }, [billGroupsData]);
  const tableData: BOOKCYCLEWithStatus[] = useMemo(() => {
    if (!initialTableData) return [];

    return initialTableData.map((row) => {
      const extraData = rowStatuses[row.BOOK_NO];
      if (!extraData) {
        return row;
      }

      return {
        ...row,
        status: extraData.status,

        ...(extraData.AffectedRows !== undefined && {
          AffectedRows: extraData.AffectedRows,
        }),
      };
    });
  }, [initialTableData, rowStatuses]);

  const selectableRows = useMemo(
    () => tableData.filter((row) => row.status !== "completed"),
    [tableData],
  );
  const columns = useMemo(() => {
    console.log("🎨 USEMEMO (columns): يُعاد حسابه.");
    return getReadingsPostingColumns(
      tableData || [],
      selectedRowKeys,
      setSelectedRowKeys,
      handleUpdateRow,
      handleShowRowError,
      selectableRows,
    );
  }, [
    tableData,
    selectedRowKeys,
    handleUpdateRow,
    handleShowRowError,
    selectableRows,
  ]);
  const handleExecuteAction = () => {
    const rowsToExecute = selectableRows.filter((row) =>
      selectedRowKeys.includes(row.BOOK_NO),
    );

    if (rowsToExecute.length === 0) {
      toast.error("يرجى تحديد صفوف جديدة (غير مكتملة) للتنفيذ");
      return;
    }
    setFlagesDialogOpen(true);
  };
  const handleSubmitFlages = async (flages: Flages) => {
    setSelectedFlages(flages);
    setFlagesDialogOpen(false);

    const rowsToExecute = selectableRows.filter((row: { BOOK_NO: string }) =>
      selectedRowKeys.includes(row.BOOK_NO),
    );

    setCounters({ success: 0, failed: 0, pending: rowsToExecute.length });
    setExecutionErrors([]);
    setRowStatuses({});

    for (const row of rowsToExecute) {
      setUpdatingRowKey(row.BOOK_NO);
      try {
        await postMas2Billing({
          STATION_NO: row.STATION_NO,
          BILLGROUP: row.BILLGROUP,
          BOOK_NO: row.BOOK_NO,
          WALK_NO: row.WALK_NO,
          CYCLE_ID: row.CYCLE_ID,
          BILNG_DATE: row.BILNG_DATE ?? "",

          flags: {
            ...row,
            COUNT_CYCLES: row.COUNT_CYCLES ?? null,
            ALL_BILL_DATE: row.ALL_BILL_DATE ?? null,

            IS_RETRY: flages.isretry ?? false,
            UFLAG: flages.uflag ?? false,
            postNegativeFlage: flages.consumpFlages ?? 0,
          },
        });
      } catch (error) {
        console.error(`فشل الطلب للصف ${row.BOOK_NO}:`, error);
      }
    }
    setUpdatingRowKey(null);
  };

  return {
    counters,
    updatingRowKey,
    isGroupsLoading,
    isDataLoading,
    refetch,
    isExecuting,
    handleLoadData,
    handleCloseErrorDialog,
    errorToShow,
    formattedGroups,
    columns,
    handleExecuteAction,
    initialTableData,
    bookNoForErrorDialog,
    tableData,
    flagesDialogOpen,
    selectedFlages,
    setSelectedFlages,
    setFlagesDialogOpen,
    handleSubmitFlages,
    isFetching,
  };
}
