/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import type {
  CollectionDestributionItm,
  COLLECTIONPOSTEDSHAREDREQ,
} from "../types";
import type { EMPS } from "../../../../../componenet/shared/dataGrid/types";
import type { STATIONS } from "../../types";
import {
  useGetAllCollectorsApi,
  useGetCurrentStationsApi,
  useGetDepositApi,
  useGetIsHeadQuarterApi,
  useGetPostedApi,
} from "../useMoneyTransfeerApi";

interface CollectionDestributionItmEx extends CollectionDestributionItm {
  balanceTotal?: number | undefined;
  underBalance?: number | undefined;
}

type TotalSummary = Pick<
  CollectionDestributionItm,
  | "COLLECTED_AMOUNT"
  | "COLLECTED_COUNT"
  | "RECEIPT_CHARGE1"
  | "RECEIPT_CHARGE2"
  | "RECEIPT_CHARGE3"
  | "DISCOUNT"
  | "BILLGROUP"
  | "PAYMENT_METHOD"
>;
export default function usePostHistory() {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [sumTotals, setSumTotals] = useState<CollectionDestributionItmEx>({});
  const [sumTotalsNotNaqdy, setSumTotalsNotNaqdy] =
    useState<CollectionDestributionItmEx>({});
  const [selectedEmp, setSelectedEmp] = useState<EMPS>({} as EMPS);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedStation, setSelectedStation] = useState<STATIONS>(
    {} as STATIONS,
  );
  const [finalReq, setFinalReq] = useState<number>(0);
  const [postedReq, setPostedReq] = useState<COLLECTIONPOSTEDSHAREDREQ>(
    {} as COLLECTIONPOSTEDSHAREDREQ,
  );
  const arrSumTotalSummaryNaqdyRef = useRef<TotalSummary[]>([]);
  const arrSumTotalSummaryAll = useRef<TotalSummary>({});
  const arrSumTotalSummaryNotNaqdyRef = useRef<TotalSummary[]>([]);
  const invoicesListByBillGr = useRef<Map<string, CollectionDestributionItm>>(
    new Map(),
  );

  const { data: AllEmps } = useGetAllCollectorsApi();
  const { data: Station } = useGetCurrentStationsApi();
  const { data: DepositList } = useGetDepositApi(finalReq);
  const { data: PostedinvoicesList } = useGetPostedApi(postedReq);
  const { data: isHeadQuarter } = useGetIsHeadQuarterApi();
  const { empId } = useParams();

  const getOption = (option: EMPS) => `${option.ID!}-${option.FULL_NAME}`;

  const calac = useCallback((newData: CollectionDestributionItm) => {
    const nData = { ...newData };
    const obj: CollectionDestributionItm =
      invoicesListByBillGr.current.get(newData.BILLGROUP!) || {};
    Object.entries(nData).forEach((vals) => {
      const key = vals[0];
      const val = vals[1];
      obj.BILLGROUP = newData.BILLGROUP;
      obj.PAYMENT_METHOD = newData.PAYMENT_METHOD;
      if (typeof val === "number") {
        const valass =
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          (obj[key as keyof CollectionDestributionItm] || 0) + val;
        obj[key as keyof CollectionDestributionItm] = valass;
      }
    });
    invoicesListByBillGr.current.set(newData.BILLGROUP!, obj);
  }, []);

  useEffect(() => {
    if (!PostedinvoicesList?.length) {
      setSumTotals({});
      setSumTotalsNotNaqdy({});
      return;
    }

    const cashTotals: any = {};
    const notCashTotals: any = {};

    const add = (target: any, key: string, value: number) => {
      target[key] = (target[key] || 0) + (value || 0);
    };

    PostedinvoicesList.forEach((item) => {
      const isCash =
        item?.PAYMENT_METHOD === "CASH" || item?.PAYMENT_METHOD === "نقدي";

      const target = isCash ? cashTotals : notCashTotals;

      add(target, "COLLECTED_COUNT", item?.COLLECTED_COUNT ?? 0);
      add(target, "COLLECTED_AMOUNT", item?.COLLECTED_AMOUNT ?? 0);
      add(target, "WATER_AMT", item?.WATER_AMT ?? 0);
      add(target, "SEWER_AMT", item?.SEWER_AMT ?? 0);
      add(target, "BASIC_AMT", item?.BASIC_AMT ?? 0);
      add(target, "INSTALLS_AMT", item?.INSTALLS_AMT ?? 0);
      add(target, "ROUND_AMT", item?.ROUND_AMT ?? 0);
      add(target, "OTHER_AMT1", item?.OTHER_AMT1 ?? 0);
      add(target, "TANZEEM_AMT", item?.TANZEEM_AMT ?? 0);
      add(target, "CONN_INSTALLS_AMT", item?.CONN_INSTALLS_AMT ?? 0);
      add(target, "METER_INSTALLS_AMT", item?.METER_INSTALLS_AMT ?? 0);
      add(target, "METER_MAN_AMT", item?.METER_MAN_AMT ?? 0);
      add(target, "CONTRACT_AMT", item?.CONTRACT_AMT ?? 0);
      add(target, "TAX_AMT", item?.TAX_AMT ?? 0);
      add(target, "CUR_PAYMNTS", item?.CUR_PAYMNTS ?? 0);
      add(target, "DBT_AMT", item?.DBT_AMT ?? 0);
      add(target, "CRDT_AMT", item?.CRDT_AMT ?? 0);
      add(target, "AGREEM_AMT", item?.AGREEM_AMT ?? 0);
      add(target, "OTHER_AMT", item?.OTHER_AMT ?? 0);
      add(target, "OTHER_AMT2", item?.OTHER_AMT2 ?? 0);
      add(target, "OTHER_AMT3", item?.OTHER_AMT3 ?? 0);
      add(target, "OTHER_AMT4", item?.OTHER_AMT4 ?? 0);
      add(target, "OTHER_AMT5", item?.OTHER_AMT5 ?? 0);
      add(target, "GOV_AMT", item?.GOV_AMT ?? 0);
      add(target, "UNI_AMT", item?.UNI_AMT ?? 0);
      add(target, "CONN_AMT", item?.CONN_AMT ?? 0);
      add(target, "COMPUTER_AMT", item?.COMPUTER_AMT ?? 0);
      add(target, "TAKAFUL_AMT", item?.TAKAFUL_AMT ?? 0);
      add(target, "CLEAN_AMT", item?.CLEAN_AMT ?? 0);
      add(target, "OP_BLNCE", item?.OP_BLNCE ?? 0);
      add(target, "DISCOUNT", item?.DISCOUNT ?? 0);
      add(target, "RECEIPT_CHARGE1", item?.RECEIPT_CHARGE1 ?? 0);
      add(target, "RECEIPT_CHARGE2", item?.RECEIPT_CHARGE2 ?? 0);
      add(target, "RECEIPT_CHARGE3", item?.RECEIPT_CHARGE3 ?? 0);

      if (item?.COLLECTION_TYPE === "PARTIAL") {
        add(target, "underBalance", item?.COLLECTED_AMOUNT ?? 0);
      }
    });

    const calcBalance = (prev: any) =>
      (prev.OP_BLNCE || 0) +
        (prev.COLLECTION_AMT ? prev.COLLECTION_AMT : prev.CUR_PAYMNTS || 0) +
        (prev.DBT_AMT || 0) +
        (prev.CRDT_AMT || 0) +
        (prev.AGREEM_AMT || 0) +
        (prev.OTHER_AMT || 0) +
        (prev.OTHER_AMT1 || 0) +
        (prev.OTHER_AMT2 || 0) +
        (prev.OTHER_AMT3 || 0) +
        (prev.OTHER_AMT4 || 0) +
        (prev.OTHER_AMT5 || 0) +
        (prev.GOV_AMT || 0) +
        (prev.UNI_AMT || 0) +
        (prev.CONN_AMT || 0) +
        (prev.COMPUTER_AMT || 0) +
        (prev.TAKAFUL_AMT || 0) +
        (prev.CLEAN_AMT || 0) || 0;

    cashTotals.balanceTotal = calcBalance(cashTotals);
    notCashTotals.balanceTotal = calcBalance(notCashTotals);

    setSumTotals(cashTotals);
    setSumTotalsNotNaqdy(notCashTotals);
  }, [PostedinvoicesList]);

  const sortByPropertyExistence = (a: EMPS, b: EMPS) => {
    if (
      Object.prototype.hasOwnProperty.call(a, "hasUnPostiong") &&
      !Object.prototype.hasOwnProperty.call(b, "hasUnPostiong")
    ) {
      return -1;
    }
    if (
      !Object.prototype.hasOwnProperty.call(a, "hasUnPostiong") &&
      Object.prototype.hasOwnProperty.call(b, "hasUnPostiong")
    ) {
      return 1;
    }
    return 0;
  };

  const sortEmps = useMemo(() => {
    return (AllEmps || [])
      .sort((a, b) => (a.FULL_NAME || "").localeCompare(b.FULL_NAME || ""))
      ?.sort((a, b) => sortByPropertyExistence(a, b));
  }, [AllEmps]);

  const filteredEmps =
    selectedStation?.IS_HEADQUARTERS && isHeadQuarter
      ? sortEmps
      : selectedStation?.STATION_NO
        ? sortEmps?.filter(
            (emp) =>
              String(emp.BRANCH_ID) === String(selectedStation?.STATION_NO),
          ) || []
        : sortEmps;
  console.log("AllEmps from usePostHistory", AllEmps);
  console.log("filteredEmps from usePostHistory", filteredEmps);

  const selectedEmpFromList = useMemo(() => {
    if (!empId || !AllEmps?.length) return null;
    return AllEmps.find((emp) => emp.ID === Number(empId));
  }, [AllEmps, empId]);

  useEffect(() => {
    if (!selectedEmpFromList) return;

    if (finalReq === 0 || !finalReq) {
      setSelectedEmp(selectedEmpFromList);
      setFinalReq(Number(selectedEmpFromList.ID));
    }
  }, [selectedEmpFromList, finalReq]);

  const mapSummaryNaqdy = useRef<Map<string, TotalSummary>>(new Map());
  const TotalSummaryNaqdy = mapSummaryNaqdy.current;

  const mapSummaryNotNaqdy = useRef<Map<string, TotalSummary>>(new Map());
  const TotalSummaryNotNaqdy = mapSummaryNotNaqdy.current;

  const handleSetShowDetails = (st: boolean) => {
    setShowDetails(st);
  };

  const getPostedinvoicesList = useCallback(() => {
    TotalSummaryNaqdy.clear();
    TotalSummaryNotNaqdy.clear();
    invoicesListByBillGr.current = new Map();
    if ((PostedinvoicesList || [])?.length > 0) {
      PostedinvoicesList?.forEach((unpost: CollectionDestributionItm) => {
        calac(unpost);
        if (
          unpost.PAYMENT_METHOD === "CASH" ||
          unpost.PAYMENT_METHOD === "نقدي"
        ) {
          if (unpost?.BILLGROUP) {
            const Obj1: TotalSummary = {};
            const prevBRVals = TotalSummaryNaqdy.get(unpost.BILLGROUP);
            // COLLECTED_COUNT
            Obj1.PAYMENT_METHOD = unpost.PAYMENT_METHOD;
            Obj1.BILLGROUP = unpost.BILLGROUP;
            Obj1.COLLECTED_COUNT =
              (prevBRVals?.COLLECTED_COUNT || 0) +
              (unpost?.COLLECTED_COUNT || 0);
            // COLLECTED_AMOUNT
            Obj1.COLLECTED_AMOUNT =
              (prevBRVals?.COLLECTED_AMOUNT || 0) +
              (unpost?.COLLECTED_AMOUNT || 0);
            // DISCOUNT
            Obj1.DISCOUNT =
              (prevBRVals?.DISCOUNT || 0) + (unpost?.DISCOUNT || 0);
            // RECEIPT_CHARGE1
            Obj1.RECEIPT_CHARGE1 =
              (prevBRVals?.RECEIPT_CHARGE1 || 0) +
              (unpost?.RECEIPT_CHARGE1 || 0);
            // RECEIPT_CHARGE2
            Obj1.RECEIPT_CHARGE2 =
              (prevBRVals?.RECEIPT_CHARGE2 || 0) +
              (unpost?.RECEIPT_CHARGE2 || 0);
            // RECEIPT_CHARGE3
            Obj1.RECEIPT_CHARGE3 =
              (prevBRVals?.RECEIPT_CHARGE3 || 0) +
              (unpost?.RECEIPT_CHARGE3 || 0);
            TotalSummaryNaqdy.set(unpost?.BILLGROUP, Obj1);
          }
        } else if (
          (unpost?.BILLGROUP && unpost.PAYMENT_METHOD !== "CASH") ||
          (unpost?.BILLGROUP && unpost.PAYMENT_METHOD === "غير نقدي")
        ) {
          const Obj1: TotalSummary = {};
          const prevBRVals = TotalSummaryNotNaqdy.get(unpost.BILLGROUP); // 0
          // COLLECTED_COUNT
          Obj1.PAYMENT_METHOD = unpost.PAYMENT_METHOD;
          Obj1.BILLGROUP = unpost.BILLGROUP;
          Obj1.COLLECTED_COUNT =
            (prevBRVals?.COLLECTED_COUNT || 0) + (unpost?.COLLECTED_COUNT || 0);
          // COLLECTED_AMOUNT
          Obj1.COLLECTED_AMOUNT =
            (prevBRVals?.COLLECTED_AMOUNT || 0) +
            (unpost?.COLLECTED_AMOUNT || 0);
          // RECEIPT_CHARGE1
          Obj1.RECEIPT_CHARGE1 =
            (prevBRVals?.RECEIPT_CHARGE1 || 0) + (unpost?.RECEIPT_CHARGE1 || 0);
          // RECEIPT_CHARGE2
          Obj1.RECEIPT_CHARGE2 =
            (prevBRVals?.RECEIPT_CHARGE2 || 0) + (unpost?.RECEIPT_CHARGE2 || 0);
          // RECEIPT_CHARGE3
          Obj1.RECEIPT_CHARGE3 =
            (prevBRVals?.RECEIPT_CHARGE3 || 0) + (unpost?.RECEIPT_CHARGE3 || 0);
          TotalSummaryNotNaqdy.set(unpost?.BILLGROUP, Obj1);
        }
      });
    }
    const arrSumTotalSummaryNaqdy = Array.from(TotalSummaryNaqdy.values());
    const arrSumTotalSummaryNotNaqdy = Array.from(
      TotalSummaryNotNaqdy.values(),
    );
    const sumTotalSummaryNaqdy: TotalSummary = {
      BILLGROUP: "",
      COLLECTED_AMOUNT: 0,
      COLLECTED_COUNT: 0,
      DISCOUNT: 0,
      RECEIPT_CHARGE1: 0,
      RECEIPT_CHARGE2: 0,
      RECEIPT_CHARGE3: 0,
    };
    const sumTotalSummaryNotNaqdy: TotalSummary = {
      BILLGROUP: "",
      COLLECTED_AMOUNT: 0,
      COLLECTED_COUNT: 0,
      DISCOUNT: 0,
      RECEIPT_CHARGE1: 0,
      RECEIPT_CHARGE2: 0,
      RECEIPT_CHARGE3: 0,
    };
    // for naqdy
    arrSumTotalSummaryNaqdy.forEach((a) => {
      sumTotalSummaryNaqdy.COLLECTED_AMOUNT! += a.COLLECTED_AMOUNT || 0;
      sumTotalSummaryNaqdy.RECEIPT_CHARGE1! += a.RECEIPT_CHARGE1 || 0;
      sumTotalSummaryNaqdy.RECEIPT_CHARGE2! += a.RECEIPT_CHARGE2 || 0;
      sumTotalSummaryNaqdy.RECEIPT_CHARGE3! += a.RECEIPT_CHARGE3 || 0;
      sumTotalSummaryNaqdy.DISCOUNT! += a.DISCOUNT || 0;
      sumTotalSummaryNaqdy.COLLECTED_COUNT! += a.COLLECTED_COUNT || 0;
    });
    // for not naqdy
    arrSumTotalSummaryNotNaqdy.forEach((a) => {
      sumTotalSummaryNotNaqdy.COLLECTED_AMOUNT! += a.COLLECTED_AMOUNT || 0;
      sumTotalSummaryNotNaqdy.RECEIPT_CHARGE1! += a.RECEIPT_CHARGE1 || 0;
      sumTotalSummaryNotNaqdy.RECEIPT_CHARGE2! += a.RECEIPT_CHARGE2 || 0;
      sumTotalSummaryNotNaqdy.RECEIPT_CHARGE3! += a.RECEIPT_CHARGE3 || 0;
      sumTotalSummaryNotNaqdy.DISCOUNT! += a.DISCOUNT || 0;
      sumTotalSummaryNotNaqdy.COLLECTED_COUNT! += a.COLLECTED_COUNT || 0;
    });
    arrSumTotalSummaryNaqdy.push(sumTotalSummaryNaqdy);
    arrSumTotalSummaryNotNaqdy.push(sumTotalSummaryNotNaqdy);
    arrSumTotalSummaryNaqdyRef.current = arrSumTotalSummaryNaqdy;
    arrSumTotalSummaryNotNaqdyRef.current = arrSumTotalSummaryNotNaqdy;

    arrSumTotalSummaryAll.current = {
      COLLECTED_AMOUNT:
        (arrSumTotalSummaryNaqdy[arrSumTotalSummaryNaqdy.length - 1]
          ?.COLLECTED_AMOUNT || 0) +
        (arrSumTotalSummaryNotNaqdy[arrSumTotalSummaryNotNaqdy.length - 1]
          ?.COLLECTED_AMOUNT || 0),
      COLLECTED_COUNT:
        (arrSumTotalSummaryNaqdy[arrSumTotalSummaryNaqdy.length - 1]
          ?.COLLECTED_COUNT || 0) +
        (arrSumTotalSummaryNotNaqdy[arrSumTotalSummaryNotNaqdy.length - 1]
          ?.COLLECTED_COUNT || 0),
      DISCOUNT:
        (arrSumTotalSummaryNaqdy[arrSumTotalSummaryNaqdy.length - 1]
          ?.DISCOUNT || 0) +
        (arrSumTotalSummaryNotNaqdy[arrSumTotalSummaryNotNaqdy.length - 1]
          ?.DISCOUNT || 0),
      RECEIPT_CHARGE1:
        (arrSumTotalSummaryNaqdy[arrSumTotalSummaryNaqdy.length - 1]
          ?.RECEIPT_CHARGE1 || 0) +
        (arrSumTotalSummaryNotNaqdy[arrSumTotalSummaryNotNaqdy.length - 1]
          ?.RECEIPT_CHARGE1 || 0),
      RECEIPT_CHARGE2:
        (arrSumTotalSummaryNaqdy[arrSumTotalSummaryNaqdy.length - 1]
          ?.RECEIPT_CHARGE2 || 0) +
        (arrSumTotalSummaryNotNaqdy[arrSumTotalSummaryNotNaqdy.length - 1]
          ?.RECEIPT_CHARGE2 || 0),
      RECEIPT_CHARGE3:
        (arrSumTotalSummaryNaqdy[arrSumTotalSummaryNaqdy.length - 1]
          ?.RECEIPT_CHARGE3 || 0) +
        (arrSumTotalSummaryNotNaqdy[arrSumTotalSummaryNotNaqdy.length - 1]
          ?.RECEIPT_CHARGE3 || 0),
    };
  }, [PostedinvoicesList, calac]);

  useEffect(() => {
    getPostedinvoicesList();
  }, [getPostedinvoicesList]);

  console.count("render");
  return {
    filteredEmps,
    isHeadQuarter,
    setSelectedEmp,
    setFinalReq,
    setSelectedStation,
    setOpenModal,
    setPostedReq,
    handleSetShowDetails,
    getOption,
    getPostedinvoicesList,
    postedReq,
    invoicesListByBillGr,
    selectedEmp,
    Station,
    selectedStation,
    DepositList,
    AllEmps,
    openModal,
    PostedinvoicesList,
    sumTotals,
    sumTotalsNotNaqdy,
    arrSumTotalSummaryNaqdyRef,
    arrSumTotalSummaryAll,
    arrSumTotalSummaryNotNaqdyRef,
    showDetails,
  };
}
