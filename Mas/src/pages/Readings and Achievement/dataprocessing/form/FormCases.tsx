import type { formInputDataType, Receipt } from "../types";
import type { Control, FieldErrors, UseFormWatch } from "react-hook-form";
import {
  RenderCheckbox,
  RenderField,
  RenderSelect,
} from "./components/FormFields";
import { TwoColumns } from "./components/LayoutHelpers";
import RefreshIcon from "@mui/icons-material/Refresh";
import RefreshButton from "../readings/RefreshButton";
import {
  GetCustomerMeters,
  GetCustomerReader,
  GetLastBilngReading,
  GetLastReceipts,
  GetPayment,
} from "../../../../api/dataparocessing/DataProcessingApi";
import { TextField, Typography } from "@mui/material";
// import { useState } from "react";
import { getCancelCollectionColumns } from "../collecting/getCancelCollectionColumns ";
import SharedTablePagination from "../../../../componenet/shared/SharedTablePagination";
import { useMemo } from "react";

type Props = {
  id: string;
  control: Control<formInputDataType>;
  errors: FieldErrors<formInputDataType>;
  watch: UseFormWatch<formInputDataType>;
  onFetchComplete: (
    fetchedData: Partial<formInputDataType>,
    fieldNames: string[],
    // setTableData?: (data: Receipt[]) => void,
  ) => void;
  disabledFields: string[];
  tableData: Receipt[];
  selectedRows: Receipt[];
  setSelectedRows: (rows: Receipt[]) => void;
};

const noteOptions = [
  { value: "-1", label: "لا يوجد رسالة" },
  { value: "1", label: "مغلق" },
  { value: "2", label: "متعذر" },
  { value: "3", label: "العداد معطل" },
  { value: "4", label: "حبس مياة" },
  { value: "5", label: "تسوية" },
  { value: "6", label: "وصلة حرة" },
];

export const RenderForm = ({
  id,
  control,
  errors,
  watch,
  disabledFields,
  onFetchComplete,
  tableData,
  selectedRows,
  setSelectedRows,
}: Props) => {
  
  const totalCollected = useMemo(() => {
    return selectedRows.reduce(
      (sum, row) => sum + (row.COLLECTED_AMOUNT || 0),
      0,
    );
  }, [selectedRows]);
  const includeDeposted = id === "cancel_supplier_invoice_collection";
  console.log(
    `[CancelCollectionForm] Current ID is: "${id}", so includeDeposted is:`,
    includeDeposted,
  );

  switch (id) {
    case "update_customer_invoices":
      return (
        <>
          <RenderCheckbox
            name="includeInvoice"
            label="إضافة الفاتورة"
            control={control}
            watch={watch}
          />
          <RenderField
            name="CUSTKEY"
            label="رقم الحساب"
            control={control}
            errors={errors}
            required
          />
          <RenderField
            name="startDate"
            label="تاريخ البدء"
            control={control}
            errors={errors}
            type="date"
            required
          />
          <RenderField
            name="endDate"
            label="تاريخ الانتهاء"
            control={control}
            errors={errors}
            type="date"
            required
          />
        </>
      );

    case "add_invoice_collection": {
      const includeInvoice = watch("includeInvoice");
      const custkeyValue = watch("CUSTKEY");
      const paymentValue = watch("PAYMENT_NO");

      return (
        <>
          <RenderCheckbox
            name="includeInvoice"
            label="إضافة الفاتورة"
            control={control}
            watch={watch}
          />

          {includeInvoice ? (
            <TwoColumns>
              <div className="flex flex-row-reverse items-center justify-end gap-2 w-full">
                <RefreshButton
                  paramName="CUSTKEY"
                  valueToFetch={custkeyValue}
                  fetchFn={GetPayment}
                  onFetchComplete={onFetchComplete}
                />
                <RenderField
                  name="CUSTKEY"
                  label="رقم الحساب"
                  control={control}
                  errors={errors}
                />
              </div>

              <div className="flex flex-row-reverse items-center justify-end gap-2 w-full">
                <RefreshButton
                  paramName="PAYMENT_NO"
                  valueToFetch={paymentValue}
                  fetchFn={GetPayment}
                  onFetchComplete={onFetchComplete}
                />
                <RenderField
                  name="PAYMENT_NO"
                  label="رقم الفاتورة"
                  control={control}
                  errors={errors}
                  required
                />
              </div>
            </TwoColumns>
          ) : (
            <TwoColumns>
              <div className="flex flex-row-reverse items-center justify-end gap-2 w-full">
                <RefreshButton
                  paramName="PAYMENT_NO"
                  valueToFetch={paymentValue}
                  fetchFn={GetPayment}
                  onFetchComplete={onFetchComplete}
                />
                <RenderField
                  name="PAYMENT_NO"
                  label="رقم الفاتورة"
                  control={control}
                  errors={errors}
                />
              </div>
              <div className="flex flex-row-reverse items-center justify-end gap-2 w-full">
                <RefreshButton
                  paramName="CUSTKEY"
                  valueToFetch={custkeyValue}
                  fetchFn={GetPayment}
                  onFetchComplete={onFetchComplete}
                />
                <RenderField
                  name="CUSTKEY"
                  label="رقم الحساب"
                  control={control}
                  errors={errors}
                  required
                />
              </div>
            </TwoColumns>
          )}

          <RenderField
            name="SURNAME"
            label="الاسم"
            control={control}
            errors={errors}
            disabled={disabledFields.includes("SURNAME")}
          />

          <TwoColumns>
            <RenderField
              name="CL_BLNCE"
              label="الرصيد"
              control={control}
              errors={errors}
              disabled
            />
            <RenderField
              name="BILNG_DATE"
              label="تاريخ الدورة"
              control={control}
              errors={errors}
              type="date"
              required
              disabled={disabledFields.includes("BILNG_DATE")}
            />
          </TwoColumns>

          <RenderCheckbox
            name="networkCollection"
            label="التحصيل بشبكات"
            control={control}
            watch={watch}
          >
            <TwoColumns>
              <RenderField
                name="chequeBank"
                label="البنك"
                control={control}
                errors={errors}
                required
              />
              <RenderField
                name="chequeNo"
                label="رقم الشيك"
                control={control}
                errors={errors}
                required
              />
            </TwoColumns>
          </RenderCheckbox>

          <RenderCheckbox
            name="enableDiscount"
            label="تفعيل الاستقطاعات"
            control={control}
            watch={watch}
          >
            <TwoColumns>
              <RenderField
                name="discount"
                label="قيمة الاستقطاع"
                control={control}
                errors={errors}
                required
              />
              <RenderField
                name="discountDocumentNo"
                label="رقم مستند الاستقطاعات"
                control={control}
                errors={errors}
                required
              />
            </TwoColumns>
          </RenderCheckbox>

          <RenderCheckbox
            name="locked"
            label="عدم السماح للوحدة المحمولة بتعديل حالة التحصيل"
            control={control}
            watch={watch}
          />
        </>
      );
    }

    case "cancel_invoice_collection":
    case "cancel_supplier_invoice_collection": {
      const searchByInvoice = watch("searchByInvoice");
      const custkeyValue = watch("CUSTKEY");
      const paymentValue = watch("PAYMENT_NO");

      const columns = getCancelCollectionColumns(
        tableData,
        selectedRows,
        setSelectedRows,
      );
      console.log(
        "Rendering CancelCollectionForm. Table data length:",
        tableData.length,
      );
      return (
        <>
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex-grow">
              <RenderCheckbox
                name="searchByInvoice"
                label="البحث باستخدام رقم الفاتورة"
                control={control}
                watch={watch}
              />
            </div>

            {tableData.length > 0 && (
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#0e466b",
                  whiteSpace: "nowrap",
                }}
              >
                إجمالي المحصل: {totalCollected.toFixed(2)}
              </Typography>
            )}
          </div>

          {searchByInvoice ? (
            <TwoColumns>
              <div className="flex flex-row-reverse items-center justify-end gap-2 w-full">
                <RefreshButton
                  paramName="CUSTKEY"
                  valueToFetch={custkeyValue}
                  fetchFn={GetLastReceipts}
                  onFetchComplete={onFetchComplete}
                  extraParams={{ includeDeposted }}
                />
                <RenderField
                  name="CUSTKEY"
                  label="رقم الحساب"
                  control={control}
                  errors={errors}
                  disabled
                />
              </div>
              <div className="flex flex-row-reverse items-center justify-end gap-2 w-full">
                <RefreshButton
                  paramName="PAYMENT_NO"
                  valueToFetch={paymentValue}
                  fetchFn={GetLastReceipts}
                  onFetchComplete={onFetchComplete}
                  extraParams={{ includeDeposted }}
                />
                <RenderField
                  name="PAYMENT_NO"
                  label="رقم الفاتورة"
                  control={control}
                  errors={errors}
                  required
                />
              </div>
            </TwoColumns>
          ) : (
            <TwoColumns>
              <div className="flex flex-row-reverse items-center justify-end gap-2 w-full">
                <RefreshButton
                  paramName="PAYMENT_NO"
                  valueToFetch={paymentValue}
                  fetchFn={GetLastReceipts}
                  onFetchComplete={onFetchComplete}
                  extraParams={{ includeDeposted }}
                />
                <RenderField
                  name="PAYMENT_NO"
                  label="رقم الفاتورة"
                  control={control}
                  errors={errors}
                  disabled
                />
              </div>
              <div className="flex flex-row-reverse items-center justify-end gap-2 w-full">
                <RefreshButton
                  paramName="CUSTKEY"
                  valueToFetch={custkeyValue}
                  fetchFn={GetLastReceipts}
                  onFetchComplete={onFetchComplete}
                  extraParams={{ includeDeposted }}
                />
                <RenderField
                  name="CUSTKEY"
                  label="رقم الحساب"
                  control={control}
                  errors={errors}
                  required
                />
              </div>
            </TwoColumns>
          )}
          {tableData.length > 0 ? (
            <div style={{ marginTop: "16px" }}>
              <SharedTablePagination columns={columns} data={tableData} />
            </div>
          ) : (
            <>
              <TwoColumns>
                <RenderField
                  name="tent_name"
                  label="الاسم"
                  control={control}
                  errors={errors}
                  required
                  disabled
                />
                <RenderField
                  name="operationCode"
                  label="كود العملية"
                  control={control}
                  errors={errors}
                  disabled
                />
              </TwoColumns>

              <TwoColumns>
                <RenderField
                  name="collectionDate"
                  label="تاريخ التحصيل"
                  control={control}
                  errors={errors}
                  type="date"
                  disabled
                />
                <RenderField
                  name="invoiceAmount"
                  label="قيمة الفاتورة"
                  control={control}
                  errors={errors}
                  disabled
                />
              </TwoColumns>

              <TwoColumns>
                <RenderField
                  name="collectedAmount"
                  label="المبلغ المحصل"
                  control={control}
                  errors={errors}
                  disabled
                />
                <RenderField
                  name="BILNG_DATE"
                  label="تاريخ الدورة"
                  control={control}
                  errors={errors}
                  type="date"
                  disabled
                />
              </TwoColumns>

              <TwoColumns>
                <RenderField
                  name="paymentMethod"
                  label="طريقة الادخال"
                  control={control}
                  errors={errors}
                  disabled
                />
                <RenderField
                  name="paymentType"
                  label="نوع السداد"
                  control={control}
                  errors={errors}
                  disabled
                />
              </TwoColumns>

              <TwoColumns>
                <RenderField
                  name="collector"
                  label="اسم المحصل"
                  control={control}
                  errors={errors}
                  disabled
                />
                <RenderField
                  name="collectionType"
                  label="نوع التحصيل"
                  control={control}
                  errors={errors}
                  disabled
                />
              </TwoColumns>
            </>
          )}
        </>
      );
    }
    //////////////تعطيل ترحيل إيصال/////////
    case "disable_receipt_posting":
      return (
        <>
          <RenderField
            name="CUSTKEY"
            label="رقم الحساب"
            control={control}
            errors={errors}
            required
          />
          <RenderField
            name="PAYMENT_NO"
            label="رقم الفاتورة"
            control={control}
            errors={errors}
            required
          />
          <RenderField
            name="collection_id"
            label="كود الايصال"
            control={control}
            errors={errors}
            required
          />
        </>
      );

    ////////////////تعديل القراءة لعميل//////////////////
    case "edit_customer_reading": {
      const custkeyValue = watch("CUSTKEY");
      return (
        <>
          <div className="flex flex-row-reverse items-center justify-end gap-2 w-full">
            <RefreshButton
              paramName="custkey"
              valueToFetch={custkeyValue}
              fetchFn={GetCustomerReader}
              onFetchComplete={onFetchComplete}
            />
            <RenderField
              name="CUSTKEY"
              label="رقم الحساب"
              control={control}
              errors={errors}
              required
              disabled={disabledFields.includes("custkey")}
            />
          </div>
          <TwoColumns>
            <div className="flex flex-row-reverse items-center justify-end gap-2 w-full">
              <RefreshIcon sx={{ marginTop: "20px", color: "gray" }} />
              <RenderField
                name="PROPERTY_ID"
                label="رقم الاشتراك"
                control={control}
                errors={errors}
                required={false}
              />
            </div>
            <div className="flex flex-row-reverse items-center justify-end gap-2 w-full">
              <RefreshIcon sx={{ marginTop: "20px", color: "gray" }} />
              <RenderField
                name="OLD_KEY"
                label="رقم المفتاح القديم"
                control={control}
                errors={errors}
                required={false}
              />
            </div>
          </TwoColumns>
          <TwoColumns>
            <RenderField
              name="tent_name"
              label="الاسم"
              control={control}
              errors={errors}
              required={false}
              disabled={disabledFields.includes("tent_name")}
            />
            <RenderField
              name="BILNG_DATE"
              label="تاريخ الدورة"
              control={control}
              errors={errors}
              type="date"
              disabled={disabledFields.includes("BILNG_DATE")}
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="pr_read1"
              label="القراءة السابقة"
              control={control}
              errors={errors}
              required={false}
              disabled={disabledFields.includes("pr_read1")}
            />
            <RenderField
              name="cr_reading"
              label="القراءة الحالية"
              control={control}
              errors={errors}
              type="number"
              disabled={disabledFields.includes("cr_reading")}
            />
          </TwoColumns>
          <TwoColumns>
            <RenderField
              name="consump"
              label="الاستهلاك"
              control={control}
              errors={errors}
              required={false}
              disabled={disabledFields.includes("consump")}
            />
            <RenderField
              name="CONN_AVRG_CONSUMP"
              label="المتوسط"
              control={control}
              errors={errors}
              type="number"
              disabled={disabledFields.includes("CONN_AVRG_CONSUMP")}
            />
          </TwoColumns>
          <TwoColumns>
            <RenderField
              name="MODIFIED_AVRG_CONSUMP"
              label="المتوسط المعدل"
              control={control}
              errors={errors}
              required={false}
              disabled={disabledFields.includes("MODIFIED_AVRG_CONSUMP")}
            />
            <RenderSelect
              name="note"
              label="ملاحظات"
              control={control}
              errors={errors}
              options={noteOptions}
              disabled={disabledFields.includes("note")}
            />
          </TwoColumns>
          <RenderCheckbox
            name="disable_mobile_edit"
            label="عدم السماح للوحدة المحمولة بتعديل القراءة"
            control={control}
            watch={watch}
          />
        </>
      );
    }
    /////////////تغيير حالة عداد////////////////
    case "change_meter_status": {
      const custkeyValue = watch("CUSTKEY");
      return (
        <>
          <div className="flex flex-row-reverse items-center justify-end gap-2 w-full">
            <RefreshButton
              paramName="cuskey"
              valueToFetch={custkeyValue}
              fetchFn={GetCustomerReader}
              onFetchComplete={onFetchComplete}
            />
            <RenderField
              name="CUSTKEY"
              label="رقم العميل"
              control={control}
              errors={errors}
              required
              disabled={disabledFields.includes("CUSTKEY")}
            />
          </div>

          <TwoColumns>
            <RenderField
              name="tent_name"
              label="الاسم"
              control={control}
              errors={errors}
              disabled={disabledFields.includes("tent_name")}
            />

            <RenderField
              name="BILNG_DATE"
              label="تاريخ الدورة"
              control={control}
              errors={errors}
              type="date"
              disabled={disabledFields.includes("BILNG_DATE")}
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="BOOK_NO_C"
              label="السجل"
              control={control}
              errors={errors}
              disabled={disabledFields.includes("BOOK_NO_C")}
            />

            <RenderField
              name="WALK_NO_C"
              label="المسار"
              control={control}
              errors={errors}
              type="text"
              disabled={disabledFields.includes("WALK_NO_C")}
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="meter_ref"
              label="رقم العداد"
              control={control}
              errors={errors}
              disabled={disabledFields.includes("meter_ref")}
            />

            <RenderField
              name="new_meter_ref"
              label="جديد"
              control={control}
              errors={errors}
              type="text"
            />
          </TwoColumns>
        </>
      );
    }
    ///////////طلب ادخال قراءة سابقة/////////////
    case "request_previous_reading": {
      const custkeyValue = watch("CUSTKEY");
      return (
        <>
          <div className="flex flex-row-reverse items-center justify-end gap-2 w-full">
            <RefreshButton
              paramName="custkey"
              valueToFetch={custkeyValue}
              fetchFn={GetLastBilngReading}
              onFetchComplete={onFetchComplete}
            />
            <RenderField
              name="CUSTKEY"
              label="رقم الحساب"
              control={control}
              errors={errors}
              required
            />
          </div>
          <TwoColumns>
            <RenderField
              name="tent_name"
              label="اسم العميل"
              control={control}
              errors={errors}
              disabled
            />
            <RenderField
              name="Reading"
              label="القراءة السابقة"
              control={control}
              errors={errors}
              disabled={disabledFields.includes("Reading")}
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="oldreadingdate"
              label="تاريخ القراءة السابقة"
              control={control}
              errors={errors}
              type="date"
              disabled={disabledFields.includes("oldreadingdate")}
            />
            <RenderField
              name="IsInvoiced"
              label="مفوترة"
              control={control}
              errors={errors}
              // disabled={disabledFields.includes("IsInvoiced")}
              render={(field) => {
                const displayValue =
                  field.value === true
                    ? "نعم"
                    : field.value === false
                      ? "لا"
                      : "";
                return (
                  <TextField
                    value={displayValue}
                    size="small"
                    fullWidth
                    disabled
                    defaultValue={undefined}
                    sx={{
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#000",
                        backgroundColor: "#f0f0f0",
                      },
                    }}
                  />
                );
              }}
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="reading_id"
              label="القراءة"
              control={control}
              errors={errors}
              type="number"
              required
            />
            <RenderField
              name="date"
              label="تاريخ القراءة"
              control={control}
              errors={errors}
              type="date"
              required
            />
          </TwoColumns>

          <RenderField
            name="comment"
            label="سبب تعديل السابقة"
            control={control}
            errors={errors}
            type="text"
            required
            // disabled={disabledFields.includes("comment")}
          />
        </>
      );
    }
    /////////////////تعديل ملاحظة خط السير//////////////
    case "edit_sir_notes": {
      const custkeyValue = watch("CUSTKEY");
      return (
        <>
          <TwoColumns>
            <div className="flex flex-row-reverse items-center justify-end gap-2 w-full">
              <RefreshButton
                paramName="custkey"
                valueToFetch={custkeyValue}
                fetchFn={GetCustomerMeters}
                onFetchComplete={onFetchComplete}
              />
              <RenderField
                name="CUSTKEY"
                label="رقم الحساب"
                control={control}
                errors={errors}
                required
              />
            </div>
            <RenderField
              name="METER_ID"
              label="رقم العداد"
              control={control}
              errors={errors}
              type="text"
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="LNG"
              label="إحداثي X"
              control={control}
              errors={errors}
              disabled={disabledFields.includes("LNG")}
            />
            <RenderField
              name="LAT"
              label="إحداثي Y"
              control={control}
              errors={errors}
              disabled={disabledFields.includes("LAT")}
            />
          </TwoColumns>

          <RenderField
            name="METAR_NOTE"
            label="الوصف"
            control={control}
            errors={errors}
          />
        </>
      );
    }

    default:
      return null;
  }
};
