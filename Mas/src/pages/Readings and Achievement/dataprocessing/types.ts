import type React from "react";
import type { formSchema } from "./form/formSchema";
import type z from "zod";
import type { Control, FieldErrors, UseFormWatch } from "react-hook-form";
import type { WalkFormSchema } from "./readings/printreadings/WalkFormSchema";

export type formInputDataType = z.input<typeof formSchema>;
export type formtDataType = z.output<typeof formSchema>;

export type WalkFormProps = {
  onSubmit?: (data: WalkFormValues) => void;
};
export type WalkFormUIRef = {
  submit: () => void;
};
export type ReaderCellProps = {
  shownameWithId?: boolean;
  selectedReaderId: number;
  readers: Readers[];
  getOptionDisabled?: (option: Readers) => boolean;
  onReaderChange?: (newCollectorId: number) => void;
};
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

export type PaymentType = {
  TYPE_ID: number;
  DESCRIPTION: string;
  BILING_CODE: string;
  IS_SYSTEM: boolean;
  SELECTABLE: boolean;
  SELECTABLE_HH: boolean;
  ID: number;
};
export type ChangePaymentFieldsProps = {
  collectors: Collectors[];
  isSearchByAccount: boolean;
  onSearchTypeChange: (isByAccount: boolean) => void;
  accountNumber: string;
  onAccountNumberChange: (value: string) => void;
  selectedCollectorId: number | null;
  onCollectorChange: (id: number | null) => void;
  onSearch: () => void;
};

export type IActivityType = {
  id: number;
  title: string;
  filter: string;
};

export type Readers = {
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

export interface ReadersFormRef {
  submit: () => void;
}
export type redaersDialogProps = {
  data: Readers[];
  title?: string;
  id?: string;
  isDialogOpen?: boolean;
  formRef?: React.RefObject<ReadersFormRef | null>;
  handleFormSubmit?: (params: ReaderFormValues) => void;
  handleSave?: () => void;
  handleCloseDialog?: () => void;
};
export type ReaderFormValues = {
  readerId: number;
  activityId: number;
  consumpFrom?: number;
  consumpTo?: number;
};
export type SubmitParams = {
  empId?: number;
  group?: string;
  path?: string;
  book?: string;
  filter?: string;
};
export type QueryParams = {
  empId?: number;
  group?: string;
  path?: string;
  book?: string;
  filter?: string;
};

export type renderFormProps = {
  readers: Readers[];
  onSubmit?: (data: ReaderFormValues) => void;
};

export type WalkFormValues = z.infer<typeof WalkFormSchema>;

export type walkingDialogProps = {
  data?: WalkFormValues;
  title?: string;
  id?: string;
  isDialogOpen?: boolean;
  formRef?: React.RefObject<ReadersFormRef | null>;
  handleFormSubmit?: (params: WalkFormValues) => void;
  handleSave?: () => void;
  handleCloseDialog?: () => void;
};
export type SubmitParamsFromWalkForm = {
  group: string;
  path: string;
  book: string;
  filter?: string;
};
export type PrintReadingsProps = {
  onSubmit?: (params: SubmitParamsFromWalkForm) => void;
};

export type ReadingDataType = {
  STATION_NO: number;
  CUSTKEY: string;
  CYCLE_ID: number;
  BILNG_DATE: string;
  no_units: number;
  c_type: string;
  READ_TYPE: number;
  cl_blnce: number;
  OP_BLNCE: number;
  CUR_CHARGES: number;
  S_CONSUMP: number;
  S_CR_READING: number;
  S_PR_READING: number;
  S_METER_STATUS: string;
  CONN_STATUS: number;
  NO_METER: boolean;
  CONSUMP_SANITARY: number;
  AGREM_REMINDER_AMOUNT: number;
  AGREM_REMINDER_COUNT: number;
  DIAM_OWNER_DESC: string;
  BILLGROUP: string;
  BOOK_NO_C: string;
  WALK_NO_C: string;
  BOOK_NO_R: string;
  WALK_NO_R: string;
  EMPID_C: number;
  IS_READING_ROW: number;
  IS_COLLECTION_ROW: number;
  delivery_st: number;
  payment_no: string;
  STATM_NO: number;
  READING_DEVICEID: string;
  COLLECTION_DEVICEID: string;
  SEQ_NO_C: number;
  SEQ_NO_R: number;
  tent_name: string;
  meter_type: string;
  meter_ref: string;
  ua_adress1: string;
  prop_ref: string;
  PR_DATE1: string;
  pr_read1: number;
  descrepancy: number;
  op_status: number;
  min_consump: number;
  max_consump: number;
  ctypegrp_id: string;
  serv_aloc: string;
  READING_NOTE: number;
  COLLECTION_NOTE: number;
  EMPID_R: number;
  OLD_KEY: string;
  UPDATE_COUNT_C: number;
  SYNC_COUNT_C: number;
  UPDATE_COUNT_R: number;
  SYNC_COUNT_R: number;
  LAT_REF: number;
  LNG_REF: number;
  IS_REF: boolean;
  DISTANCE_REF: number;
  HAFZA_PRINT_COUNT: number;
  GROUP_CODE: number;
  FILE_NO: number;
  ACCES_CODE: string;
  PR_ACCES_CODE: string;
  PR_OP_STATUS: number;
  NO_DIALS: number;
  INSTALMENT: number;
  CUR_PAYMNTS: number;
  BILL_READY: boolean;
  PR_CONS: number;
  CALC_TYPE: string;
  AMOUNT_COLLECTED: number;
  BILL_AMOUNT: number;
  DUE_AMOUNT: number;
  INSTALMENT_DATE: string;
  NO_UNITS_NEW: number;
  C_TYPE_NEW: string;
  CONNECTION_ID: number;
  PROPERTY_ID: number;
  METER_ID: number;
  GARD_PAYMENT_NO: string;
  IS_MULTI_CONN: boolean;
  TOTAL_CL_BLNCE: number;
  SYNC_MAS_ST: number;
  SYNC_MAS_HH: number;
  IS_MANUAL_ESTIM: boolean;
  CON_DIAMETER: string;
  METER_DIAMETER: string;
  SERIAL_NO: string;
  S_METER_DIAMETER: string;
  PR_READING_NOTE: number;
};

export type CustomerSeq = {
  bookno: string;
  walkno: string;
  mode: "READER" | "COLLECTOR" | "COLLECTOR_READER";
};

export type SubmitAction = "download" | "save" | "post" | "postMain";

export type loadWalksType = {
  BILLGROUP: string;
  BILNG_DATE: string | null;
  BOOK_NO_C: string;
  BOOK_NO_R: string;
  WALK_NO_C: string;
  WALK_NO_R: string;
  NEW_SEQ_C1?: number;
  NEW_SEQ_R1?: number;
  CYCLE_ID: number | null;
  CUSTKEY: string;
  SEQ_NO_C: number | null;
  SEQ_NO_R: number | null;
  NEW_SEQ_C: number | null;
  NEW_SEQ_R: number | null;
  IS_POSTED_C: boolean | null;
  IS_POSTED_R: boolean | null;
  POST_DATE: string | null;
  tent_name: string;
  PROP_REF: string;
};

export type RearrangementFormProps = {
  onDownload: (data: CustomerSeq) => void;
  onSave: (data: CustomerSeq) => void;
  onPost: (data: CustomerSeq) => void;
  loading: {
    download: boolean;
    save: boolean;
    post: boolean;
  };
};
