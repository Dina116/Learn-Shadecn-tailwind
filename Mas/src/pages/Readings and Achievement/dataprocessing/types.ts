import type React from "react";
import type { formSchema } from "./form/formSchema";
import type z from "zod";
import type { Control, FieldErrors, UseFormWatch } from "react-hook-form";

export type formInputDataType = z.input<typeof formSchema>;
export type formtDataType = z.output<typeof formSchema>;

export type DialogProps = {
  data?: formtDataType[];
  title?: string;
  id: string;
  isDialogOpen?: boolean;
  formRef?: React.RefObject<FormUIRef | null>;
  handleFormSubmit?: React.FormEventHandler<HTMLFormElement>;
  handleSave?: () => void;
  handleCloseDialog?: () => void;
  control: Control<formInputDataType>;
  errors: FieldErrors<formInputDataType>;
  watch: UseFormWatch<formInputDataType>;
};

export interface FormUIRef {
  submit: () => void;
}

export type SelectOption = {
  value: string | number;
  label: string;
};

export type Collectors = {
  ID: number;
  USER_NAME: string;
  PASSWORD: string;
  FULL_NAME: string;
  DEVICE_ID: string;
  BRANCH_ID: number;
  READING: boolean;
  COLLECTION: boolean;
  ENABLE_HH_PRINTING: boolean;
};

export type Emp = {
  ID: number;
  USER_NAME: string;
  PASSWORD: string;
  FULL_NAME: string;
  DEVICE_ID: string;
  BRANCH_ID: number;
  DISABLED: boolean;
  READING: boolean;
  COLLECTION: boolean;
  REPORTING_VIEWER: boolean;
  CASHER: boolean;
  EMP_TYPE: number;
  MARKETING: boolean;
  CLOSE_READING_CYCLE: boolean;
  CLOSE_COLLECTION_CYCLE: boolean;
  ENABLE_HH_PRINTING: boolean;
};

export type UnpostedDetail = {
  PAYMENT_NO: string;
  RECEIPT_NO: string;
  COLLECTED_AMOUNT: number;
  COLLECTED_COUNT: number;
  CASH_COLLECTED_AMOUNT: number;
  COLLECTION_DATE: string;
  CL_BLNCE: number;
  IS_CHEQUE: boolean;
  IS_COLLECTED_BY_OWNER: boolean;
  IS_COLLECTED_BY_OTHER: boolean;
  PAYMENT_METHOD_ID: number;
  PAYMENT_METHOD: string;
  OWNER: string;
  OWNER_ID: number;
  IS_HH_PRINTING: boolean;
  LAST_FOR_COLLECT_CYCLE: boolean;
  IS_CODY: boolean;
  DTO_CASH_AMOUNT: number;
  DTO_FEES_COLLECTED_AMOUNT: number;
  DTO_OTHER_AMOUNT: number;
  STATION_NO: number;
  EMP_ID: number;
  CUSTKEY: string;
  SEQ_NO: number;
  KEY: string;
  ISSUED_AMOUNT: number;
  ISSUED_COUNT: number;
  BILLGROUP: string;
  BILNG_DATE: string;
  BOOK_NO: string;
  WALK_NO: string;
  CYCLE_ID: number;
  SURNAME: string;
  HAS_ERORR: boolean;
};

export type mistakeTableTypes = {
  message: string;
  timestamp: string;
  payment_no?: string;
};
export type MistakesDialogProps = {
  data: mistakeTableTypes[];
};

export type BillsFieldsProps = {
  collectors: Collectors[];
  selectedCollectorId: number | null;
  onCollectorChange: (id: number | null) => void;
  isLoadingDetails: boolean;
  onCollectError: (errorMessage: string) => void;
};
