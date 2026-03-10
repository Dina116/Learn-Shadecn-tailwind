/* eslint-disable @typescript-eslint/no-explicit-any */
import DataGrid, {
  Column,
  FilterRow,
  // GroupPanel,
  Grouping,
  HeaderFilter,
  Pager,
  Paging,
  RowDragging,
  Search,
  Selection,
  Editing,
  Scrolling,
  Export,
  ColumnChooser,
  Position,
  Toolbar,
  Item,
  Summary,
  StateStoring,
  MasterDetail,
} from "devextreme-react/data-grid";
import ReplayIcon from "@mui/icons-material/Replay";
import React, { useCallback, useRef, useState } from "react";
import {
  type Cell,
  type DataGridCell,
  exportDataGrid,
} from "devextreme/pdf_exporter";
import { Workbook, type Worksheet } from "exceljs";
import saveAs from "file-saver";
import { exportDataGrid as exportDataGridToExcel } from "devextreme/excel_exporter";
import JsPDF from "jspdf";
import { LoadPanel } from "devextreme-react";
import IconButton from "@mui/material/IconButton";
import { LinearProgress, Tooltip } from "@mui/material";
import { type DataGridProps } from "./types";
import CustomToolbar from "./Toolbar";
// import LogoCompany from '../../../assets/logo-company.jpg'; // TO-DO TODO
// import { useGetUserProfileApi } from '@/hooks/apis/sysManagement/users';
// import { useGetCompanyNameApi } from '@/hooks/apis/lookup';
import { ConvertFloatNumbers } from "../../../utils/convertFloatNumbers";
import { useLoginStore } from "../../../hooks/login/useLoginStore";
import {
  useGetMasProviderSettings,
  useGetSiteLogoProvider,
  // useGetUserProfileApi,
} from "../../../pages/Readings and Achievement/controlpanel/api/useControlApi";

// eslint-disable-next-line max-lines-per-function
const MasDataGrid = React.memo(function MasDataGrid(props: DataGridProps) {
  const [isColHidden, setIsColHidden] = useState<boolean>(false);
  const { user: userStore } = useLoginStore();
  const { data: imageLogo } = useGetSiteLogoProvider({
    code: userStore?.SITE_CODE,
  });

  const { data: companyLogo } = useGetMasProviderSettings({
    keyword: "COMPANY_LOGO",
    SITE_CODE: userStore?.SITE_CODE || undefined,
  });

  // const { data: userProfile } = useGetUserProfileApi();
  // const { data: sites } = useGetAllSitesProviderApi();
  const companyNameNew = "";
  //  `${
  //   (sites || [])?.find(
  //     (res) => Number(res.CODE) === Number(userProfile?.USER?.SITE_CODE || 0),
  //   )?.DESCRIBE || ""
  // }`;
  const title1: string = `${props.govHeaders ? "القطاع التجاري" : ""} `;
  const title2: string = `${
    props.govHeaders ? "الادارة العامة للمصالح الحكومية" : ""
  } `;
  const title3: string = `${
    props.govHeaders ? "مركز التكلفة : 703402029000" : ""
  } `;
  // const { data: user } = useGetUserProfileApi();
  // const { data: currentCompanyName } = useGetCompanyNameApi();
  // console.log(currentCompanyName, 'currentCompanyName');
  const [pdfOriantion, setPdfOriantion] = useState<
    "p" | "l" | "portrait" | "landscape" | undefined
  >(props?.orientation || "p");
  const dataGridRef = React.useRef<any>(null);
  const { columns, ...rest } = props;
  // console.log('colsGrouping', colsGrouping);

  const renderColumn = useCallback(
    (col: any, keyPrefix = ""): React.ReactNode => {
      const key = `${keyPrefix}${col.dataField || col.caption}`;

      if (col.hasChildren && Array.isArray(col.child)) {
        return (
          <Column
            key={key}
            {...col}
            dataType={col.dataType || "string"}
            alignment="center"
            // fixedPosition="left"
            calculateCellValue={
              col.dataType === "number"
                ? (data) =>
                    ConvertFloatNumbers(
                      data[col?.dataField as any],
                      col.digitNumAfterZero,
                    ) || data[col?.dataField as any]
                : // eslint-disable-next-line @typescript-eslint/no-unused-expressions

                  col.calculateCellValue
            }
            caption={col.caption}
          >
            <HeaderFilter allowSelectAll>
              <Search enabled />
            </HeaderFilter>
            {col.child.map((child: any) => renderColumn(child, `${key}-`))}
          </Column>
        );
      }

      return (
        <Column
          {...col}
          dataType={col.dataType || "string"}
          alignment="center"
          fixedPosition="left"
          key={key}
          calculateCellValue={
            col.dataType === "number"
              ? (data) =>
                  ConvertFloatNumbers(
                    data[col?.dataField as any],
                    col.digitNumAfterZero,
                  ) || data[col?.dataField as any]
              : col.calculateCellValue
          }
        >
          <HeaderFilter allowSelectAll>
            <Search enabled />
          </HeaderFilter>
        </Column>
      );
    },
    [],
  );

  const startHeaderY = useRef(30);
  const reportHeader = useCallback(
    async (doc: JsPDF) => {
      const { FontBase64 } = await import("./arialBase64");
      doc.addFileToVFS("Arial", FontBase64);
      doc.addFont("Arial", "Arial", "normal");
      doc.setFont("Arial");
      doc.setFontSize(14);
      const totalPagesExp = "{total_pages_count_string}";
      const companyName = companyNameNew || "";
      const date = new Date();
      const printDate = `${date.toLocaleDateString("en-GB")} تاريخ الطباعة `;
      const { pageSize } = doc.internal;
      const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
      const companyNameWidth = doc.getTextWidth(companyName) + 5;
      const title1Width = doc.getTextWidth(title1);
      const title2Width = doc.getTextWidth(title2) - 8;
      const title3Width = doc.getTextWidth(title3) - 8;
      // const printDateWidth = doc.getTextWidth(printDate) + 5;
      doc.setFontSize(10);
      doc.text(companyName, pageWidth - companyNameWidth, 10);
      doc.text(title1, pageWidth - title1Width, 16);
      doc.text(title2, pageWidth - title2Width, 22);
      doc.text(title3, pageWidth - title3Width, 28);
      doc.setFontSize(10);
      doc.setTextColor(109, 109, 109);
      doc.setTextColor(0);
      doc.text(printDate, 5, 10);
      // doc.line(1, 20, pageWidth, 20);
      if (props.reportHeaders) {
        let prevW = 0;
        props.reportHeaders.forEach((head) => {
          if (
            !head.text.includes("undefined") &&
            !head.text.includes("Invalid Date")
          ) {
            const TextDimensions = doc.getTextDimensions(head.text);
            prevW += TextDimensions.w + 5;
            let w = pageWidth - prevW;
            let h = TextDimensions.h + startHeaderY.current + 15;
            if (head.nextLine) {
              startHeaderY.current += TextDimensions.h + 6;
              w = pageWidth - (TextDimensions.w + 5);
              h = TextDimensions.h + startHeaderY.current;
            }
            doc.text(head.text, w, h, {
              align: "left",
            });
          }
        });
      }
      doc.setFontSize(16);
      startHeaderY.current += 13;
      doc.setDrawColor("#909090");
      doc.line(0, startHeaderY.current, pageWidth, startHeaderY.current);
      startHeaderY.current += 13;
      doc.text(props?.reportName || "", pageWidth / 2, startHeaderY.current, {
        align: "center",
      });

      if (props?.subReportHeader) {
        doc.setFontSize(14);
        startHeaderY.current += 6;
        doc.text(props.subReportHeader, pageWidth / 2, startHeaderY.current, {
          align: "center",
        });
      }

      if ((imageLogo && imageLogo.SITE_IMAGE) || companyLogo) {
        // Ensure SITE_IMAGE is a valid base64 string or a suitable data URI
        const imageData = imageLogo?.SITE_IMAGE || companyLogo?.KEY_VALUE;
        doc.addImage(imageData || "", "JPEG", 5, 12, 21, 16);
      }

      if (typeof doc.putTotalPages === "function") {
        doc.putTotalPages(totalPagesExp);
      }
      doc.setDrawColor(204, 204, 204);
      doc.setFontSize(10);
    },
    [
      companyLogo,
      companyNameNew,
      imageLogo,
      props.reportHeaders,
      props?.reportName,
      props.subReportHeader,
      title1,
      title2,
      title3,
    ],
  );

  // console.log(columns, 'columns');

  const handelCustomizeCell = useCallback(
    (gridCell?: DataGridCell | undefined, pdfCell?: Cell | undefined) => {
      // console.log(gridCell?.groupIndex, 'Group Index');
      const mpdfCell = pdfCell!;
      if (gridCell?.rowType === "header") {
        mpdfCell.backgroundColor = "#9bcee6";
        mpdfCell.font = { size: props.headersFontSize || 12 };
        mpdfCell.textColor = "#111111";
        mpdfCell.wordWrapEnabled = true;
        mpdfCell.horizontalAlign = "center";
        mpdfCell.verticalAlign = "middle";
      }
      if (gridCell?.rowType === "data") {
        if ((gridCell?.column?.visibleIndex || 0) % 2 === 0) {
          mpdfCell.wordWrapEnabled = false;
          mpdfCell.font = { size: 8, name: "Arial" };

          // console.log(gridCell.groupIndex, 'gridCell');
        }
        mpdfCell.wordWrapEnabled = false;
        mpdfCell.font = { size: 8, name: "Arial" };
      }
      if (gridCell?.rowType === "group" && gridCell?.groupIndex === 0) {
        mpdfCell.backgroundColor = "#9ed7f4";
        mpdfCell.font = { name: "Arial", size: 12 };
        mpdfCell.textColor = "#000";
      } else if (gridCell?.rowType === "group" && gridCell?.groupIndex === 1) {
        mpdfCell.backgroundColor = "#c3c1c1";
        mpdfCell.font = { name: "Arial", size: 12 };
      } else if (gridCell?.rowType === "group" && gridCell?.groupIndex === 2) {
        // console.log(mpdfCell.text, 'Text');
        mpdfCell.backgroundColor = "#8f8f8f";
        mpdfCell.font = { name: "Arial", size: 12 };
      } else if (
        gridCell?.rowType === "groupFooter" ||
        gridCell?.rowType === "totalFooter"
      ) {
        // mpdfCell.text = '';
        // mpdfCell.font = { size: 0.01 }; // Nearly invisible
        // mpdfCell.textColor = '#FFFFFF'; // Match background
        // mpdfCell.borderWidth = 0;
        // mpdfCell.backgroundColor = undefined;
        // console.log(gridCell, 'gridCell');
        mpdfCell.font = {
          name: "Arial",
          size: 10,
        };
        mpdfCell.backgroundColor = "#005782";
        mpdfCell.textColor = "#fff";
        mpdfCell.wordWrapEnabled = true;
      }
    },
    [props.headersFontSize],
  );

  const handelExportPdf = useCallback(async () => {
    startHeaderY.current = 20;
    const doc = new JsPDF({
      orientation: pdfOriantion,
      format: "a4",
    });
    await reportHeader(doc);
    if (props.anotherTable) {
      exportDataGrid({
        jsPDFDocument: doc,
        component: props.anotherTable as any,
        indent: 5,
        margin: { right: 3, left: 3, top: 5, bottom: 60 },
        topLeft: { x: 0, y: startHeaderY.current },
        customizeCell({ gridCell, pdfCell }) {
          handelCustomizeCell(gridCell, pdfCell);
        },
      }).then(() => {
        const st = dataGridRef?.current?.instance;
        console.log(st.state(), st.getDataSource(), st, "dataGridRef?.current");
        exportDataGrid({
          jsPDFDocument: doc,
          component: st as any,
          indent: 5,
          margin: {
            right: 3,
            left: 3,
            top: 5,
            bottom: props?.isFooter ? 20 : 5,
          },
          topLeft: { x: 0, y: 100 },
          repeatHeaders: true,
          customizeCell({ gridCell, pdfCell }) {
            handelCustomizeCell(gridCell, pdfCell);
          },
          // customDrawCell(options) {
          //   if (options.gridCell?.rowType === 'groupFooter') {
          //     console.log(options, 'options');
          //     if (options.gridCell.column) {
          //       options.gridCell.column.visible = false;
          //     }
          //   }
          // },
        }).then(() => {
          if (props?.isFooter) {
            const totalPages = doc.internal.pages.length - 1;
            // eslint-disable-next-line no-plusplus
            for (let index = 0; index < totalPages; index++) {
              doc.setFont("Arial");
              doc.setFontSize(10);
              doc.setPage(index + 1);
              const pageSizeFooter = doc.internal.pageSize;
              const pageHeight = pageSizeFooter.height
                ? pageSizeFooter.height
                : pageSizeFooter.getHeight();
              doc.text(
                props?.footerSignature
                  ? props?.footerSignature[0]
                  : " مدير المركز",
                doc.internal.pageSize.getWidth() -
                  doc.getTextWidth(
                    (props?.footerSignature && props?.footerSignature[0]) || "",
                  ) -
                  10,
                pageHeight - 15,
              );
              doc.text(
                props?.footerSignature
                  ? props?.footerSignature[1]
                  : "توقيع : الموظف المسئول",
                doc.internal.pageSize.getWidth() -
                  (pdfOriantion === "l" ? 120 : 80),
                pageHeight - 15,
              );
              doc.text(
                props?.footerSignature ? props?.footerSignature[2] : "",
                doc.internal.pageSize.getWidth() -
                  (pdfOriantion === "l" ? 200 : 140),
                pageHeight - 15,
              );
              doc.text(
                props?.footerSignature ? props?.footerSignature[3] : "",
                doc.internal.pageSize.getWidth() -
                  (pdfOriantion === "l" ? 270 : 200),
                pageHeight - 15,
              );
            }
          }
          doc.autoPrint();
          const pdfBlob = doc.output("blob");
          const fileURL = URL.createObjectURL(pdfBlob);
          window.open(fileURL);
        });
      });
    } else {
      exportDataGrid({
        jsPDFDocument: doc,
        component: dataGridRef?.current?.instance as any,
        indent: 5,
        margin: {
          right: 3,
          left: 3,
          top: 5,
          bottom: props?.isFooter ? 20 : 5,
        },
        topLeft: { x: 0, y: startHeaderY.current },
        repeatHeaders: true,
        customizeCell({ gridCell, pdfCell }) {
          handelCustomizeCell(gridCell, pdfCell);
        },
      }).then(() => {
        if (props?.isFooter) {
          const totalPages = doc.internal.pages.length - 1;
          // eslint-disable-next-line no-plusplus
          for (let index = 0; index < totalPages; index++) {
            doc.setFont("Arial");
            doc.setFontSize(10);
            doc.setPage(index + 1);
            const pageSizeFooter = doc.internal.pageSize;
            const pageHeight = pageSizeFooter.height
              ? pageSizeFooter.height
              : pageSizeFooter.getHeight();
            doc.text(
              props?.footerSignature
                ? props?.footerSignature[0]
                : " مدير المركز",
              doc.internal.pageSize.getWidth() -
                doc.getTextWidth(
                  (props?.footerSignature && props?.footerSignature[0]) || "",
                ) -
                10,
              pageHeight - 15,
            );
            doc.text(
              props?.footerSignature
                ? props?.footerSignature[1]
                : "توقيع : الموظف المسئول",
              doc.internal.pageSize.getWidth() -
                (pdfOriantion === "l" ? 120 : 80),
              pageHeight - 15,
            );
            doc.text(
              props?.footerSignature ? props?.footerSignature[2] : "",
              doc.internal.pageSize.getWidth() -
                (pdfOriantion === "l" ? 200 : 140),
              pageHeight - 15,
            );
            doc.text(
              props?.footerSignature ? props?.footerSignature[3] : "",
              doc.internal.pageSize.getWidth() -
                (pdfOriantion === "l" ? 270 : 200),
              pageHeight - 15,
            );
          }
        }
        doc.autoPrint();
        const pdfBlob = doc.output("blob");
        const fileURL = URL.createObjectURL(pdfBlob);
        window.open(fileURL);
      });
    }
  }, [
    handelCustomizeCell,
    pdfOriantion,
    props.anotherTable,
    props?.footerSignature,
    props?.isFooter,
    reportHeader,
  ]);
  const getHeaderExcel = useCallback(
    (worksheet: Worksheet) => {
      const reportName: string[] = ["", "", props?.reportName as string];
      props.reportHeaders?.forEach((el) => {
        if (el.text) {
          reportName.push(el.text);
        }
      });
      worksheet.insertRow(1, reportName);
      return worksheet;
    },
    [props.reportHeaders, props?.reportName],
  );
  const onExporting = useCallback(
    async (e: any) => {
      // console.log(e.format, 'formats');

      if (e.format === "xlsx") {
        const workbook = new Workbook();
        let worksheet = workbook.addWorksheet("report");
        worksheet = getHeaderExcel(worksheet);
        exportDataGridToExcel({
          component: e.component,
          worksheet,
          autoFilterEnabled: true,
          topLeftCell: { row: 2, column: 1 },
          customizeCell(options) {
            const { gridCell, excelCell } = options;
            handelCustomizeCell(gridCell, excelCell);
            // if (gridCell?.rowType === 'data') {
            //   excelCell.font = { color: { argb: 'FF0000FF' }, underline: false };
            //   excelCell.alignment = { horizontal: 'center' };
            // }
          },
        }).then(() => {
          workbook.xlsx.writeBuffer().then((buffer: BlobPart) => {
            saveAs(
              new Blob([buffer], { type: "application/octet-stream" }),
              "report.xlsx",
            );
          });
        });
        e.cancel = true;
      } else if (e.format === "pdf") {
        const doc = new JsPDF();
        exportDataGrid({
          jsPDFDocument: doc,
          component: e.component,
        }).then(() => {
          doc.save("report.pdf");
        });
      }
    },
    [getHeaderExcel, handelCustomizeCell],
  );

  const onStateResetClick = useCallback(() => {
    dataGridRef.current.instance.state(null);
  }, []);

  // const logInvisibleColumns = () => {
  //   const { instance } = dataGridRef.current;
  //   const cols = instance?.getVisibleColumns();
  //   // const allColumns = instance?.getAllColumns();
  //   // const invisibleColumns = allColumns.filter((column) => !column.visible);

  //   console.log('visible Columns:', cols);
  //   // console.log('visible count:', instance.hideColumnChooser());
  // };

  const isColumnHidden = useCallback((count?: number): boolean => {
    if (count) {
      // eslint-disable-next-line no-plusplus
      let boolCheck: boolean = false;
      // eslint-disable-next-line no-unreachable-loop, no-plusplus
      for (let index = 0; index < count; index++) {
        if (!dataGridRef.current.instance.columnOption(index).visible) {
          boolCheck = false;
          return false;
        }
        boolCheck = true;
      }
      return boolCheck;
    }
    return true;
  }, []);
  return (
    <div className="relative">
      {props.stateStoring && (
        <Tooltip title="اعادة ضبط الجدول">
          <IconButton aria-label="" onClick={onStateResetClick}>
            <ReplayIcon />
          </IconButton>
        </Tooltip>
      )}
      {props.customLoading && <LinearProgress />}
      <DataGrid
        disabled={props.customLoading}
        onOptionChanged={(e) => {
          if (
            props.columnChooser &&
            (e.fullName.includes("visible") ||
              e.fullName.includes("selection") ||
              e.fullName.includes("selectedRowKeys"))
          ) {
            // console.log(e, 'EVVV');
            setIsColHidden(
              isColumnHidden(dataGridRef.current.instance.columnCount()),
            );
          }
        }}
        allowColumnReordering
        // hoverStateEnabled
        allowColumnResizing
        showRowLines
        showColumnLines
        rowAlternationEnabled
        showBorders
        rtlEnabled
        onExporting={onExporting}
        ref={dataGridRef}
        {...rest}
      >
        {props.stateStoring && <StateStoring {...props.stateStoring} />}

        <FilterRow
          visible={
            props.filterPanel !== undefined ? props.filterPanel.visible : true
          }
          resetOperationText="اعادة التعيين"
          operationDescriptions={{
            between: "بين",
            contains: "يحتوى على ",
            endsWith: "ينتهى بـ",
            equal: "يساوى",
            greaterThan: "اكبر من",
            greaterThanOrEqual: "أكبر من أو يساوي",
            lessThan: "اصغر من",
            lessThanOrEqual: "اصغر من او يساوى",
            notContains: "لا يحتوى على",
            notEqual: "لا يساوى",
            startsWith: "يبدأ بـ",
          }}
        />
        <RowDragging {...props.rowDrag} />
        <Selection {...props.selection} allowSelectAll />
        <Editing />
        <Grouping
          texts={{
            groupContinuedMessage: "يتبع",
            groupContinuesMessage: "التكملة في الصفحات التالية",
          }}
          autoExpandAll
        />
        <Scrolling
          mode={props?.scrollMode || "standard"}
          showScrollbar="always"
          scrollByThumb
          scrollByContent
        />
        <LoadPanel {...props?.loadPanel} />
        <Export {...props.export} />
        <ColumnChooser
          {...props.columnChooser}
          selection={{ selectByClick: true, recursive: true }}
          mode="select"
          emptyPanelText="لا يوجد اعمده"
        >
          <Position
            collision="flipfit fit"
            my="left top"
            at="left bottom"
            of=".dx-datagrid-column-chooser-button"
          />
        </ColumnChooser>
        <MasterDetail {...props?.masterDetail} />

        <Paging
          defaultPageSize={props.defaultPageSize || 100}
          {...props.defaultPaging}
        />

        <Pager
          visible
          allowedPageSizes={[20, 50, 100, "all"]}
          displayMode="compact"
          showPageSizeSelector
          showInfo
          {...props.pager}
        />

        {/*
  {columns?.map((col, index) => {
    if (col.hasChildren) {
      return (
        <Column alignment="center" key={index} caption={col.caption}>
          {(col?.child || []).map((child, idx) => (
            <Column
              {...child}
              dataType={child?.dataType || 'string'}
              alignment="center"
              fixedPosition="left"
              key={`${child.dataField} ${idx}`}
            >
              <HeaderFilter allowSelectAll>
                <Search enabled />
              </HeaderFilter>
            </Column>
          ))}
        </Column>
      );
    }
    return (
      <Column
        {...col}
        dataType={col.dataType || 'string'}
        alignment="center"
        fixedPosition="left"
        key={`${col.dataField} ${index}`}
        calculateCellValue={
          col.dataType === 'number'
            ? (data) =>
                ConvertFloatNumbers(
                  data[col?.dataField as any],
                  col.digitNumAfterZero,
                ) || data[col?.dataField as any]
            : col.calculateCellValue
        }
      >
        <HeaderFilter allowSelectAll>
          <Search enabled />
        </HeaderFilter>
      </Column>
    );
  })}
*/}

        {columns?.map((col, index) => renderColumn(col, `root-${index}-`))}

        {(props.printPdf || props?.export) && (
          <Toolbar>
            <Item location="before">
              <CustomToolbar
                onExportPdf={() => {
                  if (props.onExportPdf) {
                    props.onExportPdf();
                    return;
                  }
                  handelExportPdf();
                }}
                onClickPdfOriantion={() =>
                  setPdfOriantion(pdfOriantion === "p" ? "l" : "p")
                }
                pdfOriantion={pdfOriantion}
              />
            </Item>
            <Item name="exportButton" />
            {props.editing?.allowAdding && (
              <Item name="addRowButton" location="before" text="add" />
            )}
            <Item
              name="columnChooserButton"
              cssClass={`${
                isColHidden
                  ? ""
                  : "relative before:content-[''] before:absolute before:top-[1px] before:left-0 before:bg-orange-600 before:text-white before:text-xs before:px-[5px] before:py-[5px] before:rounded-full"
              }`}
            />
          </Toolbar>
        )}

        <Summary {...props?.summaries} />
      </DataGrid>
    </div>
  );
});

export default MasDataGrid;
