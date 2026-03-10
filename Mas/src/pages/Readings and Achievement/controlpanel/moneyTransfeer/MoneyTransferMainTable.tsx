import { useEffect, useMemo, useState } from "react";
import type { CollectionDestributionItm } from "./types";
import type {
  IColumn,
  IunPostedDetailsReq,
} from "../../../../componenet/shared/dataGrid/types";
import MasDataGrid from "../../../../componenet/shared/dataGrid";
import { Button, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import type { TotalSummary } from "./useMoneyTransfer";
import { useGetUnPostedDetails } from "../api/useControlApi";
import { getFieldName } from "../../../../utils/common";
import SummaryTable from "./SummaryTable";

interface Iprops {
  basicTableInvoicesList?: CollectionDestributionItm[];
  unPostedinvoicesList: CollectionDestributionItm[];
  // empName?: string;
  // stationName?: string;
  empId?: number;
  depositNum?: number;
  handleShowDetails: (st: boolean) => void;
  handleGetDetails: (data: CollectionDestributionItm[]) => void;
  showDetails: boolean;
  naqdySummary: TotalSummary[];
  notNaqdySummary: TotalSummary[];
  totalAllSummary: TotalSummary;
  basicTableShow: boolean;
  deliveryDate?: string;
}
// eslint-disable-next-line max-lines-per-function
export default function MoneyTransferMainTable({
  unPostedinvoicesList,
  empId,
  depositNum,
  naqdySummary,
  notNaqdySummary,
  totalAllSummary,
  showDetails,
  basicTableInvoicesList,
  handleShowDetails,
  handleGetDetails,
  basicTableShow,
  deliveryDate,
}: Iprops) {
  const [unPostedDetailsReq, setUnpostedDetailsReq] =
    useState<IunPostedDetailsReq>();

  const { data: UnPostedList } = useGetUnPostedDetails(
    unPostedDetailsReq || ({} as IunPostedDetailsReq),
  );

  console.log(unPostedinvoicesList, "unPostedinvoicesList");

  const colList = useMemo(() => {
    const tempColList: IColumn[] = [
      {
        dataField: "Count",
        caption: "م",
        allowEditing: false,
        cellRender: (row) => row.rowIndex,
      },
      {
        dataField: "PAYMENT_METHOD",
        caption: "طريقة الدفع",
        allowEditing: false,
        groupIndex: 0,
      },
      {
        dataField: "BILLGROUP",
        caption: "المجموعة",
        allowEditing: false,
      },
      {
        dataField: "deliveryDate",
        caption: "تاريخ التوريد",
        allowEditing: false,
        calculateCellValue: () =>
          deliveryDate ? new Date(deliveryDate).toLocaleDateString() : "",
      },
      {
        dataField: "BOOK_NO",
        caption: "السجل",
        allowEditing: false,
      },

      {
        // dataField: "",
        caption: "المسار",
        allowEditing: false,
        hasChildren: true,
        child: [
          { dataField: "WALK_NO", caption: "م", allowEditing: false },
          { dataField: "DESCRIPTION", caption: "الاسم", allowEditing: false },
        ],
      },
      {
        dataField: "BILNG_DATE",
        caption: "الدورة",
        allowEditing: false,
        width: 120,
      },
      {
        dataField: "COLLECTED_COUNT",
        caption: "العدد",
        allowEditing: false,
      },
      {
        dataField: "WATER_AMT",
        caption: "مياه",
        allowEditing: false,
        calculateCellValue: (data) => Number(data.WATER_AMT || 0).toFixed(2),
      },
      {
        dataField: "SEWER_AMT",
        caption: "صرف",
        allowEditing: false,
        calculateCellValue: (data) => Number(data.SEWER_AMT || 0).toFixed(2),
      },
      {
        dataField: "BASIC_AMT",
        caption: "استدامة",
        allowEditing: false,
        calculateCellValue: (data) =>
          Number(data.BASIC_AMT || 0).toFixed(2) || 0,
      },
      {
        dataField: "INSTALLS_AMT",
        caption: "اقساط",
        allowEditing: false,
        calculateCellValue: (data) =>
          Number(data.INSTALLS_AMT || 0).toFixed(2) || 0,
      },
      {
        dataField: "ROUND_AMT",
        caption: "فرق التقريب",
        allowEditing: false,
        calculateCellValue: (data) => Number(data.ROUND_AMT || 0).toFixed(3),
      },
      {
        dataField: "OTHER_AMT1",
        caption: "نظافة",
        allowEditing: false,
        calculateCellValue: (data) => Number(data.OTHER_AMT1 || 0).toFixed(2),
      },
      {
        dataField: "TANZEEM_AMT",
        caption: "تنظيمي",
        allowEditing: false,
        calculateCellValue: (data) => Number(data.TANZEEM_AMT || 0).toFixed(2),
      },
      {
        dataField: "CONN_INSTALLS_AMT",
        caption: "ق توصيلة",
        allowEditing: false,
        calculateCellValue: (data) =>
          Number(data.CONN_INSTALLS_AMT || 0).toFixed(2),
      },
      {
        dataField: "METER_AMT",
        caption: "ق عداد",
        allowEditing: false,
        calculateCellValue: (data) => Number(data.METER_AMT || 0).toFixed(2),
      },
      {
        dataField: "METER_MAN_AMT",
        caption: "اصلاح عداد",
        allowEditing: false,
        calculateCellValue: (data) =>
          Number(data.METER_MAN_AMT || 0).toFixed(2),
      },
      {
        dataField: "CONTRACT_AMT",
        caption: "ض عقد",
        allowEditing: false,
        calculateCellValue: (data) => Number(data.CONTRACT_AMT || 0).toFixed(2),
      },
      {
        dataField: "TAX_AMT",
        caption: "ضريبة",
        allowEditing: false,
        calculateCellValue: (data) => Number(data.TAX_AMT || 0).toFixed(2),
      },
      {
        dataField: "calculated",
        name: "calculated",
        caption: "ارصدة سابقة",
        allowEditing: false,
        calculateCellValue: (data: CollectionDestributionItm) =>
          (
            Number(data.OP_BLNCE || 0) +
              Number(data.DBT_AMT || 0) +
              Number(data.CRDT_AMT || 0) +
              Number(data.AGREEM_AMT || 0) +
              Number(data.OTHER_AMT || 0) +
              Number(data.OTHER_AMT2 || 0) +
              Number(data.OTHER_AMT3 || 0) +
              Number(data.OTHER_AMT4 || 0) +
              Number(data.OTHER_AMT5 || 0) +
              Number(data.UNI_AMT || 0) +
              Number(data.CONN_AMT || 0) +
              Number(data.COMPUTER_AMT || 0) +
              Number(data.TAKAFUL_AMT || 0) +
              Number(data.CLEAN_AMT || 0) +
              (data.COLLECTION_AMT
                ? Number(data.COLLECTION_AMT || 0)
                : Number(data.CUR_PAYMNTS || 0)) || 0
          ).toFixed(2),
      },
      {
        dataField: "Deposit",
        caption: "تحت الحساب",
        allowEditing: false,
        calculateCellValue: (data) => {
          if (data?.COLLECTION_TYPE === "PARTIAL") {
            return Number(data?.COLLECTED_AMOUNT || 0);
          }
          return 0;
        },
      },
      {
        dataField: "COLLECTED_AMOUNT",
        caption: "اجمالي",
        allowEditing: false,
        calculateCellValue: (data) =>
          Number(data.COLLECTED_AMOUNT || 0).toFixed(2),
      },
      {
        dataField: "RECEIPT_CHARGE1",
        caption: "رسم التحصيل 1",
        allowEditing: false,
        calculateCellValue: (data) =>
          Number(data.RECEIPT_CHARGE1 || 0).toFixed(2),
      },
      {
        dataField: "RECEIPT_CHARGE2",
        caption: "رسم التحصيل 2",
        allowEditing: false,
        calculateCellValue: (data) =>
          Number(data.RECEIPT_CHARGE2 || 0).toFixed(2),
      },
      {
        dataField: "RECEIPT_CHARGE3",
        caption: "رسم التحصيل 3",
        allowEditing: false,
        calculateCellValue: (data) =>
          Number(data.RECEIPT_CHARGE3 || 0).toFixed(2),
      },
      {
        dataField: "DISCOUNT",
        caption: "الاستقطاعات",
        allowEditing: false,
        calculateCellValue: (data) => Number(data.DISCOUNT || 0).toFixed(2),
      },
      {
        dataField: "final",
        caption: "صافي الاجمالي",
        allowEditing: false,
        calculateCellValue: (data: CollectionDestributionItm) =>
          (
            Number(data.COLLECTED_AMOUNT || 0) +
            Number(data.RECEIPT_CHARGE1 || 0) +
            Number(data.RECEIPT_CHARGE2 || 0) +
            Number(data.RECEIPT_CHARGE3 || 0) -
            Number(data.DISCOUNT || 0)
          )?.toFixed(2),
      },
    ];
    return tempColList;
  }, [deliveryDate]);

  const colListN = useMemo(
    () =>
      colList.filter(
        (a) =>
          a.dataField !== "BILNG_DATE" &&
          a.caption !== "المسار" &&
          a.dataField !== "BOOK_NO",
      ),
    [colList],
  );

  const colListDetails = useMemo(() => {
    const tempColList: IColumn[] = [
      {
        dataField: "Count",
        caption: "م",
        allowEditing: false,
        cellRender: (row) => row.rowIndex + 1,
        width: 80,
      },
      {
        dataField: "PAYMENT_METHOD",
        caption: "طريقة الدفع",
        allowEditing: false,
        width: 150,
      },
      {
        dataField: "CHEQUE_NO",
        caption: "رقم الشيك",
        allowEditing: false,
      },
      {
        dataField: "CHEQ_BANK",
        caption: "مصدر الشيك",
        allowEditing: false,
      },
      {
        dataField: "KEY",
        caption: "رقم الحساب",
        allowEditing: false,
        width: 150,
      },
      {
        dataField: "BOOK_NO",
        caption: "السجل",
        allowEditing: false,
        width: 150,
      },
      {
        dataField: "SEQ_NO",
        caption: "رقم السجل",
        allowEditing: false,
        width: 150,
      },
      {
        dataField: "WALK_NO",
        caption: "المسار",
        allowEditing: false,
        width: 150,
      },
      {
        dataField: "BILLGROUP",
        caption: "المجموعة",
        allowEditing: false,
        width: 150,
      },
      {
        dataField: "BILNG_DATE",
        caption: "الدورة",
        allowEditing: false,
        width: 150,
      },
      {
        dataField: "COLLECTION_DATE",
        caption: "تاريخ التحصيل",
        allowEditing: false,
        width: 120,
        calculateCellValue: (data) =>
          data.COLLECTION_DATE
            ? new Date(data.COLLECTION_DATE).toLocaleDateString()
            : "",
      },
      {
        dataField: "",
        caption: "وقت التحصيل",
        allowEditing: false,
        width: 120,
        calculateCellValue: (data) =>
          data.COLLECTION_DATE
            ? new Date(data.COLLECTION_DATE).toLocaleTimeString()
            : "",
      },
      {
        dataField: "PAYMENT_NO",
        caption: "رقم الفاتورة",
        allowEditing: false,
        width: 220,
      },

      {
        dataField: "SURNAME",
        caption: "الاسم",
        allowEditing: false,
        width: 200,
      },
      {
        dataField: "COLLECTED_COUNT",
        caption: "عدد الفواتير",
        allowEditing: false,
        // width: 80,
      },
      {
        dataField: "COLLECTED_AMOUNT",
        caption: "المبلغ المحصل",
        allowEditing: false,
        // width: 100,
        calculateCellValue: (data) =>
          Number(data.COLLECTED_AMOUNT || 0).toFixed(2),
      },
      {
        dataField: "RECEIPT_CHARGE1",
        caption: "رسم التحصيل 1",
        allowEditing: false,
        calculateCellValue: (data) =>
          Number(data.RECEIPT_CHARGE1 || 0).toFixed(2),
      },
      {
        dataField: "RECEIPT_CHARGE2",
        caption: "رسم التحصيل 2",
        allowEditing: false,
        calculateCellValue: (data) =>
          Number(data.RECEIPT_CHARGE2 || 0).toFixed(2),
      },
      {
        dataField: "RECEIPT_CHARGE3",
        caption: "رسم التحصيل 3",
        allowEditing: false,
        calculateCellValue: (data) =>
          Number(data.RECEIPT_CHARGE3 || 0).toFixed(2),
      },
      {
        dataField: "OWNER",
        caption: "عهدة",
        allowEditing: false,
        width: 150,
      },
    ];
    return tempColList;
  }, []);

  useEffect(() => {
    if (UnPostedList) {
      handleGetDetails(UnPostedList || []);
    }
  }, [UnPostedList, handleGetDetails]);

  // console.log(basicTableShow, 'baaaaa', basicTableInvoicesList);
  console.log("🕵️‍♂️ DEBUGGING SUMMARY DATA:", {
    naqdySummary,
    notNaqdySummary,
    totalAllSummary,
  });
  return (
    <div className="mt-3 w-full rounded-md bg-white shadow-sm print:hidden">
      {/* <div
        className={`grid ${
          depositNum ? 'grid-cols-4' : 'grid-cols-3'
        } rounded-t-md bg-primary-lighter p-4`}
      >
        <div className="rounded-md bg-primary-main p-2">
          <Typography variant="h5" className="text-center text-white">
            {`اسم المحصل: ${empName || ''}`}
          </Typography>
        </div>
        <div className="mx-2 rounded-md bg-primary-main p-2">
          <Typography variant="h5" className="text-center text-white">
            {`كود المحصل: ${empId || ''}`}
          </Typography>
        </div>
        <div className="mx-2 rounded-md bg-primary-main p-2">
          <Typography variant="h5" className="text-center text-white">
            {` الفرع: ${stationName || ''}`}
          </Typography>
        </div>
        {depositNum && (
          <div className="mx-2 rounded-md bg-primary-main p-2">
            <Typography variant="h5" className="text-center text-white">
              {` رقم القسيمة: ${depositNum || ''}`}
            </Typography>
          </div>
        )}
      </div> */}

      <div className="mx-4">
        {basicTableShow ? (
          <MasDataGrid
            orientation="l"
            className="custom-modal-header"
            columnAutoWidth
            summaries={{
              groupItems: [
                {
                  column:
                    getFieldName<CollectionDestributionItm>("COLLECTED_COUNT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  alignByColumn: true,
                },
                {
                  column: getFieldName<CollectionDestributionItm>("WATER_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                {
                  column: getFieldName<CollectionDestributionItm>("SEWER_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                {
                  column: getFieldName<CollectionDestributionItm>("BASIC_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("INSTALLS_AMT"),

                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                {
                  column: getFieldName<CollectionDestributionItm>("ROUND_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                {
                  column: getFieldName<CollectionDestributionItm>("OTHER_AMT1"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("TANZEEM_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>(
                      "CONN_INSTALLS_AMT",
                    ),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                {
                  column: getFieldName<CollectionDestributionItm>("METER_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("METER_MAN_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("CONTRACT_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                {
                  column: getFieldName<CollectionDestributionItm>("TAX_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },

                {
                  column: "calculated",
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("COLLECTED_AMOUNT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("RECEIPT_CHARGE1"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("RECEIPT_CHARGE2"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("RECEIPT_CHARGE3"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                // {
                //   column:
                //     getFieldName<CollectionDestributionItm>('CUR_CHARGES'),
                //   displayFormat: '{0}',
                //   summaryType: 'sum',
                //   customizeText: (data) => Number(data.value).toFixed(2),
                //   alignByColumn: true,
                // },
                {
                  column: getFieldName<CollectionDestributionItm>("DISCOUNT"),
                  displayFormat: "اجمالي: {0} ",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
                {
                  showInColumn: "Deposit",
                  column: "Deposit",
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },

                {
                  column: "final",
                  displayFormat: " {0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                  alignByColumn: true,
                },
              ],
              totalItems: [
                {
                  column:
                    getFieldName<CollectionDestributionItm>("COLLECTED_COUNT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                },
                {
                  column: getFieldName<CollectionDestributionItm>("WATER_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: getFieldName<CollectionDestributionItm>("SEWER_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: getFieldName<CollectionDestributionItm>("BASIC_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("INSTALLS_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: getFieldName<CollectionDestributionItm>("ROUND_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: getFieldName<CollectionDestributionItm>("OTHER_AMT1"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("TANZEEM_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>(
                      "CONN_INSTALLS_AMT",
                    ),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: getFieldName<CollectionDestributionItm>("METER_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("METER_MAN_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("CONTRACT_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: getFieldName<CollectionDestributionItm>("TAX_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },

                {
                  column: "calculated",
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: getFieldName<CollectionDestributionItm>(
                    "CASH_COLLECTED_AMOUNT",
                  ),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("RECEIPT_CHARGE1"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("RECEIPT_CHARGE2"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("RECEIPT_CHARGE3"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("CUR_CHARGES"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: getFieldName<CollectionDestributionItm>("CL_BLNCE"),
                  displayFormat: "اجمالي: {0} ",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  showInColumn: "Deposit",
                  column: "Deposit",
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  showInColumn: "COLLECTED_AMOUNT",
                  column:
                    getFieldName<CollectionDestributionItm>("COLLECTED_AMOUNT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: "final",
                  displayFormat: " {0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
              ],
            }}
            showBorders
            columns={colListN}
            dataSource={basicTableInvoicesList || []}
          />
        ) : (
          <MasDataGrid
            columnAutoWidth
            className="custom-modal-header"
            summaries={{
              totalItems: [
                {
                  column:
                    getFieldName<CollectionDestributionItm>("COLLECTED_COUNT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                },
                {
                  column: getFieldName<CollectionDestributionItm>("WATER_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: getFieldName<CollectionDestributionItm>("SEWER_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: getFieldName<CollectionDestributionItm>("BASIC_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("INSTALLS_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: getFieldName<CollectionDestributionItm>("ROUND_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: getFieldName<CollectionDestributionItm>("OTHER_AMT1"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("TANZEEM_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>(
                      "CONN_INSTALLS_AMT",
                    ),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: getFieldName<CollectionDestributionItm>("METER_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("METER_MAN_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("CONTRACT_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: getFieldName<CollectionDestributionItm>("TAX_AMT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },

                {
                  column: "calculated",
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: getFieldName<CollectionDestributionItm>(
                    "CASH_COLLECTED_AMOUNT",
                  ),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("RECEIPT_CHARGE1"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("RECEIPT_CHARGE2"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("RECEIPT_CHARGE3"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column:
                    getFieldName<CollectionDestributionItm>("CUR_CHARGES"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: getFieldName<CollectionDestributionItm>("CL_BLNCE"),
                  displayFormat: "اجمالي: {0} ",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  showInColumn: "Deposit",
                  column: "Deposit",
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  showInColumn: "COLLECTED_AMOUNT",
                  column:
                    getFieldName<CollectionDestributionItm>("COLLECTED_AMOUNT"),
                  displayFormat: "{0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
                {
                  column: "final",
                  displayFormat: " {0}",
                  summaryType: "sum",
                  customizeText: (data) => Number(data.value).toFixed(2),
                },
              ],
            }}
            showBorders
            columns={colList}
            dataSource={unPostedinvoicesList || []}
          />
        )}
        <div className="my-5 mt-4 h-[0.5px] w-full bg-gray-300" />

        <SummaryTable
          naqdySummary={naqdySummary}
          notNaqdySummary={notNaqdySummary}
          totalAllSummary={totalAllSummary}
        />
        <div className="mt-6 text-center">
          <Button
            variant="contained"
            color="primary"
            sx={{ mx: 1, mb: 2 }}
            endIcon={
              showDetails ? (
                <RemoveCircleIcon color="inherit" />
              ) : (
                <AddCircleIcon color="inherit" />
              )
            }
            onClick={() => {
              setUnpostedDetailsReq({
                empid: empId,
                depositId: depositNum,
              });
              handleShowDetails(!showDetails);
            }}
          >
            <Typography variant="subtitle1" color="inherit" sx={{ mx: 1 }}>
              {`${
                showDetails
                  ? "اخفاء الحافظة التفصيلية "
                  : "اظهار الحافظة التفصيلية"
              }`}
            </Typography>
          </Button>
          {showDetails && (
            <MasDataGrid
              columnAutoWidth
              className="custom-modal-header"
              showBorders
              summaries={{
                totalItems: [
                  {
                    column: getFieldName<CollectionDestributionItm>("CL_BLNCE"),
                    displayFormat: "اجمالي: {0} ",
                    summaryType: "sum",
                    customizeText: (data) => Number(data.value).toFixed(2),
                  },
                  {
                    column:
                      getFieldName<CollectionDestributionItm>(
                        "COLLECTED_AMOUNT",
                      ),
                    displayFormat: "اجمالي: {0} ",
                    summaryType: "sum",
                    customizeText: (data) => Number(data.value).toFixed(2),
                  },
                  {
                    column:
                      getFieldName<CollectionDestributionItm>(
                        "COLLECTED_COUNT",
                      ),
                    displayFormat: "عدد: {0} ",
                    summaryType: "count",
                  },
                ],
              }}
              columns={colListDetails}
              dataSource={UnPostedList || []}
            />
          )}
        </div>
      </div>
    </div>
  );
}
