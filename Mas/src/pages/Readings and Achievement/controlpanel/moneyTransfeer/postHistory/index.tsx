/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/refs */
import { Typography, Button, Autocomplete, TextField } from "@mui/material";

import type { CollectionDestributionItm } from "../types";
import { useEffect, useMemo, useRef, useState } from "react";
import usePostHistory from "./usePostHistory";
import type {
  EMPS,
  IColumn,
} from "../../../../../componenet/shared/dataGrid/types";
import MasPageHeader from "../../../../../componenet/header/MasPageHeader";
import MasDataGrid from "../../../../../componenet/shared/dataGrid";
import SharedDialog from "../../../../../componenet/shared/SharedDialog";
import MoneyTransferMainTable from "../MoneyTransferMainTable";
import type { STATIONS, STATMDEPOSIT } from "../../types";
import Handlebars from "handlebars";
import { useGetHafzaTemplate } from "../useMoneyTransfeerApi";
import usePulledHistory from "../../operations/pulledHistory/usePulledHistory";

export default function PostHistory() {
  const { useGetAllStationsApi } = usePulledHistory();
  const { data: AllStations } = useGetAllStationsApi();
  const { data: hafzaTemplate } = useGetHafzaTemplate(true);
  const [tableData, setTableData] = useState<STATMDEPOSIT[]>([]);
  const Template = Handlebars.compile(hafzaTemplate || "");
  const postedDetails = useRef<CollectionDestributionItm[]>([]);
  const depositNum = useRef<number | undefined>(0);
  const deleveryDate = useRef<string | undefined>("");
  const [displayEmpData, setDisplayEmpData] = useState({
    emp: {} as EMPS,
    depositList: [] as STATMDEPOSIT[],
  });
  const {
    selectedEmp,
    DepositList,
    openModal,
    PostedinvoicesList,
    sumTotals,
    sumTotalsNotNaqdy,
    arrSumTotalSummaryAll,
    arrSumTotalSummaryNaqdyRef,
    arrSumTotalSummaryNotNaqdyRef,
    showDetails,
    invoicesListByBillGr,
    postedReq,
    getPostedinvoicesList,
    getOption,
    handleSetShowDetails,
    setOpenModal,
    setPostedReq,
    setFinalReq,
    setSelectedEmp,
    setSelectedStation,
    filteredEmps,
    isHeadQuarter,
  } = usePostHistory();
  useEffect(() => {
    setTableData(DepositList || []);
  }, [DepositList]);
  useEffect(() => {
    setDisplayEmpData({
      emp: selectedEmp || ({} as EMPS),
      depositList: DepositList || [],
    });
  }, [selectedEmp, DepositList]);
  const colList = useMemo(() => {
    const tempColList: IColumn[] = [
      {
        dataField: "RECEIPT_NO",
        caption: "رقم القسيمة(الايصال)",
        allowEditing: false,
      },
      {
        dataField: "STAMP_DATE",
        caption: "التاريخ",
        allowEditing: false,
        calculateCellValue: (data) =>
          new Date(data.STAMP_DATE).toLocaleDateString(),
      },
      {
        dataField: "BILNG_DATE",
        caption: "الدورة",
        allowEditing: false,
      },
      {
        dataField: "DELIVERY_DATE",
        caption: "تاريخ التوريد",
        allowEditing: false,
        calculateCellValue: (data) =>
          new Date(data.DELIVERY_DATE).toLocaleDateString(),
      },
      {
        dataField: "AMOUNT",
        caption: "المبلغ",
        allowEditing: false,
      },
      {
        dataField: "COUNT",
        caption: "العدد",
        allowEditing: false,
      },
      {
        dataField: "DEPOSIT_ID",
        caption: "كود التوريد",
        allowEditing: false,
      },
      {
        dataField: "Actions",
        caption: "الاجراءات",
        allowEditing: false,
        fixed: false,
        cellRender: (row) => (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              getPostedinvoicesList();
              depositNum.current = row.data.DEPOSIT_ID;
              deleveryDate.current = row.data.DELIVERY_DATE;
              setPostedReq({
                empid: selectedEmp?.ID as number,
                depositId: row.data.DEPOSIT_ID,
              });
              setOpenModal(true);
            }}
          >
            تفاصيل
          </Button>
        ),
      },
    ];
    return tempColList;
  }, [getPostedinvoicesList, selectedEmp?.ID, setOpenModal, setPostedReq]);
  return (
    <>
      <MasPageHeader title="سجل التوريدات" />
      <div className="w-full rounded-md bg-white p-2 shadow-sm mt-1">
        <div
          className={`my-2 grid w-full ${
            !isHeadQuarter ? "grid-cols-1" : "grid-cols-2"
          }
          justify-items-center gap-2`}
        >
          {isHeadQuarter && (
            <div className="flex w-full flex-col" dir="rtl">
              <Typography sx={{ marginBottom: 1 }} id="BILLGROUP">
                اختر الفرع
              </Typography>
              <Autocomplete
                size="small"
                onChange={(_event, newVal) => {
                  // console.log(newVal, 'Newvals');
                  setSelectedStation(newVal || ({} as STATIONS));
                }}
                id="BILLGROUP"
                fullWidth
                sx={{
                  flexGrow: 1,
                  direction: "rtl",
                  backgroundColor: "#fcfcfc",
                  "& .MuiOutlinedInput-root": {
                    height: 30,
                    fontSize: "0.8rem",
                    paddingRight: "9px !important",
                  },
                  "& .MuiAutocomplete-endAdornment": {
                    right: "auto  !important",
                    left: 8,
                  },
                }}
                slotProps={{
                  paper: {
                    sx: {
                      direction: "rtl",
                      "& .MuiAutocomplete-option": {
                        textAlign: "right",
                        fontSize: "0.8rem",
                        fontFamily: "inherit",
                      },
                    },
                  },
                }}
                options={AllStations || []}
                getOptionLabel={(option: STATIONS) => option.DESCRIPTION || " "}
                renderOption={(props, option: STATIONS) => (
                  <li {...props} key={option.STATION_NO}>
                    {`${option?.DESCRIPTION} - ${option?.STATION_NO}`}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField {...params} id="BILLGROUP" />
                )}
              />
            </div>
          )}
          {Object.keys(selectedEmp).length > 0 ? (
            <div className="flex w-full flex-col" dir="rtl">
              <Typography sx={{ marginBottom: 1 }} id="Emps">
                اختر المحصل
              </Typography>
              <Autocomplete
                id="Emps"
                fullWidth
                size="small"
                defaultValue={selectedEmp}
                onChange={(_event, newVal) => {
                  if (newVal) {
                    console.log("hiiiiiiiiiii", newVal);
                    setSelectedEmp(newVal);
                    setFinalReq(newVal?.ID || 0);
                  }
                  handleSetShowDetails(false);
                }}
                options={filteredEmps}
                isOptionEqualToValue={(option, value) => option.ID === value.ID}
                getOptionLabel={getOption}
                renderOption={(props, option: EMPS) => (
                  <li {...props} key={option.ID}>
                    {`${option?.FULL_NAME} - ${option?.ID}`}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField required {...params} id="Emps" />
                )}
                sx={{
                  flexGrow: 1,
                  direction: "rtl",
                  backgroundColor: "#fcfcfc",
                  "& .MuiOutlinedInput-root": {
                    height: 30,
                    fontSize: "0.8rem",
                    paddingRight: "9px !important",
                  },
                  "& .MuiAutocomplete-endAdornment": {
                    right: "auto  !important",
                    left: 8,
                  },
                }}
                slotProps={{
                  paper: {
                    sx: {
                      direction: "rtl",
                      "& .MuiAutocomplete-option": {
                        textAlign: "right",
                        fontSize: "0.8rem",
                        fontFamily: "inherit",
                      },
                    },
                  },
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-4 w-full rounded-md bg-white shadow-sm" dir="rtl">
        <div className="grid grid-cols-4 rounded-t-md bg-primary-lighter p-4">
          <div className=" flex fex-row justify-center items-center rounded-md bg-primary-main p-1 text-center ">
            <Typography
              className="text-center text-white break-words"
              sx={{ fontSize: "1.2rem" }}
            >
              {`اسم المحصل: ${displayEmpData.emp?.FULL_NAME || ""}`}
            </Typography>
          </div>
          <div className=" flex fex-row justify-center items-center mx-2 rounded-md bg-primary-main p-1 text-center ">
            <Typography
              className="text-center text-white"
              sx={{ fontSize: "1.2rem" }}
            >
              {`كود المحصل: ${displayEmpData.emp?.ID || ""}`}
            </Typography>
          </div>
          <div className=" flex fex-row justify-center items-center mx-2 rounded-md bg-primary-main p-1 text-center ">
            <Typography
              className="text-center text-white"
              sx={{ fontSize: "1.2rem" }}
            >
              {` الفرع: ${
                AllStations?.find(
                  (station) =>
                    station?.STATION_NO ===
                    Number(displayEmpData.emp?.BRANCH_ID),
                )?.DESCRIPTION || ""
              }`}
            </Typography>
          </div>
          <div className=" flex fex-row justify-center items-center mx-2 rounded-md bg-primary-main p-1 text-center ">
            <Typography
              className="text-center text-white"
              sx={{ fontSize: "1.2rem" }}
            >
              {`تاريخ التوريد: ${
                displayEmpData.depositList.length > 0 &&
                displayEmpData.depositList[0]?.DELIVERY_DATE
                  ? new Date(
                      displayEmpData.depositList[0].DELIVERY_DATE,
                    ).toLocaleDateString()
                  : ""
              }`}
            </Typography>
          </div>
        </div>
        <div className="mx-6 mt-6 ">
          <MasDataGrid
            printPdf
            className="tabelSharing"
            showBorders
            columns={colList}
            dataSource={tableData}
          />
        </div>
      </div>
      <SharedDialog
        maxWidth="lg"
        title="حافظة توريد مسجلة"
        onClose={() => {
          setOpenModal(false);
          handleSetShowDetails(false);
        }}
        open={openModal}
      >
        <MoneyTransferMainTable
          basicTableShow
          basicTableInvoicesList={Array.from(
            invoicesListByBillGr.current.values(),
          )}
          naqdySummary={
            arrSumTotalSummaryNaqdyRef.current.length > 2
              ? arrSumTotalSummaryNaqdyRef.current
              : arrSumTotalSummaryNaqdyRef.current.filter(
                  (obj) => obj.BILLGROUP !== "",
                )
          }
          notNaqdySummary={
            arrSumTotalSummaryNotNaqdyRef.current.length > 2
              ? arrSumTotalSummaryNotNaqdyRef.current
              : arrSumTotalSummaryNotNaqdyRef.current.filter(
                  (obj) => obj.BILLGROUP !== "",
                )
          }
          totalAllSummary={arrSumTotalSummaryAll.current}
          handleGetDetails={(data) => {
            postedDetails.current = data;
          }}
          handleShowDetails={handleSetShowDetails}
          showDetails={showDetails}
          unPostedinvoicesList={PostedinvoicesList || []}
          empId={selectedEmp?.ID}
          depositNum={depositNum.current}
          deliveryDate={
            DepositList?.find(
              (el: { DEPOSIT_ID: any }) =>
                el.DEPOSIT_ID === postedReq.depositId,
            )?.DELIVERY_DATE || deleveryDate.current
          }
        />
        <div>
          <div
            className="hidden print:block"
            dangerouslySetInnerHTML={{
              __html: Template(
                PostedinvoicesList && {
                  ...PostedinvoicesList[0],
                  includeHeader: true,
                  unPostedinvoicesList: PostedinvoicesList.filter(
                    (invoice) =>
                      invoice.PAYMENT_METHOD === "CASH" ||
                      invoice.PAYMENT_METHOD === "نقدي",
                  ),
                  sumTotals,
                  sumTotalsNotNaqdy,
                  notNaqdyObj: PostedinvoicesList.filter(
                    (notNaqdyInvoice) =>
                      notNaqdyInvoice.PAYMENT_METHOD !== "CASH" &&
                      notNaqdyInvoice.PAYMENT_METHOD !== "نقدي",
                  )[0],
                  notNaqdy: PostedinvoicesList.filter(
                    (invoice) =>
                      invoice.PAYMENT_METHOD !== "CASH" &&
                      invoice.PAYMENT_METHOD !== "نقدي",
                  ),
                  naqdySummary:
                    arrSumTotalSummaryNaqdyRef.current.length > 2
                      ? arrSumTotalSummaryNaqdyRef.current
                      : arrSumTotalSummaryNaqdyRef.current.filter(
                          (obj) => obj.BILLGROUP !== "",
                        ),
                  notNaqdySummary:
                    arrSumTotalSummaryNotNaqdyRef.current.length > 2
                      ? arrSumTotalSummaryNotNaqdyRef.current
                      : arrSumTotalSummaryNotNaqdyRef.current.filter(
                          (obj) => obj.BILLGROUP !== "",
                        ),
                  totalAllSummary: arrSumTotalSummaryAll.current,
                  isDetails: showDetails,
                  unPostedDetails: postedDetails.current,
                  printBasic: true,
                  listGroupedByBillGroupNaqdy: Array.from(
                    invoicesListByBillGr.current.values(),
                  ).filter(
                    (invoice) =>
                      invoice.PAYMENT_METHOD === "CASH" ||
                      invoice.PAYMENT_METHOD === "نقدي",
                  ),
                  listGroupedByBillGroupNotNaqdy: Array.from(
                    invoicesListByBillGr.current.values(),
                  ).filter(
                    (invoice) =>
                      invoice.PAYMENT_METHOD !== "CASH" &&
                      invoice.PAYMENT_METHOD !== "نقدي",
                  ),
                },
              ),
            }}
          />
        </div>
      </SharedDialog>
    </>
  );
}
