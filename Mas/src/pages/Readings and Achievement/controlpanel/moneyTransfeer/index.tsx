/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/refs */
import {
  Autocomplete,
  Button,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import MasPageHeader from "../../../../componenet/header/MasPageHeader";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import HistoryIcon from "@mui/icons-material/History";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import SharedDialog from "../../../../componenet/shared/SharedDialog";
// import { useState } from "react";
// import { Controller, useForm } from "react-hook-form";
import type { CollectionDestributionItm, PostReq } from "./types";
import MoneyTransferMainTable from "./MoneyTransferMainTable";
import useMoneyTransfer from "./useMoneyTransfer";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  useGetAllCollectorsApi,
  useGetAllStationsApi,
  useGetHafzaTemplate,
  useGetIsHeadQuarterApi,
  useGetUserProfileApi,
} from "../api/useControlApi";
import type { EMPS } from "../../../../componenet/shared/dataGrid/types";
import toast, { Toaster } from "react-hot-toast";
import type { STATIONS } from "../types";
import ReactDOM from "react-dom";
import Handlebars from "handlebars";

export default function MoneyTransfeer() {
  const {
    setSelectedEmp,
    setFinalReq,
    setOpenModal,
    setSelectedStation,
    handleSetShowDetails,
    onsubmit,
    getNewReceiptNoMutate,
    setBasicTableShow,
    basicTableShow,
    invoicesListByBillGr,
    disableReceiptNo,
    showDetails,
    selectedStation,
    unPostedinvoicesList,
    openModal,
    selectedEmp,
    sumTotals,
    sumTotalsNotNaqdy,
    arrSumTotalSummaryNaqdyRef,
    arrSumTotalSummaryNotNaqdyRef,
    arrSumTotalSummaryAll,
    modalType,
    postLoading,
  } = useMoneyTransfer();

  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<PostReq>({
    defaultValues: {},
  });
  const [, setHack] = useState<string>();
  const unPostedDetails = useRef<CollectionDestributionItm[]>([]);

  // const { data: AllUnPostedBills } = useGetUnPostedSummaryApi();
  const { data: AllEmps } = useGetAllCollectorsApi();

  const { data: userProfile } = useGetUserProfileApi();
  const { data: AllStations } = useGetAllStationsApi();
  const { data: isHeadQuarter } = useGetIsHeadQuarterApi();
  const { data: hafzaTemplate } = useGetHafzaTemplate(true);

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

  const sortEmps = (AllEmps || [])
    .sort((a, b) => (a.fullName || "").localeCompare(b.fullName || ""))
    ?.sort((a, b) => sortByPropertyExistence(a, b));

  const Template = Handlebars.compile(hafzaTemplate || "");

  const paper = {
    margin: "20px auto",
    padding: 2,
    marginRight: 0,
    position: "relative",
    width: "80%",
    border: "1px solid #ddd",
  };
  useEffect(() => {
    getNewReceiptNoMutate();
  }, [getNewReceiptNoMutate]);

  return (
    <Container
      sx={{ padding: "0 !important", margin: "0 !important", width: "100%" }}
      maxWidth="xl"
    >
      <Toaster position="bottom-center" />
      <MasPageHeader title="التوريدات" />
      <Paper sx={paper}>
        <div className="rounded-md bg-white">
          <div
            className={`my-5 grid w-full p-1 grid-cols-3
          items-end justify-items-center gap-2`}
            dir="rtl"
          >
            <div className="col-span-3 w-full text-right">
              {unPostedinvoicesList && (
                <>
                  <Button
                    variant="contained"
                    color="inherit"
                    size="small"
                    sx={{ mx: 1 }}
                    onClick={() => {
                      setOpenModal(true);
                      modalType.current = "with";
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      color="inherit"
                      sx={{ mx: 1 }}
                    >
                      تجهيز وترحيل
                    </Typography>
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="small"
                    sx={{ mx: 1 }}
                    onClick={() => {
                      setOpenModal(true);
                      modalType.current = "without";
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      color="inherit"
                      sx={{ mx: 1 }}
                    >
                      تجهيز بدون ترحيل
                    </Typography>
                  </Button>
                  <div className=" mt-4 h-[0.5px] w-full bg-gray-300" />
                </>
              )}
            </div>

            {isHeadQuarter && (
              <div className="flex w-full flex-col">
                <InputLabel htmlFor="station" sx={{ marginBottom: 1 }}>
                  اختر الفرع
                </InputLabel>
                <Autocomplete
                  onChange={(_event, newVal) => {
                    setSelectedStation(newVal || ({} as STATIONS));
                  }}
                  id="station"
                  fullWidth
                  options={AllStations || []}
                  getOptionLabel={(option: STATIONS) =>
                    option.DESCRIPTION || " "
                  }
                  renderOption={(props, option: STATIONS) => (
                    <li {...props} key={option.STATION_NO}>
                      {`${option?.DESCRIPTION} - ${option?.STATION_NO}`}
                    </li>
                  )}
                  renderInput={(params) => (
                    <TextField {...params} id="station" />
                  )}
                />
              </div>
            )}

            <div className="flex w-full flex-col">
              <InputLabel
                htmlFor="Emps"
                sx={{ marginBottom: 1, color: "black" }}
              >
                اختر المحصل
              </InputLabel>
              <Autocomplete
                onChange={(_event, newVal) => {
                  setSelectedEmp(newVal || {});
                  setFinalReq({
                    empid: newVal?.id || 0,
                  });
                  handleSetShowDetails(false);
                }}
                id="Emps"
                fullWidth
                sx={{
                  flexGrow: 1,
                  direction: "rtl",
                  backgroundColor: "#fcfcfc",
                  "& .MuiOutlinedInput-root": {
                    height: 30,
                    fontSize: "0.8rem",
                  },
                  "& .MuiAutocomplete-endAdornment": {
                    right: "auto  !important",
                    left: 8,
                  },
                }}
                options={
                  selectedStation?.IS_HEADQUARTERS && isHeadQuarter
                    ? sortEmps || []
                    : sortEmps?.filter(
                        (emp) =>
                          emp?.branchId ===
                          selectedStation?.STATION_NO?.toString(),
                      ) || []
                }
                getOptionLabel={(option) =>
                  `${option?.fullName} - ${option?.id}`
                }
                renderInput={(params) => (
                  <TextField required {...params} id="Emps" />
                )}
              />
            </div>

            <div className="flex justify-between mr-80">
              <Button
                size="small"
                variant="contained"
                color="primary"
                sx={{ mx: 1, height: 30 }}
                endIcon={<PendingActionsIcon />}
                onClick={() => {
                  if (
                    selectedEmp &&
                    Object.keys(selectedEmp || {}).length > 0
                  ) {
                    navigate(
                      `/readingAndCollection/control/MoneyTransfeer/postHistory/${selectedEmp?.id}`,
                    );
                  } else {
                    toast.error("من فضلك قم باختيار محصل اولا");
                  }
                }}
              >
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ mx: 1, fontSize: "0.80rem", whiteSpace: "nowrap" }}
                >
                  سجل التوريدات
                </Typography>
              </Button>

              <Button
                disabled={
                  selectedEmp === undefined ||
                  Object.keys(selectedEmp || {}).length === 0
                }
                size="small"
                variant="contained"
                sx={{ mx: 1, height: 30, backgroundColor: "orangered" }}
                endIcon={<LocalPrintshopIcon />}
                onClick={() => {
                  setHack(Date.now.toString());
                  setTimeout(() => {
                    window.print();
                  }, 300);
                }}
              >
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ mx: 1, fontSize: "0.80rem", whiteSpace: "nowrap" }}
                >
                  طباعة الحافظة
                </Typography>
              </Button>
              <Button
                size="small"
                variant="outlined"
                endIcon={<HistoryIcon />}
                sx={{
                  mx: 1,
                  height: 30,
                  color: "orangered",
                  borderColor: "orangered",
                }}
                onClick={() => {
                  navigate(
                    "/readings/controlpanel/moneyTransfeer/pendingPosts",
                  );
                }}
              >
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ mx: 1, fontSize: "0.80rem", whiteSpace: "nowrap" }}
                >
                  التوريدات المعلقة
                </Typography>
              </Button>
            </div>
          </div>
        </div>
        <SharedDialog
          title="تجهيز"
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
        >
          <div className="my-5 grid w-full grid-cols-1 place-items-center gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
            {postLoading ? (
              <div className="flex flex-col items-center justify-center">
                <CircularProgress />
                <p className="text-lg text-slate-600">
                  برجاء انتظار الترحيل ...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onsubmit)} className="w-full">
                <Controller
                  rules={{ required: true }}
                  name="Count"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      required
                      inputProps={{ className: "text-2xl text-dinbold" }}
                      id="Count"
                      variant="outlined"
                      onChange={onChange}
                      value={value}
                      fullWidth
                      label="العدد"
                    />
                  )}
                />
                <Controller
                  rules={{ required: true }}
                  name="Amount"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      required
                      inputProps={{ className: "text-2xl text-dinbold" }}
                      id="toAmounttal"
                      fullWidth
                      variant="outlined"
                      onChange={onChange}
                      value={value}
                      label="المبلغ"
                      type="number"
                    />
                  )}
                />
                <Controller
                  rules={{ required: true }}
                  name="ReciptNo"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      required
                      inputProps={{
                        readOnly: !disableReceiptNo,
                        className: "text-2xl text-dinbold",
                      }}
                      id="ReciptNo"
                      fullWidth
                      variant="outlined"
                      onChange={onChange}
                      value={value}
                      label="رقم الايصال"
                      type="number"
                    />
                  )}
                />
              </form>
            )}
          </div>
        </SharedDialog>
      </Paper>
      <div>
        {ReactDOM.createPortal(
          <div
            dangerouslySetInnerHTML={{
              __html: Template(
                unPostedinvoicesList && {
                  ...unPostedinvoicesList[0],
                  includeHeader: true,
                  unPostedinvoicesList: unPostedinvoicesList.filter(
                    (invoice) =>
                      invoice.PAYMENT_METHOD === "CASH" ||
                      invoice.PAYMENT_METHOD === "نقدي",
                  ),
                  sumTotals,
                  sumTotalsNotNaqdy,
                  notNaqdyObj: unPostedinvoicesList.filter(
                    (notNaqdyInvoice) =>
                      notNaqdyInvoice.PAYMENT_METHOD !== "CASH",
                  )[0],
                  notNaqdy: unPostedinvoicesList.filter(
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
                  unPostedDetails: unPostedDetails.current,
                  siteName: userProfile?.SITE_NAME,
                  stationName: userProfile?.STATION_NAME,
                  // totalNaqdySummary: arrSumTotalSummaryNaqdyRef.current.pop(),

                  // for basicTable
                  printBasic: basicTableShow,
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
          />,
          document.getElementById("printModel") || document.body,
        )}
      </div>

      <Paper sx={paper}>
        <div className="mt-2 flex justify-between p-1 " dir="rtl">
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              sx={{ color: "black", fontWeight: "bold", fontSize: "0.85rem" }}
            >
              طريقة عرض جدول الفواتير
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="billgroup"
              name="radio-buttons-group"
              onChange={(e) =>
                setBasicTableShow(e.target.value === "billgroup")
              }
            >
              <FormControlLabel
                value="billgroup"
                control={<Radio size="small" />}
                label="تجميع الفواتير برقم المجموعة"
                sx={{ fontSize: "0.80rem" }}
              />
              <FormControlLabel
                value="book"
                control={<Radio size="small" />}
                label="تجميع الفواتير برقم السجل"
                sx={{ fontSize: "0.80rem" }}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <MoneyTransferMainTable
          basicTableShow={basicTableShow}
          basicTableInvoicesList={[
            ...Array.from(invoicesListByBillGr.current.values()),
          ]}
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
            unPostedDetails.current = data;
          }}
          handleShowDetails={handleSetShowDetails}
          showDetails={showDetails}
          unPostedinvoicesList={unPostedinvoicesList || []}
          empId={selectedEmp?.id}
        />
      </Paper>
    </Container>
  );
}
