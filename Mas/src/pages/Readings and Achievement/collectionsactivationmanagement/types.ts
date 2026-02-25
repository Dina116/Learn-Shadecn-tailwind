import type z from "zod";
import { formSchema } from "./form/formSchema";
import type { Control, FieldErrors, UseFormWatch } from "react-hook-form";

export type MarfetingFormInputType = z.input<typeof formSchema>;
export type MarfetingFormType = z.output<typeof formSchema>;

export interface MarfetingFormRef {
  submit: () => void;
}

export type DialogProps = {
  onSuccessfulSubmit: (data: MarfetingFormType) => void;
  data?: MarfetingFormType[];
  title?: string;
  id: string;
  isDialogOpen?: boolean;
  formRef?: React.RefObject<MarfetingFormRef | null>;
  handleFormSubmit?: React.FormEventHandler<HTMLFormElement>;
  handleCloseDialog?: () => void;
  handleSave?: () => void;
  control?: Control<MarfetingFormInputType>;
  errors?: FieldErrors<MarfetingFormInputType>;
  watch?: UseFormWatch<MarfetingFormInputType>;
};
export interface Plan {
  ID: number;
  DESCRIPTION: string;
}
export type FilterFormProps = {
  onSubmit: (data: GETMARKETINGPLANREQ) => void;
};

export type MarketingTableProps = {
  apiResponse: MARKETINGRESULT | undefined;
  isLoading?: boolean;
  selectedBillGroups: string[];
  onSelectionChange: (selectedKeys: string[]) => void;
  onExecute: () => void;
};
export interface GETMARKETINGPLANREQ {
  refAmount: number | undefined;
  bilngDate: Date | string;
  noMonthes: number | undefined;
  target: string | undefined;
  rejected: string | undefined;
  plan_id: number;
}
export interface TransCode {
  TRANS_TYPE: number;
  TRANS_STYPE: number;
}
export interface MARKETINGRESULT {
  CUSTKEY: string;
  REF_AMOUNT: number;
  BILNG_DATE: string;
  TOTAL_COUNT: number;
  TOTAL_AMOUNT: number | null;
  LARG_COUNT: number;
  LARG_AMOUNT: number | null;
  TARGET_COUNT: number;
  TARGET_AMOUNT: number | null;
  ACTUAL_COUNT: number;
  ACTUAL_AMOUNT: number | null;
  NO_MONTHES: number;
  BILLGROUP: string;
  DETAILS: MARKETINGRESULT[];
  TRANS_CODES: TransCode[];
  CUSTOMERS: string[];
}

export interface MarketingPlansList {
  ID: number;
  DESCRIPTION: string;
  NO_MONTHS: number;
  AMOUNT: number;
  STAMP_DATE: Date | string;
  STAMP_USER: string;
}
