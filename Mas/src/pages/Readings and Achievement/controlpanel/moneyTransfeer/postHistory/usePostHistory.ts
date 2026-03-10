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
  useGetPostedApi,
} from "../../api/useControlApi";

// export interface IreqProp {
//   empid?: number;
//   depositId: number;
// }
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
  // const [keyRender, setKeyRender] = useState<Date>(new Date());
  const [, setKeyRender] = useState<Date>(new Date());

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
  const { id } = useParams();
  const getOption = (option: EMPS) => `${option.id!}-${option.fullName}`;

  // Takes object and calculate them into previous
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
    // console.log(obj, newData, 'obj');
    invoicesListByBillGr.current.set(newData.BILLGROUP!, obj);
    // console.log(invoicesListByBillGr.current, 'objsss');
    // setTemp(!tempState);
  }, []);

  useMemo(() => {
    setSumTotals({});
    setSumTotalsNotNaqdy({});
    // get Totals for Cash List
    PostedinvoicesList?.forEach((item) => {
      if (item?.PAYMENT_METHOD === "CASH" || item?.PAYMENT_METHOD === "نقدي") {
        setSumTotals((prev) => ({
          COLLECTED_COUNT:
            (prev?.COLLECTED_COUNT || 0) + (item?.COLLECTED_COUNT || 0),
          COLLECTED_AMOUNT:
            (prev?.COLLECTED_AMOUNT || 0) + (item?.COLLECTED_AMOUNT || 0),
          WATER_AMT: (prev?.WATER_AMT || 0) + (item?.WATER_AMT || 0),
          SEWER_AMT: (prev?.SEWER_AMT || 0) + (item?.SEWER_AMT || 0),
          BASIC_AMT: (prev?.BASIC_AMT || 0) + (item?.BASIC_AMT || 0),
          INSTALLS_AMT: (prev?.INSTALLS_AMT || 0) + (item?.INSTALLS_AMT || 0),
          ROUND_AMT: (prev?.ROUND_AMT || 0) + (item?.ROUND_AMT || 0),
          OTHER_AMT1: (prev?.OTHER_AMT1 || 0) + (item?.OTHER_AMT1 || 0),
          TANZEEM_AMT: (prev?.TANZEEM_AMT || 0) + (item?.TANZEEM_AMT || 0),
          CONN_INSTALLS_AMT:
            (prev?.CONN_INSTALLS_AMT || 0) + (item?.CONN_INSTALLS_AMT || 0),
          METER_INSTALLS_AMT:
            (prev?.METER_INSTALLS_AMT || 0) + (item?.METER_INSTALLS_AMT || 0),
          METER_MAN_AMT:
            (prev?.METER_MAN_AMT || 0) + (item?.METER_MAN_AMT || 0),
          CONTRACT_AMT: (prev?.CONTRACT_AMT || 0) + (item?.CONTRACT_AMT || 0),
          TAX_AMT: (prev?.TAX_AMT || 0) + (item?.TAX_AMT || 0),
          CUR_PAYMNTS: (prev?.CUR_PAYMNTS || 0) + (item?.CUR_PAYMNTS || 0),
          DBT_AMT: (prev?.DBT_AMT || 0) + (item?.DBT_AMT || 0),
          CRDT_AMT: (prev?.CRDT_AMT || 0) + (item?.CRDT_AMT || 0),
          AGREEM_AMT: (prev?.AGREEM_AMT || 0) + (item?.AGREEM_AMT || 0),
          OTHER_AMT: (prev?.OTHER_AMT || 0) + (item?.OTHER_AMT || 0),
          OTHER_AMT2: (prev?.OTHER_AMT2 || 0) + (item?.OTHER_AMT2 || 0),
          OTHER_AMT3: (prev?.OTHER_AMT3 || 0) + (item?.OTHER_AMT3 || 0),
          OTHER_AMT4: (prev?.OTHER_AMT4 || 0) + (item?.OTHER_AMT4 || 0),
          OTHER_AMT5: (prev?.OTHER_AMT5 || 0) + (item?.OTHER_AMT5 || 0),
          GOV_AMT: (prev?.GOV_AMT || 0) + (item?.GOV_AMT || 0),
          UNI_AMT: (prev?.UNI_AMT || 0) + (item?.UNI_AMT || 0),
          CONN_AMT: (prev?.CONN_AMT || 0) + (item?.CONN_AMT || 0),
          COMPUTER_AMT: (prev?.COMPUTER_AMT || 0) + (item?.COMPUTER_AMT || 0),
          TAKAFUL_AMT: (prev?.TAKAFUL_AMT || 0) + (item?.TAKAFUL_AMT || 0),
          CLEAN_AMT: (prev?.CLEAN_AMT || 0) + (item?.CLEAN_AMT || 0),
          OP_BLNCE: (prev?.OP_BLNCE || 0) + (item?.OP_BLNCE || 0),
          DISCOUNT: (prev?.DISCOUNT || 0) + (item?.DISCOUNT || 0),
          RECEIPT_CHARGE1:
            (prev?.RECEIPT_CHARGE1 || 0) + (item?.RECEIPT_CHARGE1 || 0),
          RECEIPT_CHARGE2:
            (prev?.RECEIPT_CHARGE2 || 0) + (item?.RECEIPT_CHARGE2 || 0),
          RECEIPT_CHARGE3:
            (prev?.RECEIPT_CHARGE3 || 0) + (item?.RECEIPT_CHARGE3 || 0),
          underBalance:
            item.COLLECTION_TYPE === "PARTIAL"
              ? (prev.underBalance || 0) + (item.COLLECTED_AMOUNT || 0)
              : prev.underBalance || 0,
        }));
      } else {
        setSumTotalsNotNaqdy((prev) => ({
          COLLECTED_COUNT:
            (prev?.COLLECTED_COUNT || 0) + (item?.COLLECTED_COUNT || 0),
          COLLECTED_AMOUNT:
            (prev?.COLLECTED_AMOUNT || 0) + (item?.COLLECTED_AMOUNT || 0),
          WATER_AMT: (prev?.WATER_AMT || 0) + (item?.WATER_AMT || 0),
          SEWER_AMT: (prev?.SEWER_AMT || 0) + (item?.SEWER_AMT || 0),
          BASIC_AMT: (prev?.BASIC_AMT || 0) + (item?.BASIC_AMT || 0),
          INSTALLS_AMT: (prev?.INSTALLS_AMT || 0) + (item?.INSTALLS_AMT || 0),
          ROUND_AMT: (prev?.ROUND_AMT || 0) + (item?.ROUND_AMT || 0),
          OTHER_AMT1: (prev?.OTHER_AMT1 || 0) + (item?.OTHER_AMT1 || 0),
          TANZEEM_AMT: (prev?.TANZEEM_AMT || 0) + (item?.TANZEEM_AMT || 0),
          CONN_INSTALLS_AMT:
            (prev?.CONN_INSTALLS_AMT || 0) + (item?.CONN_INSTALLS_AMT || 0),
          METER_INSTALLS_AMT:
            (prev?.METER_INSTALLS_AMT || 0) + (item?.METER_INSTALLS_AMT || 0),
          METER_MAN_AMT:
            (prev?.METER_MAN_AMT || 0) + (item?.METER_MAN_AMT || 0),
          CONTRACT_AMT: (prev?.CONTRACT_AMT || 0) + (item?.CONTRACT_AMT || 0),
          TAX_AMT: (prev?.TAX_AMT || 0) + (item?.TAX_AMT || 0),
          CUR_PAYMNTS: (prev?.CUR_PAYMNTS || 0) + (item?.CUR_PAYMNTS || 0),
          DBT_AMT: (prev?.DBT_AMT || 0) + (item?.DBT_AMT || 0),
          CRDT_AMT: (prev?.CRDT_AMT || 0) + (item?.CRDT_AMT || 0),
          AGREEM_AMT: (prev?.AGREEM_AMT || 0) + (item?.AGREEM_AMT || 0),
          OTHER_AMT: (prev?.OTHER_AMT || 0) + (item?.OTHER_AMT || 0),
          OTHER_AMT2: (prev?.OTHER_AMT2 || 0) + (item?.OTHER_AMT2 || 0),
          OTHER_AMT3: (prev?.OTHER_AMT3 || 0) + (item?.OTHER_AMT3 || 0),
          OTHER_AMT4: (prev?.OTHER_AMT4 || 0) + (item?.OTHER_AMT4 || 0),
          OTHER_AMT5: (prev?.OTHER_AMT5 || 0) + (item?.OTHER_AMT5 || 0),
          GOV_AMT: (prev?.GOV_AMT || 0) + (item?.GOV_AMT || 0),
          UNI_AMT: (prev?.UNI_AMT || 0) + (item?.UNI_AMT || 0),
          CONN_AMT: (prev?.CONN_AMT || 0) + (item?.CONN_AMT || 0),
          COMPUTER_AMT: (prev?.COMPUTER_AMT || 0) + (item?.COMPUTER_AMT || 0),
          TAKAFUL_AMT: (prev?.TAKAFUL_AMT || 0) + (item?.TAKAFUL_AMT || 0),
          CLEAN_AMT: (prev?.CLEAN_AMT || 0) + (item?.CLEAN_AMT || 0),
          OP_BLNCE: (prev?.OP_BLNCE || 0) + (item?.OP_BLNCE || 0),
          DISCOUNT: (prev?.DISCOUNT || 0) + (item?.DISCOUNT || 0),
          RECEIPT_CHARGE1:
            (prev?.RECEIPT_CHARGE1 || 0) + (item?.RECEIPT_CHARGE1 || 0),
          RECEIPT_CHARGE2:
            (prev?.RECEIPT_CHARGE2 || 0) + (item?.RECEIPT_CHARGE2 || 0),
          RECEIPT_CHARGE3:
            (prev?.RECEIPT_CHARGE3 || 0) + (item?.RECEIPT_CHARGE3 || 0),
          underBalance:
            item.COLLECTION_TYPE === "PARTIAL"
              ? (prev.underBalance || 0) + (item.COLLECTED_AMOUNT || 0)
              : prev.underBalance || 0,
        }));
      }
    });

    // get Totals For Not Cash List
    setSumTotals((prev) => ({
      ...prev,
      balanceTotal:
        (prev.OP_BLNCE || 0) +
          (prev.COLLECTION_AMT
            ? prev.COLLECTION_AMT || 0
            : prev.CUR_PAYMNTS || 0) +
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
          (prev.CLEAN_AMT || 0) || 0,
    }));

    setSumTotalsNotNaqdy((prev) => ({
      ...prev,
      balanceTotal:
        (prev.OP_BLNCE || 0) +
          (prev.COLLECTION_AMT
            ? prev.COLLECTION_AMT || 0
            : prev.CUR_PAYMNTS || 0) +
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
          (prev.CLEAN_AMT || 0) || 0,
    }));
  }, [PostedinvoicesList]);

  useEffect(() => {
    // console.log('useEffect Running');
    if (id) {
      setSelectedEmp(
        AllEmps?.find((emp: { id: number }) => emp.id === Number(id)) ||
          ({} as EMPS),
      );
      // console.log(AllEmps?.find((emp) => emp.id === Number(id)), 'EMP ID');
    }
    setSelectedStation(Station || ({} as STATIONS));
    setFinalReq(Number(id));
  }, [AllEmps, Station, id]);

  const mapSummaryNaqdy = useRef<Map<string, TotalSummary>>(new Map());
  const TotalSummaryNaqdy = mapSummaryNaqdy.current;

  const mapSummaryNotNaqdy = useRef<Map<string, TotalSummary>>(new Map());
  const TotalSummaryNotNaqdy = mapSummaryNotNaqdy.current;

  const handleSetShowDetails = (st: boolean) => {
    setShowDetails(st);
  };

  const getPostedinvoicesList = useCallback(() => {
    setKeyRender(new Date());
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
            const prevBRVals = TotalSummaryNaqdy.get(unpost.BILLGROUP); // 0
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
  }, [TotalSummaryNaqdy, TotalSummaryNotNaqdy, PostedinvoicesList, calac]);

  useEffect(() => {
    getPostedinvoicesList();
  }, [getPostedinvoicesList]);

  return {
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
