import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";
import {
  useGetBillGroupsApi,
  useGetMeterWalkCycle,
  useReadingsBilling2Mas,
  type ExecutionError,
} from "../../api/useControlApi";
import type { BILLGROUPS, FilterValues } from "../../types";
import { getReadingPulledColumns, type ReadingDataWithStatus } from "./columns";
import toast from "react-hot-toast";

export default function useReadingsPull() {
  const queryClient = useQueryClient();
  const [counters, setCounters] = useState({
    success: 0,
    failed: 0,
    pending: 0,
  });
  const [executionErrors, setExecutionErrors] = useState<ExecutionError[]>([]);
  const [bookNoForErrorDialog, setBookNoForErrorDialog] = useState<
    string | null
  >(null);

  const errorToShow = useMemo(() => {
    if (!bookNoForErrorDialog) return [];
    const foundError = executionErrors.find(
      (err) => err.BOOK_NO === bookNoForErrorDialog,
    );
    return foundError ? [foundError] : [];
  }, [bookNoForErrorDialog, executionErrors]);
  const [filters, setFilters] = useState<FilterValues | null>(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  const [updatingRowKey, setUpdatingRowKey] = useState<string | null>(null);
  const [rowStatuses, setRowStatuses] = useState<
    Record<string, "completed" | "failed" | undefined>
  >({});

  const {
    data: billGroupsData,
    isLoading: isGroupsLoading,
    refetch,
  } = useGetBillGroupsApi();
  const { data: initialTableData, isLoading: isDataLoading } =
    useGetMeterWalkCycle(filters);

  const { execute: executeBilling, isLoading: isExecuting } =
    useReadingsBilling2Mas(
      (bookNo: string) => {
        setCounters((prev) => ({
          ...prev,
          success: prev.success + 1,
          pending: prev.pending - 1,
        }));
        setRowStatuses((prev) => ({
          ...prev,
          [bookNo]: "completed",
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
          [error.BOOK_NO]: "failed",
        }));
      },
    );

  const tableData = useMemo<ReadingDataWithStatus[]>(() => {
    if (!initialTableData) return [];

    return initialTableData.map((row) => ({
      ...row,
      status: rowStatuses[row.BOOK_NO],
    }));
  }, [initialTableData, rowStatuses]);

  const selectableRows = useMemo(
    () => tableData.filter((row) => row.status !== "completed"),
    [tableData],
  );

  const handleLoadData = useCallback((values: FilterValues) => {
    console.log("تم تحديث الفلاتر:", values);
    setFilters(values);
  }, []);

  const handleShowRowError = useCallback((bookNo: string) => {
    setBookNoForErrorDialog(bookNo);
  }, []);

  const handleUpdateRow = useCallback((bookNo: string) => {
    console.log("سيتم تحديث الصف:", bookNo);
    setUpdatingRowKey(bookNo);
  }, []);

  const handleCloseErrorDialog = () => {
    setBookNoForErrorDialog(null);
  };

  const formattedGroups = useMemo(() => {
    if (!billGroupsData) return [];
    return billGroupsData.map((group: BILLGROUPS) => ({
      id: group.GROUP_ID,
      name: `${group.GROUP_ID} - ${group.DESCRIPTION}`,
    }));
  }, [billGroupsData]);

  const columns = useMemo(
    () =>
      getReadingPulledColumns(
        tableData || [],
        selectedRowKeys,
        setSelectedRowKeys,
        handleUpdateRow,
        handleShowRowError,
        selectableRows,
      ),
    [
      tableData,
      selectedRowKeys,
      handleUpdateRow,
      handleShowRowError,
      selectableRows,
    ],
  );
  const handleExecuteAction = async () => {
    const rowsToExecute = selectableRows.filter((row) =>
      selectedRowKeys.includes(row.BOOK_NO),
    );

    if (rowsToExecute.length === 0) {
      toast.error("يرجى تحديد صفوف جديدة (غير مكتملة) للتنفيذ");
      return;
    }

    setCounters({ success: 0, failed: 0, pending: rowsToExecute.length });
    setExecutionErrors([]);

    for (const row of rowsToExecute) {
      setUpdatingRowKey(row.BOOK_NO);
      try {
        await executeBilling({
          ...row,
          bilngDate: filters?.billingDate || "",
        });
      } catch {
        //
      }
    }
    setUpdatingRowKey(null);
    setSelectedRowKeys([]);

    toast.loading("جاري تحديث الجدول...");
    await queryClient.invalidateQueries(["customerWalkCycle"]);
    toast.dismiss();
  };

  return {
    counters,
    errorToShow,
    updatingRowKey,
    isGroupsLoading,
    refetch,
    isDataLoading,
    isExecuting,
    handleLoadData,
    handleCloseErrorDialog,
    formattedGroups,
    columns,
    handleExecuteAction,
    tableData,
    bookNoForErrorDialog,
  };
}
