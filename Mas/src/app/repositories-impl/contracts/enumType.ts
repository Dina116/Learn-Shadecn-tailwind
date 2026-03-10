export interface EnumType {
  DESCRIPTION: string;
  ID: number;
  VALUE: string;
}

export interface PAYMENTMETHODSAPI {
  ID?: number;
  TYPE_ID?: number;
  DESCRIPTION?: string;
  BILING_CODE?: string;
  SELECTABLE?: boolean;
  IS_SYSTEM?: boolean;
  RECEIPT_CHARGE_AMOUNT1?: number;
  RECEIPT_CHARGE_PERCENTAGE1?: number;
  RECEIPT_CHARGE_TITLE1?: string;
  RECEIPT_CHARGE_AMOUNT2?: number;
  RECEIPT_CHARGE_PERCENTAGE2?: number;
  RECEIPT_CHARGE_TITLE2?: string;
  RECEIPT_CHARGE_AMOUNT3?: number;
  RECEIPT_CHARGE_PERCENTAGE3?: number;
  RECEIPT_CHARGE_TITLE3?: string;
  APPLY_MIN1?: number;
  APPLY_MAX1?: number;
  VALUE_MIN1?: number;
  VALUE_MAX1?: number;
  APPLY_MIN2?: number;
  APPLY_MAX2?: number;
  VALUE_MIN2?: number;
  VALUE_MAX2?: number;
  APPLY_MIN3?: number;
  APPLY_MAX3?: number;
  VALUE_MIN3?: number;
  VALUE_MAX3?: number;
  SELECTABLE_HH?: boolean;
}
