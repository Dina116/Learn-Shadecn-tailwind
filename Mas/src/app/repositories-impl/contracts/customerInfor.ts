export interface CUSTOMERINFOAPI {
  CUSTKEY: string;
  PROP_REF: string;
  BILLGROUP: string;
  BOOK_NO: string;
  WALK_NO: string;
  SEQ_NO: number;
  PREV_CUSTKEY: string;
  OLD_KEY: string;
  SURNAME: string;
  ADDRESS: string;
  PropInfo: PropInfoApi;
  AGREEMS: CustAgreemApi[];
  STATMENTS: STATMENT[];
  STATION_NO: number | null;
  ALL_TRANSACTIONS: FTRANSACTIONApi[];

  UA_ADDRESS?: string;

  METER_REF?: string;

  PREV_PROP_REF?: string;

  NO_UNITS?: number;

  METER_DIAM?: string;

  METER_STATUS?: string;

  CONN_STATUS?: string;

  NID?: string;

  TAX_NO?: string;

  HAS_WATER?: boolean;

  HAS_SEWER?: boolean;

  INSTALL_DATE?: string;

  REMOVAL_DATE?: string;

  C_TYPE_DESCRIPTION?: string;

  METER_TYPE?: string;

  METER_MAKE?: string;
  CONN_DATE?: string;
}

export interface PropInfoApi {
  PROP_REF: string;
  WATER_SERVICE: boolean;
  SEWER_SERVICE: boolean;
  IS_MULTI_CTYPES: boolean;
  CTG: CustomerCtgApi[];
  ConnectionInfo: ConnectionInfoApi;
}

export interface CustomerCtgApi {
  CODE: string;
  DESCRIPTION: string;
  WATER_PERCENTAGE: number;
  SEWER_PERCENTAGE: number;
}

export interface ConnectionInfoApi {
  PROP_REF: string;
  CONNECTION_DATE: string | null;
  CONN_STATUS: number | null;
  MeterInfo: MeterInfoApi;
}

export interface MeterInfoApi {
  METER_TYPE: string;
  METER_REF: string;
  METER_CONDITION: string;
  OP_STATUS: number | null;
  STATUS: number | null;
  SIZE: string;
  MAKE: string;
  INSTALL_DATE: string | null;
  REMOVAL_DATE: string | null;
  CONVERSION_FACTOR: number | null;
  SERIAL_NO: string;
  METER_ID: number;
  READINGS: MeterRdgApi[];
  PROPERTY_ID: number | null;
  PROP_REF: string;
  INS_CYCLE_ID: number | null;
  UPD_CYCLE_ID: number | null;
  WTRANS_NO: number | null;
  STRANS_NO: number | null;
  NO_DIALS: number | null;
}

export interface MeterRdgApi {
  READING_NO: number | null;
  B_READING: number | null;
  CUR_DATE: string | null;
  IS_INVOICED: number | null;
  INVOICE_BILNG_DATE: string | null;
  IS_CANCELLED: boolean | null;
  METER_ID: number | null;
  METER_TYPE: string;
  METER_REF: string;
  READ_TYPE: number | null;
}

export interface CustAgreemApi {
  AGRM_NO: number | null;
  CUSTKEY: string;
  AGRM_REF: string;
  EFF_DATE: string | null;
  COMPLETION_DATE: string | null;
  AGRM_VALUE: number | null;
  AGRM_IMMPAY: number | null;
  IMMPAY_RCPTNO: string;
  NO_INSTALMENTS: number | null;
  REMINDER_NO_INSTALMENTS: number | null;
  REMINDER_AMOUNT: number | null;
  INSTLM_AMOUNT: number | null;
  AGRM_TYPE: number | null;
  AGRM_STATUS: number | null;
  TRNS_TYPE: number | null;
  TRNS_STYPE: number | null;
  Instalments: AgremInstalmentApi[];
}

export interface AgremInstalmentApi {
  INSTALMENT_NO: number;
  TRANS_NO: number | null;
  AMOUNT: number | null;
  INVOICE_DATE: string | null;
  CHARGE_DATE: string | null;
}

export interface FTRANSACTIONApi {
  TRANS_NO: number;
  AMOUNT: number;
  DESCRIPTION: string;
  DOCUMENT_NO: string;
  EFFECT_DTE: string | null;
  BILNG_DATE: string | null;
  MEMO_FLD: string;
  STATM_NO: number | null;
  TRNS_TYPE: number | null;
  TRNS_STYPE: number | null;
  CR_READING: number | null;
  PR_READING: number | null;
  CONSUMP: number | null;
  READ_TYPE: number | null;
  RUNNING_BLANCE: number | null;
}

export interface STATMENT {
  PAYMENT_NO: string;
  STATM_NO: number;
  CL_BLNCE: number | null;
  CUR_CHARGES: number | null;
  OP_BLNCE: number | null;
  INSTALMENT: number | null;
  BILNG_DATE: string;
  DELIVERY_ST: number;
  TRANSACTIONS: FTRANSACTIONApi[];
}
