import type z from "zod";
import type { SwitchSchema } from "./SwitchSchema";

export type SwitchFormInput = z.input<typeof SwitchSchema>;

export type SwitchFormType = z.output<typeof SwitchSchema>;

export type SwitchFormProps = {
  onSubmit?: (formData: SwitchFormType) => void;
  defaultValues?: SwitchFormType;
  onClose?: () => void;
  emp: Collectors[];
};

export interface SwitchFormRef {
  submit: () => void;
}

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

export interface WalkPath {
  OWNERS: [];
  STATION_NO: number;
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_NO: string;
  CYCLE_ID: number;
  CYCLE_IDS: number[] | null;
  IS_COLLECTION: boolean;
  IS_READING: boolean;
  UNUSED: null;
  ASSIGNED_TO_HH: null;
  BILNG_DATE: string;
  BDB_CDB_C: null;
  BDB_CDB_DATE_C: string | null;
  BDB_CDB_USER_C: string | null;
  BDB_CDB_R: null;
  BDB_CDB_DATE_R: string | null;
  BDB_CDB_USER_R: string | null;
  CDB_HH_C: null;
  CDB_HH_DATE_C: string | null;
  CDB_HH_USER_C: string | null;
  CDB_HH_R: null;
  CDB_HH_DATE_R: string | null;
  CDB_HH_USER_R: string | null;
  HH_CDB_C: null;
  HH_CDB_DATE_C: string | null;
  HH_CDB_USER_C: string | null;
  HH_CDB_R: null;
  HH_CDB_DATE_R: string | null;
  HH_CDB_USER_R: string | null;
  CDB_BDB_C: null;
  CDB_BDB_DATE_C: string | null;
  CDB_BDB_USER_C: string | null;
  CDB_BDB_R: null;
  CDB_BDB_DATE_R: string | null;
  CDB_BDB_USER_R: string | null;
  ISCYCLE_COMPLETED_C: boolean | null;
  CLOSE_DATE_C: string | null;
  CLOSE_BY_C: string | null;
  ISCYCLE_COMPLETED_R: boolean | null;
  CLOSE_DATE_R: string | null;
  CLOSE_BY_R: string | null;
  DEVICEID_R: string | null;
  DEVICEID_C: string | null;
  WALK_DESCRIPTION: string | null;
  BILNG_DESCRIPTION: string | null;
  IS_ALLOWED_C: boolean | null;
  IS_ALLOWED_R: boolean | null;
  IS_READY_C: boolean | null;
  IS_READY_R: boolean | null;
  COUNT_C: number | null;
  COUNT_R: number | null;
  EMPID_C: number | null;
  EMPID_R: number | null;
  COLLECTED_AMOUNT: number | null;
  ISSUED_AMOUNT: number | null;
  ISSUED_COUNT: number | null;
  COLLECTED_COUNT: number | null;
  READED_COUNT: number | null;
  REACHED_C: number | null;
  REACHED_R: number | null;
  IS_METER_BOOK: boolean | null;
  IS_CUSTOMER_BOOK: boolean | null;
  IS_REVIRSE_C: boolean | null;
  IS_REVIRSE_R: boolean | null;
  ISCLOSED_INDEVICE_C: boolean | null;
  ISCLOSED_INDEVICE_R: boolean | null;
  GARD_OK: boolean | null;
  ALLOW_FAWRY: boolean | null;
  MARKETING: null;
  BILLS: [];
  READER: null;
  COLLECTOR: null;
  WALK_DELIVERY_ID: number | null;
  SKIP: boolean;
  ALLOW_TAX_PORTAL: boolean | null;
  ALLOW_TAX_PORTAL_BY: string | null;
  ALLOW_TAX_PORTAL_DATE: string | null;
  COUNT_CYCLES: number;
  ALL_BILL_DATE: boolean;
  Cycles: [];
  IS_ALLOWED_C_FRONT: boolean;
  IS_ALLOWED_R_FRONT: boolean;
}
