/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useQueryClient } from "@tanstack/react-query";
import { bookCycleUnique, type BOOKCYCLE, type FilterValues } from "../types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ExecutionError } from "../api/useControlApi";
import { useAllowApi, useBookCycleApi } from "./useHhPrepearApi";
import type { IBillGroupBookWalkBilng } from "./types";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Status } from "../status";
import { getHhPreprearColumns } from "./getHhPreprearColumns";

export function GetReadingWalkKey(walk: BOOKCYCLE) {
  return `${walk.BOOK_NO}${walk.WALK_NO}${walk.BILLGROUP}`;
}

export default function useHHPrepear() {
  //   const queryClient = useQueryClient();
  const isAllBilingDateRef = useRef(false);
  const [open, setOpen] = useState<boolean>(false);
  const [rowDetails, setRowDetails] = useState<BOOKCYCLE>({} as BOOKCYCLE);
  const [bookCycles, setBookCycles] = useState<BOOKCYCLE[]>([]);
  const [bookCyclesReq, setBookCyclesReq] =
    useState<IBillGroupBookWalkBilng | null>(null);

  const [filters, setFilters] = useState<FilterValues | null>(null);

  const [executionErrors, setExecutionErrors] = useState<ExecutionError[]>([]);
  const [bookNoForErrorDialog, setBookNoForErrorDialog] = useState<
    string | null
  >(null);

  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [updatingRowKey, setUpdatingRowKey] = useState<string | null>(null);

  const [counters, setCounters] = useState({
    success: 0,
    failed: 0,
    pending: 0,
  });

  const [rowStatuses, setRowStatuses] = useState<
    Record<string, "completed" | "failed" | "running">
  >({});

  const select = useCallback((res: BOOKCYCLE[]) => {
    let rowIndex = 0;

    return res
      .filter((item) => item.IS_COLLECTION || item.IS_READING)
      .map((item) => ({
        ...item,
        uniqueID: bookCycleUnique(item),
        rowIndex: ++rowIndex,
      }));
  }, []);

  const { data, refetch } = useBookCycleApi(bookCyclesReq || {}, select);
  const errorToShow = useMemo(() => {
    if (!bookNoForErrorDialog) return [];

    const found = executionErrors.find(
      (err) => err.BOOK_NO === bookNoForErrorDialog,
    );

    return found ? [found] : [];
  }, [bookNoForErrorDialog, executionErrors]);

  useEffect(() => {
    if (data) {
      setBookCycles(data);
    }
  }, [data]);

  const { mutate: mutateAllow } = useAllowApi({
    onError: (err: AxiosError, req) => {
      const message = (err?.response?.data as string) || "خطأ";

      toast.error(message);

      setExecutionErrors((prev) => [
        ...prev,
        {
          BOOK_NO: req.BOOK_NO,
          WALK_NO: req.WALK_NO,
          BILLGROUP: req.BILLGROUP,
          message,
        },
      ]);
      setBookCycles((prev) =>
        prev.map((item) => {
          if (bookCycleUnique(item) !== bookCycleUnique(req)) return item;

          return {
            ...item,
            status: Status.failed,
            isError: true,
          };
        }),
      );

      setCounters((prev) => ({
        ...prev,
        failed: prev.failed + 1,
        pending: Math.max(prev.pending - 1, 0),
      }));
      const key = GetReadingWalkKey(req);
      setRowStatuses((prev) => ({
        ...prev,
        [key]: "failed",
      }));
      setUpdatingRowKey(null);
    },

    onSuccess: (res: any, req) => {
      if (res?.isError) {
        toast.error("خطأ");

        setExecutionErrors((prev) => [
          ...prev,
          {
            BOOK_NO: req.BOOK_NO,
            WALK_NO: req.WALK_NO,
            BILLGROUP: req.BILLGROUP,
            message: "خطأ",
          },
        ]);

        return;
      }

      setBookCycles((prev) =>
        prev.map((item) => {
          if (bookCycleUnique(item) !== bookCycleUnique(req)) return item;

          return {
            ...item,
            status: Status.completed,
            isChanged: false,
            isComplete: true,
            isError: false,
            count: res?.AffectedRows || res?.Count || 0,
          };
        }),
      );

      setCounters((prev) => ({
        ...prev,
        success: prev.success + 1,
        pending: Math.max(prev.pending - 1, 0),
      }));
      const key = GetReadingWalkKey(req);
      setRowStatuses((prev) => ({
        ...prev,
        [key]: "completed",
      }));

      toast.success("تم بنجاح");
      setUpdatingRowKey(null);
    },
  });

  const handleSubmitAction = useCallback((req: IBillGroupBookWalkBilng) => {
    setBookCyclesReq(req);
    setSelectedRowKeys([]);
  }, []);

  const newGuid = () => Math.floor(Math.random() * 1000000000 + 1);

  const handleExecute = useCallback(() => {
    const selectedRows = bookCycles.filter(
      (row) => row.IS_ALLOWED_C || row.IS_ALLOWED_R || row.IS_ALLOWED_C_FRONT,
    );

    if (!selectedRows.length) {
      toast.error("لم يتم اختيار أي صف");
      return;
    }

    const toastId = toast.loading("جاري التنفيذ...");

    let completed = 0;
    const total = selectedRows.length;

    setCounters((prev) => ({
      ...prev,
      pending: prev.pending + total,
    }));
    selectedRows.forEach((row) => {
      const req = {
        ...row,
        guid: newGuid(),
        AllBilingDate: isAllBilingDateRef.current,
        ALL_BILL_DATE: isAllBilingDateRef.current,
      };

      setUpdatingRowKey(row.BOOK_NO);

      // optimistic update
      setBookCycles((prev) =>
        prev.map((item) =>
          bookCycleUnique(item) === bookCycleUnique(row)
            ? { ...item, status: Status.running }
            : item,
        ),
      );

      mutateAllow(req, {
        onSettled: () => {
          completed++;

          if (completed === total) {
            toast.dismiss(toastId);
          }
        },
      });
    });

    // setUpdatingRowKey(null);
    setSelectedRowKeys([]);
  }, [bookCycles, mutateAllow]);

  const handleOpenModel = useCallback((row: BOOKCYCLE) => {
    setRowDetails(row);
    setOpen(true);
  }, []);

  const handleCloseModel = useCallback(() => {
    setOpen(false);
  }, []);
  const handleSelectOne = useCallback(
    (
      type: "reading" | "collect" | "all_collection",
      value: boolean,
      key: string,
    ) => {
      setBookCycles((prev) =>
        prev.map((item) => {
          if (GetReadingWalkKey(item) !== key) return item;

          const updated = { ...item, isChanged: true };

          if (type === "reading") {
            updated.IS_ALLOWED_R = value;
          }

          if (type === "collect") {
            updated.IS_ALLOWED_C = value;
          }

          if (type === "all_collection") {
            updated.IS_ALLOWED_C_FRONT = value;
          }

          return updated;
        }),
      );
    },
    [],
  );
  const handleSelectAll = useCallback(
    (type: "reading" | "collect" | "all_collection", value: boolean) => {
      setBookCycles((prev) =>
        prev.map((item) => {
          const updated = { ...item, isChanged: true };

          if (type === "reading") {
            updated.IS_ALLOWED_R = value;
          }

          if (type === "collect") {
            updated.IS_ALLOWED_C = value;
          }

          if (type === "all_collection") {
            updated.IS_ALLOWED_C_FRONT = value;
          }

          return updated;
        }),
      );
    },
    [],
  );
  const columns = useMemo(
    () => getHhPreprearColumns(bookCycles, handleSelectOne, handleSelectAll),
    [bookCycles, handleSelectOne, handleSelectAll],
  );
  return {
    handleSelectOne,
    bookCycles,
    counters,
    filters,
    setFilters,
    executionErrors,
    errorToShow,
    bookNoForErrorDialog,
    setBookNoForErrorDialog,
    selectedRowKeys,
    setSelectedRowKeys,
    updatingRowKey,
    rowStatuses,
    handleSubmitAction,
    handleExecute,
    refetch,
    handleOpenModel,
    handleCloseModel,
    rowDetails,
    open,
    handleSelectAll,
    columns,
  };
}
