export interface TAX {
  Billgroup?: string;
  BookNo?: string;
  Walkno?: string;
  CycleId?: number;
  HasError?: boolean;
  AffectedRows?: number;
  Status?: number;
  Period?: number;
}

export interface GETSTATUSREQ {
  billgroup?: string;
  book_no?: string;
  walk_no?: string;
  bilng_date?: string;
  searchkey?: string;
}
export interface ADDPAYTAXPORTALREQ {
  custkey?: string;
  payment_no?: number;
  bilng_date: string;
}
