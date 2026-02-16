import type { formInputDataType } from "../types";
import type { Control, FieldErrors, UseFormWatch } from "react-hook-form";
import { RenderCheckbox, RenderField } from "./components/FormFields";
import { TwoColumns } from "./components/LayoutHelpers";

type Props = {
  id: string;
  control: Control<formInputDataType>;
  errors: FieldErrors<formInputDataType>;
  watch: UseFormWatch<formInputDataType>;
};

export const renderForm = ({ id, control, errors, watch }: Props) => {
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
            name="custkey"
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
              <RenderField
                name="payment_no"
                label="رقم الفاتورة"
                control={control}
                errors={errors}
                required
              />
              <RenderField
                name="custkey"
                label="رقم الحساب"
                control={control}
                errors={errors}
              />
            </TwoColumns>
          ) : (
            <TwoColumns>
              <RenderField
                name="payment_no"
                label="رقم الفاتورة"
                control={control}
                errors={errors}
              />
              <RenderField
                name="custkey"
                label="رقم الحساب"
                control={control}
                errors={errors}
                required
              />
            </TwoColumns>
          )}

          <RenderField
            name="name"
            label="الاسم"
            control={control}
            errors={errors}
          />

          <TwoColumns>
            <RenderField
              name="current_balance"
              label="الرصيد"
              control={control}
              errors={errors}
            />
            <RenderField
              name="cycleDate"
              label="تاريخ الدورة"
              control={control}
              errors={errors}
              type="date"
              required
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
            name="enableInstallment"
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
            name="preventStatusEdit"
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

      return (
        <>
          <RenderCheckbox
            name="searchByInvoice"
            label="البحث باستخدام رقم الفاتورة"
            control={control}
            watch={watch}
          />

          {searchByInvoice ? (
            <TwoColumns>
              <RenderField
                name="payment_no"
                label="رقم الفاتورة"
                control={control}
                errors={errors}
                required
              />
              <RenderField
                name="custkey"
                label="رقم الحساب"
                control={control}
                errors={errors}
              />
            </TwoColumns>
          ) : (
            <TwoColumns>
              <RenderField
                name="payment_no"
                label="رقم الفاتورة"
                control={control}
                errors={errors}
              />
              <RenderField
                name="custkey"
                label="رقم الحساب"
                control={control}
                errors={errors}
                required
              />
            </TwoColumns>
          )}

          <TwoColumns>
            <RenderField
              name="name"
              label="الاسم"
              control={control}
              errors={errors}
              required
            />
            <RenderField
              name="operationCode"
              label="كود العملية"
              control={control}
              errors={errors}
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="collectionDate"
              label="تاريخ التحصيل"
              control={control}
              errors={errors}
              type="date"
            />
            <RenderField
              name="invoiceAmount"
              label="قيمة الفاتورة"
              control={control}
              errors={errors}
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="collectedAmount"
              label="المبلغ المحصل"
              control={control}
              errors={errors}
            />
            <RenderField
              name="cycleDate"
              label="تاريخ الدورة"
              control={control}
              errors={errors}
              type="date"
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="paymentMethod"
              label="طريقة الادخال"
              control={control}
              errors={errors}
            />
            <RenderField
              name="paymentType"
              label="نوع السداد"
              control={control}
              errors={errors}
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="collector"
              label="اسم المحصل"
              control={control}
              errors={errors}
            />
            <RenderField
              name="collectionType"
              label="نوع التحصيل"
              control={control}
              errors={errors}
            />
          </TwoColumns>
        </>
      );
    }

    case "disable_receipt_posting":
      return (
        <>
          <RenderField
            name="custkey"
            label="رقم الحساب"
            control={control}
            errors={errors}
            required
          />
          <RenderField
            name="payment_no"
            label="رقم الفاتورة"
            control={control}
            errors={errors}
            required
          />
          <RenderField
            name="payment_no"
            label="كود الايصال"
            control={control}
            errors={errors}
            required
          />
        </>
      );

    case "edit_customer_reading": {
      return (
        <>
          <RenderField
            name="custkey"
            label="رقم الحساب"
            control={control}
            errors={errors}
            required
          />
          <TwoColumns>
            <RenderField
              name="sub_number"
              label="رقم الاشتراك"
              control={control}
              errors={errors}
              required={false}
            />
            <RenderField
              name="oldcustkey"
              label="رقم المفتاح القديم"
              control={control}
              errors={errors}
              required={false}
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="name"
              label="الاسم"
              control={control}
              errors={errors}
              required={false}
            />
            <RenderField
              name="cycleDate"
              label="تاريخ الدورة"
              control={control}
              errors={errors}
              type="date"
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="oldreading"
              label="القراءة السابقة"
              control={control}
              errors={errors}
              required={false}
            />
            <RenderField
              name="currentreading"
              label="القراءة الحالية"
              control={control}
              errors={errors}
              type="number"
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="consumption"
              label="الاستهلاك"
              control={control}
              errors={errors}
              required={false}
            />
            <RenderField
              name="avarege"
              label="المتوسط"
              control={control}
              errors={errors}
              type="number"
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="MODIFIED_AVRG_CONSUMP"
              label="المتوسط المعدل"
              control={control}
              errors={errors}
              required={false}
            />
            <RenderField
              name="note"
              label="ملاحظات"
              control={control}
              errors={errors}
              type="text"
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

    case "change_meter_status": {
      return (
        <>
          <RenderField
            name="custkey"
            label="رقم العميل"
            control={control}
            errors={errors}
            required
          />
          <TwoColumns>
            <RenderField
              name="name"
              label="الاسم"
              control={control}
              errors={errors}
            />

            <RenderField
              name="cycleDate"
              label="تاريخ الدورة"
              control={control}
              errors={errors}
              type="date"
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="book"
              label="السجل"
              control={control}
              errors={errors}
            />

            <RenderField
              name="walk"
              label="المسار"
              control={control}
              errors={errors}
              type="text"
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="meter_no"
              label="رقم العداد"
              control={control}
              errors={errors}
            />

            <RenderField
              name="new_meter_type"
              label="جديد"
              control={control}
              errors={errors}
              type="text"
            />
          </TwoColumns>
        </>
      );
    }
    case "request_previous_reading": {
      return (
        <>
          <RenderField
            name="custkey"
            label="رقم الحساب"
            control={control}
            errors={errors}
            required
          />
          <TwoColumns>
            <RenderField
              name="name"
              label="اسم العميل"
              control={control}
              errors={errors}
            />
            <RenderField
              name="oldreading"
              label="القراءة السابقة"
              control={control}
              errors={errors}
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="oldreadingdate"
              label="تاريخ القراءة السابقة"
              control={control}
              errors={errors}
              type="date"
            />
            <RenderField
              name="is_invoiced"
              label="مفوترة"
              control={control}
              errors={errors}
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
              name="oldreadingdate"
              label="تاريخ القراءة"
              control={control}
              errors={errors}
              type="date"
              required
            />
          </TwoColumns>

          <RenderField
            name="description"
            label="سبب تعديل السابقة"
            control={control}
            errors={errors}
            type="text"
            required
          />
        </>
      );
    }

    case "edit_sir_notes": {
      return (
        <>
          <TwoColumns>
            <RenderField
              name="custkey"
              label="رقم الحساب"
              control={control}
              errors={errors}
              required
            />
            <RenderField
              name="meter_no"
              label="رقم العداد"
              control={control}
              errors={errors}
              type="text"
            />
          </TwoColumns>

          <TwoColumns>
            <RenderField
              name="x_coordinate"
              label="إحداثي X"
              control={control}
              errors={errors}
            />
            <RenderField
              name="y_coordinate"
              label="إحداثي Y"
              control={control}
              errors={errors}
            />
          </TwoColumns>

          <RenderField
            name="description"
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
