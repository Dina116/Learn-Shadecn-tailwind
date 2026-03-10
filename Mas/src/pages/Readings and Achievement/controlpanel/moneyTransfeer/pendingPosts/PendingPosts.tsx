import { useMemo } from "react";
import { Autocomplete, InputLabel, TextField } from "@mui/material";
import type { IColumn } from "../../../../../componenet/shared/dataGrid/types";
import MasPageHeader from "../../../../../componenet/header/MasPageHeader";
import type { STATIONS } from "../../types";
import MasDataGrid from "../../../../../componenet/shared/dataGrid";
import usePendingPosts from "./usePendingPosts";
import {
  useGetAllStationsApi,
  useGetCurrentStationsApi,
  useGetIsHeadQuarterApi,
  useGetUnPostedSummaryApi,
} from "../../api/useControlApi";

export default function PendingPosts() {
  const { setSelectedStation, selectedStation } = usePendingPosts();
  const { data: AllStations } = useGetAllStationsApi();
  const { data: AllUnPostedBills } = useGetUnPostedSummaryApi();
  const { data: Station } = useGetCurrentStationsApi();
  const { data: isHeadQuarter } = useGetIsHeadQuarterApi();

  const colList = useMemo(() => {
    const tempColList: IColumn[] = [
      {
        dataField: "seqNumber",
        caption: "م",
        allowEditing: false,
        cellRender: (row) => row.rowIndex + 1,
        width: 50,
      },
      {
        dataField: "COLLECTOR_NAME",
        caption: "اسم المحصل",
        allowEditing: false,
      },
      {
        dataField: "COLLECTED_COUNT",
        caption: "عدد الفواتير",
        allowEditing: false,
      },
      {
        dataField: "ISSUED_AMOUNT",
        caption: "المبلغ",
        allowEditing: false,
      },
      {
        dataField: "STATION_NO",
        caption: "الفرع",
        allowEditing: false,
        calculateCellValue: (data) =>
          AllStations?.find(
            (station) => station?.STATION_NO === data.STATION_NO,
          )?.DESCRIPTION,
      },
      {
        dataField: "DELIVERY_DATE",
        caption: "تاريخ اخر توريد",
        allowEditing: false,
        dataType: "datetime",
        format: "dd/MM/yyyy",
      },
    ];
    return tempColList;
  }, [AllStations]);
  // console.log(
  //   Object.keys(selectedStation).length > 0,
  //   isHeadQuarter,
  //   !selectedStation?.isHeadquarters,
  // );
  return (
    <div>
      <MasPageHeader title="التوريدات المعلقة" />
      {isHeadQuarter && (
        <div className="rounded-md bg-white p-2 shadow-sm">
          <InputLabel htmlFor="Emps" sx={{ marginBottom: 1 }}>
            اختر الفرع
          </InputLabel>
          <Autocomplete
            onChange={(_event, newVal) => {
              // console.log(newVal, 'Newvals');
              setSelectedStation(newVal || ({} as STATIONS));
            }}
            id="Emps"
            defaultValue={Station}
            fullWidth
            options={AllStations || []}
            getOptionLabel={(option: STATIONS) => option.DESCRIPTION || " "}
            renderOption={(props, option: STATIONS) => (
              <li {...props} key={option.STATION_NO}>
                {`${option?.DESCRIPTION} - ${option?.STATION_NO}`}
              </li>
            )}
            renderInput={(params) => <TextField {...params} id="station" />}
          />
        </div>
      )}
      <div className="mt-3 rounded-md bg-white p-2 shadow-sm">
        <MasDataGrid
          printPdf
          className="tabelSharing"
          showBorders
          columns={colList}
          summaries={{
            totalItems: [
              {
                column: "COLLECTOR_NAME",
                displayFormat: "الاجمالي",
              },
              {
                column: "COLLECTED_COUNT",
                displayFormat: "العدد ({0})",
                summaryType: "sum",
              },
              {
                column: "ISSUED_AMOUNT",
                displayFormat: "{0}",
                summaryType: "sum",
                customizeText: (data) =>
                  `المبلغ (${Number(data?.value || 0).toFixed(2)})`,
              },
            ],
          }}
          dataSource={
            Object.keys(selectedStation).length > 0 &&
            isHeadQuarter &&
            !selectedStation?.IS_HEADQUARTERS
              ? AllUnPostedBills?.filter(
                  (posted) =>
                    posted?.STATION_NO === selectedStation?.STATION_NO,
                )
              : AllUnPostedBills || []
          }
        />
      </div>
    </div>
  );
}
