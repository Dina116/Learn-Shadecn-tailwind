import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";
import {
  useCloseWalkRoute,
  useGetBillGroupsApi,
  useGetMeterWalkCycle,
  type BOOKCYCLEWithStatus,
  type ExecutionError,
} from "../../api/useControlApi";
import type { BILLGROUPS, BOOKCYCLE, FilterValues } from "../../types";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import { getCloseRWalkColumns } from "./columns";

type RowExtraData = {
  status: "completed" | "failed";
  AffectedRows?: number;
};
export function GetBookKey(walk: BOOKCYCLE) {
  return `${walk.BOOK_NO}${walk.WALK_NO}${walk.BILLGROUP}`;
}
export default function useCloseRWalk() {
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
    Record<string, RowExtraData | undefined>
  >({});

  const {
    data: billGroupsData,
    isLoading: isGroupsLoading,
    refetch,
  } = useGetBillGroupsApi();
  const queryParams = useMemo(() => {
    if (!filters?.groups?.length || !filters.billingDate) return null;

    return {
      BILLGROUP: filters.groups.map((g) => g.id).join(","),
      bilngDate: dayjs(filters.billingDate).format("YYYY-MM-DD"),
      groups: filters.groups.map((g) => g.id).join(","),
      order: "desc",
    };
  }, [filters]);
  const {
    data: initialTableData,
    isLoading: isDataLoading,
    isFetching,
  } = useGetMeterWalkCycle<BOOKCYCLEWithStatus>(queryParams);

  const { closeWalkRoute: executeClose, isLoading: isExecuting } =
    useCloseWalkRoute(
      (response) => {
        setCounters((prev) => ({
          ...prev,
          success: prev.success ,
          pending: prev.pending ,
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
      getCloseRWalkColumns(
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
    const rowsToExecute = selectableRows
      .filter((row) => selectedRowKeys.includes(row.BOOK_NO))
      .map((row) => ({ ...row, KEY: GetBookKey(row) }));

    if (rowsToExecute.length === 0) {
      toast.error("يرجى تحديد صفوف جديدة (غير مكتملة) للتنفيذ");
      return;
    }
    setCounters((prev) => ({
      ...prev,
      pending: prev.pending + rowsToExecute.length,
    }));
    setExecutionErrors([]);

    for (const row of rowsToExecute) {
      setUpdatingRowKey(row.BOOK_NO);
      try {
        await executeClose({
          ...row,
        });
        setCounters((prev) => ({
          ...prev,
          success: prev.success + 1,
          pending: prev.pending - 1,
        }));
        setRowStatuses((prev) => ({
          ...prev,
          [row.KEY]: { status: "completed" },
        }));
      } catch (error) {
        setCounters((prev) => ({
          ...prev,
          failed: prev.failed + 1,
          pending: prev.pending - 1,
        }));

        setExecutionErrors((prev) => [
          ...prev,
          {
            BOOK_NO: row.BOOK_NO,
            BILLGROUP: row.BILLGROUP,
            WALK_NO: row.WALK_NO,
            message: error instanceof Error ? error.message : "Unknown error",
          },
        ]);

        setRowStatuses((prev) => ({
          ...prev,
          [row.KEY]: { status: "failed" },
        }));
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
    isFetching,
  };
}
