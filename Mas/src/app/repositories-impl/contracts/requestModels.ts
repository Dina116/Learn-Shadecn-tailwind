export interface BillgroupbookwalkApi {
  station_no?: number;
  BILLGROUP?: string;
  BOOK_NO?: string;
  WALK_NO?: string;
  deviceid?: string;
  collected?: string;
  colector?: string;
  readed?: number;
  from?: number;
  to?: number;
  effDate?: Date | string;
  last?: boolean;
  biling?: boolean;
  empid?: string | number;
  order?: string;
  isPost?: boolean;
}

export interface BillgroupbookwalkbilngApi extends BillgroupbookwalkApi {
  bilng_date?: Date | string;
  groups?: string;
}

export interface PostReq {
  empid?: number;
  Amount?: number;
  Count: number;
  ReciptNo: string;
  postToBilling?: boolean;
  cashBoxDepositId?: number;
}

export interface Billgroupbookwalk2 {
  billgroup?: string;
  book_no?: string;
  walk_no?: string;
}

export interface Billgroupbookwalk2bilngApi extends Billgroupbookwalk2 {
  bilng_date?: Date | string;
}
