/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/refs */
import {
  Typography,
  Button,
  Autocomplete,
  TextField,
  InputLabel,
} from "@mui/material";
import {
  useGetAllStationsApi,
  useGetHafzaTemplate,
  useGetIsHeadQuarterApi,
} from "../../api/useControlApi";
import type { CollectionDestributionItm } from "../types";
import { useMemo, useRef } from "react";
import usePostHistory from "./usePostHistory";
import type {
  EMPS,
  IColumn,
} from "../../../../../componenet/shared/dataGrid/types";
import MasPageHeader from "../../../../../componenet/header/MasPageHeader";
import MasDataGrid from "../../../../../componenet/shared/dataGrid";
import SharedDialog from "../../../../../componenet/shared/SharedDialog";
import MoneyTransferMainTable from "../MoneyTransferMainTable";
import type { STATIONS } from "../../types";
import Handlebars from "handlebars";

export default function PostHistory() {
  const { data: AllStations } = useGetAllStationsApi();
  const { data: isHeadQuarter } = useGetIsHeadQuarterApi();
  const { data: hafzaTemplate } = useGetHafzaTemplate(true);

  const Template = Handlebars.compile(hafzaTemplate || "");
  // const { id } = useParams();
  const postedDetails = useRef<CollectionDestributionItm[]>([]);

  const depositNum = useRef<number | undefined>(0);
  const deleveryDate = useRef<string | undefined>("");
  const {
    selectedEmp,
    selectedStation,
    DepositList,
    AllEmps,
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
  } = usePostHistory();
  // const [, setHack] = useState<string>("");
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
        caption: "الاجراءات",
        allowEditing: false,
        fixed: true,
        cellRender: (row) => (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              getPostedinvoicesList();
              depositNum.current = row.data.DEPOSIT_ID;
              deleveryDate.current = row.data.DELIVERY_DATE;
              setPostedReq({
                empid: selectedEmp?.id as number,
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
  }, [getPostedinvoicesList, selectedEmp?.id, setOpenModal, setPostedReq]);
  // console.log(DepositList, 'DepositList');

  return (
    <>
      <MasPageHeader title="سجل التوريدات" />
      <div className="w-full rounded-md bg-white p-2 shadow-sm">
        <div
          className={`my-2 grid w-full ${
            !isHeadQuarter ? "grid-cols-1" : "grid-cols-2"
          }
          justify-items-center gap-2`}
        >
          {isHeadQuarter && (
            <div className="flex w-full flex-col">
              <InputLabel htmlFor="BILLGROUP" sx={{ marginBottom: 1 }}>
                اختر الفرع
              </InputLabel>
              <Autocomplete
                onChange={(_event, newVal) => {
                  // console.log(newVal, 'Newvals');
                  setSelectedStation(newVal || ({} as STATIONS));
                }}
                id="BILLGROUP"
                fullWidth
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
          <div className="flex w-full flex-col">
            <InputLabel htmlFor="Emps" sx={{ marginBottom: 1 }}>
              اختر المحصل
            </InputLabel>
            <Autocomplete
              value={selectedEmp}
              onChange={(_event, newVal) => {
                setSelectedEmp(newVal || {});
                setFinalReq(newVal?.id || 0);
              }}
              id="Emps"
              // defaultValue={
              //   (id && AllEmps?.find((emp) => emp?.id === Number(id))) ||
              //   ({} as EMPS)
              // }
              fullWidth
              options={
                selectedStation?.IS_HEADQUARTERS && isHeadQuarter
                  ? AllEmps || []
                  : AllEmps?.filter(
                      (emp: { branchId: any }) =>
                        emp?.branchId ===
                        selectedStation?.STATION_NO?.toString(),
                    ) || []
              }
              getOptionLabel={getOption}
              renderOption={(props, option: EMPS) => (
                <li {...props} key={option.empId}>
                  {`${option?.fullName} - ${option?.id}`}
                </li>
              )}
              renderInput={(params) => (
                <TextField required {...params} id="Emps" />
              )}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 w-full rounded-md bg-white shadow-sm">
        <div className="grid grid-cols-4 rounded-t-md bg-primary-lighter p-4">
          <div className="rounded-md bg-primary-main p-2">
            <Typography variant="h5" className="text-center text-white">
              {`اسم المحصل: ${selectedEmp?.fullName || ""}`}
            </Typography>
          </div>
          <div className="mx-2 rounded-md bg-primary-main p-2">
            <Typography variant="h5" className="text-center text-white">
              {`كود المحصل: ${selectedEmp?.id || ""}`}
            </Typography>
          </div>
          <div className="mx-2 rounded-md bg-primary-main p-2">
            <Typography variant="h5" className="text-center text-white">
              {` الفرع: ${
                AllStations?.find(
                  (station) =>
                    station?.STATION_NO === Number(selectedEmp?.branchId),
                )?.DESCRIPTION || ""
              }`}
            </Typography>
          </div>
          <div className="mx-2 rounded-md bg-primary-main p-2">
            <Typography variant="h5" className="text-center text-white">
              {` تاريخ التوريد: ${
                DepositList && DepositList?.length > 0
                  ? new Date(DepositList[0].DELIVERY_DATE).toLocaleDateString()
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
            dataSource={DepositList || []}
          />
        </div>
      </div>
      <SharedDialog
        maxWidth="lg"
        // width="lg"
        title="حافظة توريد مسجلة"
        onClose={() => {
          setOpenModal(false);
          handleSetShowDetails(false);
        }}
        // onSave={() => setOpenModal(false)}
        open={openModal}
        // showPrint
        // handleExport={() => {
        //   setHack(Date.now.toString());
        //   setTimeout(() => {
        //     console.log("sssss");
        //     window.print();
        //   }, 300);
        // }}
        // actions
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
          empId={selectedEmp?.id}
          // empName={selectedEmp?.fullName || ''}
          // stationName={
          //   AllStations?.find(
          //     (station) => station?.stationNo === Number(selectedEmp?.branchId),
          //   )?.description || ' '
          // }
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
                    (invoice: { PAYMENT_METHOD: string }) =>
                      invoice.PAYMENT_METHOD === "CASH" ||
                      invoice.PAYMENT_METHOD === "نقدي",
                  ),
                  sumTotals,
                  sumTotalsNotNaqdy,
                  notNaqdyObj: PostedinvoicesList.filter(
                    (notNaqdyInvoice: { PAYMENT_METHOD: string }) =>
                      notNaqdyInvoice.PAYMENT_METHOD !== "CASH" &&
                      notNaqdyInvoice.PAYMENT_METHOD !== "نقدي",
                  )[0],
                  notNaqdy: PostedinvoicesList.filter(
                    (invoice: { PAYMENT_METHOD: string }) =>
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

                  // for basicTable
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
                  // totalNaqdySummary: arrSumTotalSummaryNaqdyRef.current.pop(),
                },
              ),
            }}
          />
          ,
          {/* document.getElementById('printModel') || document.body,
          )} */}
        </div>
      </SharedDialog>
    </>
  );
}
