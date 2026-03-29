/* eslint-disable @typescript-eslint/no-explicit-any */
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
import type { CollectionDestributionItm, PostReq } from "./types";
import MoneyTransferMainTable from "./MoneyTransferMainTable";
import useMoneyTransfer from "./useMoneyTransfer";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import type { STATIONS } from "../types";
import ReactDOM from "react-dom";
import Handlebars from "handlebars";
import type { EMPS } from "@/componenet/shared/dataGrid/types";
import {
  useGetAllCollectorsApi,
  useGetHafzaTemplate,
  useGetIsHeadQuarterApi,
  useGetUserProfileApi,
} from "./useMoneyTransfeerApi";
import usePulledHistory from "../operations/pulledHistory/usePulledHistory";

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
    handleCloseDialog,
  } = useMoneyTransfer();
  const [printMode, setPrintMode] = useState(false);
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<PostReq>({
    defaultValues: {},
  });
  const [, setHack] = useState<string>();
  const unPostedDetails = useRef<CollectionDestributionItm[]>([]);
  const { useGetAllStationsApi } = usePulledHistory();
  const { data: userProfile, isLoading: userFetching } = useGetUserProfileApi();
  console.log("userProfile", userProfile);
  const { data: AllEmps, isLoading } = useGetAllCollectorsApi();
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
    .sort((a, b) => (a.FULL_NAME || "").localeCompare(b.FULL_NAME || ""))
    ?.sort((a, b) => sortByPropertyExistence(a, b));

  const filteredEmps =
    selectedStation?.IS_HEADQUARTERS && isHeadQuarter
      ? sortEmps
      : sortEmps?.filter(
          (emp) =>
            String(emp.BRANCH_ID) === String(selectedStation?.STATION_NO),
        ) || [];

  console.log("AllEmps", AllEmps);
  console.log("filteredEmps", filteredEmps);
  console.log("AllStations", AllStations);
  console.log("isHeadQuarter", isHeadQuarter);
  console.log("رقم المحطة المختارة:", selectedStation?.STATION_NO);
  console.log("أول موظف وفرعه:", sortEmps?.[0]?.BRANCH_ID);

  const Template = Handlebars.compile(hafzaTemplate || "");

  const paper = {
    margin: "20px auto",
    padding: 2,
    marginRight: 0,
    position: "relative",
    width: { xs: "95%", sm: "100%", md: "80%" },
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
                    empid: newVal?.ID || 0,
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
                options={filteredEmps}
                getOptionLabel={(option) =>
                  `${option?.FULL_NAME} - ${option?.ID}`
                }
                renderInput={(params) => (
                  <TextField required {...params} id="Emps" />
                )}
              />
            </div>

            <div className="flex justify-between mr-75">
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
                      `/readings/controlpanel/moneyTransfeer/postHistory/${selectedEmp?.ID}`,
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
                  setPrintMode(true);
                  setTimeout(() => {
                    window.print();
                    setPrintMode(false);
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
          maxWidth="xs"
          title={
            modalType.current === "with" ? "تجهيز وترحيل" : "تجهيز بدون ترحيل"
          }
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
          primaryAction={{
            text: "حفظ",
            onClick: handleSubmit((data) => {
              onsubmit(data);
            }),
          }}
          secondaryAction={{
            text: "إلغاء",
            onClick: handleCloseDialog ?? (() => {}),
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
              <form onSubmit={handleSubmit(onsubmit)} className="w-full ">
                <Controller
                  rules={{ required: true }}
                  name="Count"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Typography>
                        العدد<span style={{ color: "red" }}>*</span>
                      </Typography>

                      <TextField
                        dir="rtl"
                        inputProps={{ className: "text-2xl text-dinbold" }}
                        id="Count"
                        size="small"
                        variant="outlined"
                        onChange={onChange}
                        value={value}
                        fullWidth
                      />
                    </>
                  )}
                />
                <Controller
                  rules={{ required: true }}
                  name="Amount"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Typography>
                        المبلغ<span style={{ color: "red" }}>*</span>
                      </Typography>
                      <TextField
                        required
                        size="small"
                        inputProps={{ className: "text-2xl text-dinbold" }}
                        id="toAmounttal"
                        fullWidth
                        variant="outlined"
                        onChange={onChange}
                        value={value}
                        type="number"
                      />
                    </>
                  )}
                />
                <Controller
                  rules={{ required: true }}
                  name="ReciptNo"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <Typography>
                        رقم الايصال<span style={{ color: "red" }}>*</span>
                      </Typography>
                      <TextField
                        required
                        size="small"
                        inputProps={{
                          readOnly: !disableReceiptNo,
                          className: "text-2xl text-dinbold",
                        }}
                        id="ReciptNo"
                        fullWidth
                        variant="outlined"
                        onChange={onChange}
                        value={value}
                        type="number"
                      />
                    </>
                  )}
                />
              </form>
            )}
          </div>
        </SharedDialog>
      </Paper>
      <div>
        {printMode &&
          ReactDOM.createPortal(
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
      <div className="flex flex-col justify-cenetr items-center">
        {isLoading || userFetching ? <CircularProgress /> : null}
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
          empId={selectedEmp?.ID}
        />
      </Paper>
    </Container>
  );
}

/**
 *
 */
