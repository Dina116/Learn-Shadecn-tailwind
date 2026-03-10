/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import type { CollectionDestributionItm, PostReq } from "./types";
import type { STATIONS } from "../types";
import type { EMPS } from "../../../../componenet/shared/dataGrid/types";
import {
  useGetCurrentStationsApi,
  useGetNewReceiptNoApi,
  useGetUnPostedApi,
  usePostApi,
} from "../api/useControlApi";

export interface IreqProp {
  empid: number;
  depositId?: number | undefined;
}

interface CollectionDestributionItmEx extends CollectionDestributionItm {
  balanceTotal?: number | undefined;
  underBalance?: number | undefined;
}

export type TotalSummary = Pick<
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

export default function useMoneyTransfer() {
  const queryClient = useQueryClient();
  const [disableReceiptNo, setDisableReceiptNo] = useState<boolean>(false);
  const [basicTableShow, setBasicTableShow] = useState<boolean>(true);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [selectedEmp, setSelectedEmp] = useState<EMPS>();
  const [sumTotals, setSumTotals] = useState<CollectionDestributionItmEx>({});
  const [sumTotalsNotNaqdy, setSumTotalsNotNaqdy] =
    useState<CollectionDestributionItmEx>({});
  const [selectedStation, setSelectedStation] = useState<STATIONS>(
    {} as STATIONS,
  );
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [finalReq, setFinalReq] = useState<IreqProp>({} as IreqProp);
  const modalType = useRef<"without" | "with">("without");

  const arrSumTotalSummaryNaqdyRef = useRef<TotalSummary[]>([]);
  const arrSumTotalSummaryAll = useRef<TotalSummary>({});
  const arrSumTotalSummaryNotNaqdyRef = useRef<TotalSummary[]>([]);
  const mapSummaryNaqdy = useRef<Map<string, TotalSummary>>(new Map());
  const mapSummaryNotNaqdy = useRef<Map<string, TotalSummary>>(new Map());
  const invoicesListByBillGr = useRef<Map<string, CollectionDestributionItm>>(
    new Map(),
  );

  const [, setKeyRender] = useState<Date>(new Date());

  const { data: Station } = useGetCurrentStationsApi();
  const { data: unPostedinvoicesList } = useGetUnPostedApi(finalReq);
  const { mutate: mutatePostCollection, isLoading: postLoading } = usePostApi({
    onSuccess: async () => {
      await queryClient.invalidateQueries(["unPostKey", finalReq]);
      setOpenModal(false);
      toast.success("تم توريد الفواتير ");
    },
    onError: (err) => {
      setOpenModal(true);
      toast.error(err?.response?.data?.ExceptionMessage);
    },
  });
  const { mutate: getNewReceiptNoMutate, data: newRecNumber } =
    useGetNewReceiptNoApi({
      onSuccess: () => {
        setDisableReceiptNo(false);
      },
      onError: () => {
        setDisableReceiptNo(true);
      },
    });

  const TotalSummaryNaqdy = mapSummaryNaqdy.current;
  const TotalSummaryNotNaqdy = mapSummaryNotNaqdy.current;
  const onsubmit = async (data: PostReq) => {
    mutatePostCollection({
      ...data,
      postToBilling: modalType.current === "with",
      ReciptNo:
        data?.ReciptNo === undefined
          ? newRecNumber?.toString() || ""
          : data?.ReciptNo || "",
      empid: selectedEmp?.id,
    });
  };
  const handleSetShowDetails = (st: boolean) => {
    setShowDetails(st);
  };
  useMemo(() => {
    setSumTotals({});
    setSumTotalsNotNaqdy({});
    // get Totals for Cash List
    unPostedinvoicesList?.forEach((item) => {
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
    // unPostedinvoicesList
    //   ?.filter((invoice) => invoice.PAYMENT_METHOD !== 'CASH')
    //   .forEach((item) => {
    //     setSumTotalsNotNaqdy((prev) => ({
    //       COLLECTED_COUNT:
    //         (prev?.COLLECTED_COUNT || 0) + (item?.COLLECTED_COUNT || 0),
    //       COLLECTED_AMOUNT:
    //         (prev?.COLLECTED_AMOUNT || 0) + (item?.COLLECTED_AMOUNT || 0),
    //       WATER_AMT: (prev?.WATER_AMT || 0) + (item?.WATER_AMT || 0),
    //       SEWER_AMT: (prev?.SEWER_AMT || 0) + (item?.SEWER_AMT || 0),
    //       BASIC_AMT: (prev?.BASIC_AMT || 0) + (item?.BASIC_AMT || 0),
    //       INSTALLS_AMT: (prev?.INSTALLS_AMT || 0) + (item?.INSTALLS_AMT || 0),
    //       ROUND_AMT: (prev?.ROUND_AMT || 0) + (item?.ROUND_AMT || 0),
    //       OTHER_AMT1: (prev?.OTHER_AMT1 || 0) + (item?.OTHER_AMT1 || 0),
    //       TANZEEM_AMT: (prev?.TANZEEM_AMT || 0) + (item?.TANZEEM_AMT || 0),
    //       CONN_INSTALLS_AMT:
    //         (prev?.CONN_INSTALLS_AMT || 0) + (item?.CONN_INSTALLS_AMT || 0),
    //       METER_INSTALLS_AMT:
    //         (prev?.METER_INSTALLS_AMT || 0) + (item?.METER_INSTALLS_AMT || 0),
    //       METER_MAN_AMT:
    //         (prev?.METER_MAN_AMT || 0) + (item?.METER_MAN_AMT || 0),
    //       CONTRACT_AMT: (prev?.CONTRACT_AMT || 0) + (item?.CONTRACT_AMT || 0),
    //       TAX_AMT: (prev?.TAX_AMT || 0) + (item?.TAX_AMT || 0),
    //       CUR_PAYMNTS: (prev?.CUR_PAYMNTS || 0) + (item?.CUR_PAYMNTS || 0),
    //       DBT_AMT: (prev?.DBT_AMT || 0) + (item?.DBT_AMT || 0),
    //       CRDT_AMT: (prev?.CRDT_AMT || 0) + (item?.CRDT_AMT || 0),
    //       AGREEM_AMT: (prev?.AGREEM_AMT || 0) + (item?.AGREEM_AMT || 0),
    //       OTHER_AMT: (prev?.OTHER_AMT || 0) + (item?.OTHER_AMT || 0),
    //       OTHER_AMT2: (prev?.OTHER_AMT2 || 0) + (item?.OTHER_AMT2 || 0),
    //       OTHER_AMT3: (prev?.OTHER_AMT3 || 0) + (item?.OTHER_AMT3 || 0),
    //       OTHER_AMT4: (prev?.OTHER_AMT4 || 0) + (item?.OTHER_AMT4 || 0),
    //       OTHER_AMT5: (prev?.OTHER_AMT5 || 0) + (item?.OTHER_AMT5 || 0),
    //       GOV_AMT: (prev?.GOV_AMT || 0) + (item?.GOV_AMT || 0),
    //       UNI_AMT: (prev?.UNI_AMT || 0) + (item?.UNI_AMT || 0),
    //       CONN_AMT: (prev?.CONN_AMT || 0) + (item?.CONN_AMT || 0),
    //       COMPUTER_AMT: (prev?.COMPUTER_AMT || 0) + (item?.COMPUTER_AMT || 0),
    //       TAKAFUL_AMT: (prev?.TAKAFUL_AMT || 0) + (item?.TAKAFUL_AMT || 0),
    //       CLEAN_AMT: (prev?.CLEAN_AMT || 0) + (item?.CLEAN_AMT || 0),
    //       OP_BLNCE: (prev?.OP_BLNCE || 0) + (item?.OP_BLNCE || 0),
    //       DISCOUNT: (prev?.DISCOUNT || 0) + (item?.DISCOUNT || 0),
    //       RECEIPT_CHARGE1:
    //         (prev?.RECEIPT_CHARGE1 || 0) + (item?.RECEIPT_CHARGE1 || 0),
    //       RECEIPT_CHARGE2:
    //         (prev?.RECEIPT_CHARGE2 || 0) + (item?.RECEIPT_CHARGE2 || 0),
    //       RECEIPT_CHARGE3:
    //         (prev?.RECEIPT_CHARGE3 || 0) + (item?.RECEIPT_CHARGE3 || 0),
    //       underBalance:
    //         item.COLLECTION_TYPE === 'PARTIAL'
    //           ? (prev.underBalance || 0) + (item.COLLECTED_AMOUNT || 0)
    //           : prev.underBalance || 0,
    //     }));
    //   });
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
  }, [unPostedinvoicesList]);

  useEffect(() => {
    setSelectedStation(Station || ({} as STATIONS));
  }, [Station]);
  // Takes object and calculate them into previous
  const calac = (newData: CollectionDestributionItm) => {
    const nData = { ...newData };
    const obj: CollectionDestributionItm =
      invoicesListByBillGr.current.get(
        // here i want the key to be contained both of billgroup and payment method
        `${newData.BILLGROUP}-${newData.PAYMENT_METHOD}`,
      ) || {};
    // console.log(obj, 'OOOBH');
    Object.entries(nData).forEach((vals) => {
      const key = vals[0];
      const val = vals[1];
      obj.BILLGROUP = newData.BILLGROUP;
      obj.PAYMENT_METHOD = newData.PAYMENT_METHOD;
      if (typeof val === "number") {
        const valass =
          // @ts-ignore
          (obj[key as keyof CollectionDestributionItm] || 0) + val;
        // @ts-ignore
        obj[key as keyof CollectionDestributionItm] = valass;
      }
    });
    invoicesListByBillGr.current.set(
      `${newData.BILLGROUP}-${newData.PAYMENT_METHOD}`,
      obj,
    );
    setBasicTableShow(true);
    // console.log(invoicesListByBillGr.current, 'objsss');
  };

  useEffect(() => {
    invoicesListByBillGr.current.clear();
    TotalSummaryNaqdy.clear();
    TotalSummaryNotNaqdy.clear();
    if ((unPostedinvoicesList || [])?.length > 0) {
      unPostedinvoicesList?.forEach((unpost) => {
        calac(unpost);
        if (
          unpost.PAYMENT_METHOD === "CASH" ||
          unpost.PAYMENT_METHOD === "نقدي"
        ) {
          if (unpost?.BILLGROUP) {
            const Obj1: TotalSummary = {};
            const prevBRVals = TotalSummaryNaqdy.get(
              `${unpost.BILLGROUP}/${unpost?.PAYMENT_METHOD_ID}`,
            ); // 0
            // PAYMENT_METHOD
            Obj1.PAYMENT_METHOD = unpost?.PAYMENT_METHOD;
            // COLLECTED_COUNT
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
            TotalSummaryNaqdy.set(
              `${unpost.BILLGROUP}/${unpost?.PAYMENT_METHOD_ID}`,
              Obj1,
            );
          }
        } else if (
          (unpost?.BILLGROUP && unpost.PAYMENT_METHOD !== "CASH") ||
          (unpost?.BILLGROUP && unpost.PAYMENT_METHOD === "غير نقدي")
        ) {
          const Obj1: TotalSummary = {};
          const prevBRVals = TotalSummaryNotNaqdy.get(
            `${unpost?.BILLGROUP}/${unpost?.PAYMENT_METHOD_ID}`,
          ); // 0
          // PAYMENT_METHOD
          Obj1.PAYMENT_METHOD = unpost?.PAYMENT_METHOD;
          // COLLECTED_COUNT
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
          TotalSummaryNotNaqdy.set(
            `${unpost.BILLGROUP}/${unpost?.PAYMENT_METHOD_ID}`,
            Obj1,
          );
        }
      });
      setKeyRender(new Date());
    }
    const arrSumTotalSummaryNaqdy = Array.from(TotalSummaryNaqdy.values());
    const arrSumTotalSummaryNotNaqdy = Array.from(
      TotalSummaryNotNaqdy.values(),
    );
    // console.log('arrSumTotalSummaryNaqdy', arrSumTotalSummaryNaqdy);
    // console.log('arrSumTotalSummaryNotNaqdy', arrSumTotalSummaryNotNaqdy);
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
  }, [TotalSummaryNaqdy, TotalSummaryNotNaqdy, unPostedinvoicesList]);

  return {
    setSelectedEmp,
    setFinalReq,
    setOpenModal,
    setSelectedStation,
    mutatePostCollection,
    handleSetShowDetails,
    setDisableReceiptNo,
    onsubmit,
    getNewReceiptNoMutate,
    setBasicTableShow,
    basicTableShow,
    invoicesListByBillGr,
    modalType,
    showDetails,
    selectedStation,
    openModal,
    unPostedinvoicesList,
    selectedEmp,
    Station,
    sumTotals,
    sumTotalsNotNaqdy,
    arrSumTotalSummaryNaqdyRef,
    arrSumTotalSummaryNotNaqdyRef,
    arrSumTotalSummaryAll,
    disableReceiptNo,
    postLoading,
  };
}
