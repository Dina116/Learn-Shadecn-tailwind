import React, { forwardRef, useImperativeHandle } from "react";
import { renderForm } from "./FormCases";
import type { formtDataType, FormUIRef, formInputDataType } from "../types";
import type { Control, FieldErrors, UseFormWatch } from "react-hook-form";

type Props = {
  control: Control<formInputDataType>;
  errors: FieldErrors<formInputDataType>;
  id: string;
  watch: UseFormWatch<formInputDataType>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  data?: formtDataType[];
};

const FormUI = forwardRef<FormUIRef, Props>(
  ({ control, errors, id, watch, onSubmit }, ref) => {
    const formRef = React.useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => ({
      submit: () => {
        formRef.current?.requestSubmit();
      },
    }));

    return (
      <form
        ref={formRef}
        noValidate
        dir="rtl"
        style={{ padding: "16px" }}
        onSubmit={onSubmit}
      >
        {renderForm({ id, control, errors, watch })}
      </form>
    );
  },
);
export default FormUI;

// import {
//   Controller,
//   type Control,
//   type FieldErrors,
//   type UseFormWatch,
// } from "react-hook-form";
// import {
//   Box,
//   Checkbox,
//   FormControlLabel,
//   TextField,
//   Typography,
// } from "@mui/material";

// import type { formInputDataType, formtDataType, SelectOption } from "../types";

// type Props = {
//   formRef: React.RefObject<HTMLFormElement | null>;
//   control: Control<formInputDataType>;
//   errors: FieldErrors<formInputDataType>;
//   dataOptions: SelectOption[];
//   books: SelectOption[];
//   walks: SelectOption[];
//   id: string;
//   emp: SelectOption[];
//   watch: UseFormWatch<formInputDataType>;
// };
// const FormUI = ({ formRef, control, errors, id, watch }: Props) => {
//   /* ================= Layout helpers ================= */

//   const SectionRow = ({ children }: { children: React.ReactNode }) => (
//     <Box
//       sx={{
//         background: "#e5e7eb",
//         px: 2,
//         py: 1,
//         mt: 2,
//         borderRadius: 1,
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       {children}
//     </Box>
//   );

//   const TwoColumns = ({ children }: { children: React.ReactNode }) => (
//     <Box
//       sx={{
//         display: "grid",
//         gridTemplateColumns: "1fr 1fr",
//         gap: 2,
//         mt: 2,
//       }}
//     >
//       {children}
//     </Box>
//   );
//   /* ================= Inputs ================= */

//   const renderField = (
//     name: keyof formtDataType,
//     label: string,
//     type = "text",
//     required = false,
//   ) => (
//     <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
//       <Typography variant="body2" sx={{ fontWeight: "bold" }}>
//         {label} {required && <span style={{ color: "red" }}>*</span>}
//       </Typography>

//       <Controller
//         name={name}
//         control={control}
//         render={({ field }) => (
//           <TextField
//             {...field}
//             type={type}
//             size="small"
//             fullWidth
//             variant="outlined"
//             error={!!errors[name]}
//             helperText={errors[name]?.message as string}
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 backgroundColor: "#fcfcfc",
//               },
//             }}
//           />
//         )}
//       />
//     </Box>
//   );

//   /* ================= Checkbox ================= */

//   const renderCheckbox = (
//     name: keyof formtDataType,
//     label: string,
//     children?: React.ReactNode, // optional fields
//   ) => {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const value = watch?.(name as any);

//     return (
//       <>
//         <SectionRow>
//           <Controller
//             name={name}
//             control={control}
//             render={({ field }) => (
//               <FormControlLabel
//                 sx={{
//                   width: "100%",
//                   m: 0,
//                   justifyContent: "space-between",
//                 }}
//                 control={
//                   <Checkbox
//                     checked={!!field.value}
//                     onChange={(e) => field.onChange(e.target.checked)}
//                   />
//                 }
//                 label={<Typography fontWeight="bold">{label}</Typography>}
//                 labelPlacement="start"
//               />
//             )}
//           />
//         </SectionRow>

//         {value && children}
//       </>
//     );
//   };
//   const renderForm = () => {
//     switch (id) {
//       case "update_customer_invoices":
//         return (
//           <>
//             {renderCheckbox("includeInvoice", "إضافة الفاتورة")}
//             {renderField("custkey", "رقم الحساب", "text", true)}
//             {renderField("startDate", "تاريخ البدء", "date", true)}
//             {renderField("endDate", "تاريخ الانتهاء", "date", true)}
//           </>
//         );

//       case "add_invoice_collection": {
//         const includeInvoice = watch("includeInvoice");
//         return (
//           <>
//             {renderCheckbox("includeInvoice", "إضافة الفاتورة")}

//             {includeInvoice ? (
//               <TwoColumns>
//                 {renderField("payment_no", "رقم الفاتورة", "text", true)}
//                 {renderField("custkey", "رقم الحساب", "text", false)}
//               </TwoColumns>
//             ) : (
//               <TwoColumns>
//                 {renderField("payment_no", "رقم الفاتورة", "text", false)}
//                 {renderField("custkey", "رقم الحساب", "text", true)}
//               </TwoColumns>
//             )}
//             {renderField("name", "الاسم", "text", false)}

//             <TwoColumns>
//               {renderField("current_balance", "الرصيد", "text", false)}
//               {renderField("cycleDate", "تاريخ الدورة", "date", true)}
//             </TwoColumns>

//             {renderCheckbox(
//               "networkCollection",
//               "التحصيل بشبكات",
//               <TwoColumns>
//                 {renderField("chequeBank", "البنك", "text", true)}
//                 {renderField("chequeNo", "رقم الشيك", "text", true)}
//               </TwoColumns>,
//             )}

//             {renderCheckbox(
//               "enableInstallment",
//               "تفعيل الاستقطاعات",
//               <TwoColumns>
//                 {renderField("discount", "قيمة الاستقطاع", "text", true)}
//                 {renderField(
//                   "discountDocumentNo",
//                   "رقم مستند الاستقطاعات ",
//                   "text",
//                   true,
//                 )}
//               </TwoColumns>,
//             )}

//             {renderCheckbox(
//               "preventStatusEdit",
//               "عدم السماح للوحدة المحمولة بتعديل حالة التحصيل",
//             )}
//           </>
//         );
//       }
//       case "cancel_invoice_collection":
//       case "cancel_supplier_invoice_collection": {
//         const searchByInvoice = watch("searchByInvoice");

//         return (
//           <>
//             {renderCheckbox("searchByInvoice", "البحث باستخدام رقم الفاتورة")}

//             {searchByInvoice ? (
//               <TwoColumns>
//                 {renderField("payment_no", "رقم الفاتورة", "text", true)}
//                 {renderField("custkey", "رقم الحساب", "text", false)}
//               </TwoColumns>
//             ) : (
//               <TwoColumns>
//                 {renderField("payment_no", "رقم الفاتورة", "text", false)}
//                 {renderField("custkey", "رقم الحساب", "text", true)}
//               </TwoColumns>
//             )}
//             <TwoColumns>
//               {renderField("name", "الاسم", "text", true)}
//               {renderField("operationCode", "كود العملية")}
//             </TwoColumns>

//             <TwoColumns>
//               {renderField("collectionDate", "تاريخ التحصيل", "date")}
//               {renderField("invoiceAmount", "قيمة الفاتورة")}
//             </TwoColumns>

//             <TwoColumns>
//               {renderField("collectedAmount", "المبلغ المحصل")}
//               {renderField("cycleDate", "تاريخ الدورة", "date")}
//             </TwoColumns>

//             <TwoColumns>
//               {renderField("paymentMethod", "طريقة الادخال")}
//               {renderField("paymentType", "نوع السداد")}
//             </TwoColumns>

//             <TwoColumns>
//               {renderField("collector", "اسم المحصل")}
//               {renderField("collectionType", "نوع التحصيل")}
//             </TwoColumns>
//           </>
//         );
//       }

//       case "disable_receipt_posting":
//         return (
//           <>
//             {renderField("custkey", "رقم الحساب", "text", true)}
//             {renderField("payment_no", "رقم الفاتورة", "text", true)}
//             {renderField("billcode", "كود الايصال", "text", true)}
//           </>
//         );

//       default:
//         return null;
//     }
//   };
//   return (
//     <form ref={formRef} noValidate dir="rtl" style={{ padding: "16px" }}>
//       {renderForm()}
//     </form>
//   );
// };

// export default FormUI;
