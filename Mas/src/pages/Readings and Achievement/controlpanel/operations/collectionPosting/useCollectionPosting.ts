import { useCallback, useMemo, useState } from "react";
import {
  getCollectionsPostingColumns,
  type STATMDEPOSITWithStatus,
} from "./columns";
import type { BILLGROUPS, FilterValues, STATMDEPOSIT } from "../../types";
import {
  useCollectionMas2BillingApi,
  useGetBillGroupsApi,
  useGetUnPostedStatmDepositsApi,
  type CollectionPostingExecutionError,
} from "../../api/useControlApi";
import toast from "react-hot-toast";

export function GetKey(walk: STATMDEPOSIT) {
  return `${walk.DEPOSIT_ID}${walk.EMP_ID}${walk.STATION_NO}`;
}
export default function useCollectionPosting() {
  const [counters, setCounters] = useState({
    success: 0,
    failed: 0,
    pending: 0,
  });
  const [executionErrors, setExecutionErrors] = useState<
    CollectionPostingExecutionError[]
  >([]);
  const [depositIdForErrorDialog, setDepositIdForErrorDialog] = useState<
    number | null
  >(null);

  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
  const [updatingRowKey, setUpdatingRowKey] = useState<number | null>(null);
  const [rowStatuses, setRowStatuses] = useState<
    Record<number, "completed" | "failed" | undefined>
  >({});

  const { data: billGroupsData, isLoading: isGroupsLoading } =
    useGetBillGroupsApi();
  const {
    data: initialTableData,
    isLoading: isDataLoading,
    refetch: refetchAllDeposits,
  } = useGetUnPostedStatmDepositsApi();

  const { execute: executeBilling, isLoading: isExecuting } =
    useCollectionMas2BillingApi(
      (depositId: number) => {
       setCounters((prev) => ({
          ...prev,
          success: prev.success ,
          pending: prev.pending ,
        }));

        setRowStatuses((prev) => ({
          ...prev,
          [depositId]: "completed",
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
          [error.DEPOSIT_ID]: "failed",
        }));
      },
    );

  const handleLoadData = useCallback((values: FilterValues) => {
    console.log("تم تحديث الفلاتر:", values);
  }, []);

  const handleShowRowError = useCallback((depositId: number) => {
    setDepositIdForErrorDialog(depositId);
  }, []);

  const handleUpdateRow = useCallback((depositId: number) => {
    console.log("سيتم تحديث الصف:", depositId);
    setUpdatingRowKey(depositId);
  }, []);

  const handleCloseErrorDialog = () => {
    setDepositIdForErrorDialog(null);
  };

  const errorToShow = useMemo(() => {
    if (!depositIdForErrorDialog) return [];

    const foundError = executionErrors.find(
      (err) => err.DEPOSIT_ID === depositIdForErrorDialog,
    );
    return foundError ? [foundError] : [];
  }, [depositIdForErrorDialog, executionErrors]);

  const formattedGroups = useMemo(() => {
    if (!billGroupsData) return [];
    return billGroupsData.map((group: BILLGROUPS) => ({
      id: group.GROUP_ID,
      name: `${group.GROUP_ID} - ${group.DESCRIPTION}`,
    }));
  }, [billGroupsData]);

  const tableData: STATMDEPOSITWithStatus[] = useMemo(() => {
    if (!initialTableData) return [];

    return initialTableData.map((row) => ({
      ...row,
      status: rowStatuses[row.DEPOSIT_ID],
    }));
  }, [initialTableData, rowStatuses]);

  const selectableRows = useMemo(
    () => tableData.filter((row) => row.status !== "completed"),
    [tableData],
  );
  const columns = useMemo(
    () =>
      getCollectionsPostingColumns(
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
      .filter((row) => selectedRowKeys.includes(row.DEPOSIT_ID))
      .map((row) => ({ ...row, KEY: GetKey(row) }));

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
      setUpdatingRowKey(row.DEPOSIT_ID);

      try {
        await executeBilling(row);
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
            DEPOSIT_ID: row.DEPOSIT_ID,
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
  };

  return {
    counters,
    updatingRowKey,
    isGroupsLoading,
    isDataLoading,
    refetchAllDeposits,
    isExecuting,
    handleLoadData,
    handleCloseErrorDialog,
    errorToShow,
    formattedGroups,
    columns,
    handleExecuteAction,
    initialTableData,
    depositIdForErrorDialog,
    tableData,
  };
}
