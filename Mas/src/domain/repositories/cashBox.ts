import {
  CollectionDestributionItm,
  UNPOSTEDReCEIPTSByBILLINGDATEREQ,
} from '../entities/collection';
import {
  ADDNEWRECEIPTREQ,
  ADDNRWRECEIPTRES,
  CASHBOXSESSION,
  CLOSESESSIONREQ,
  STARTNEWSEESIONREQ,
} from '../entities/cashboxSession';
import { Iresponse } from '@/app/repositories-impl/http/cashBox';
import {
  CASHBOX,
  DELETECASHBOXREQ,
  SESSIONRECEIPTS,
  UBDATECHASHBOXREQ,
} from '../entities/systemMangement/cashBox';

export interface ICashBoxRepo {
  GetCashBox: () => Promise<CASHBOX[]>;
  UpdateChashBox: (req: UBDATECHASHBOXREQ) => Promise<Iresponse>;
  AddCashBox: (req: CASHBOX) => Promise<Iresponse>;
  DeleteCashBox: (req: DELETECASHBOXREQ) => Promise<Iresponse>;
  GetMySession: () => Promise<CASHBOXSESSION>;
  GetUnPostedReceiptsGroupByBilngDate: (
    req: UNPOSTEDReCEIPTSByBILLINGDATEREQ,
  ) => Promise<CollectionDestributionItm[]>;
  StartNewSession(req: STARTNEWSEESIONREQ): Promise<CASHBOXSESSION>;
  CloseSession(req: CLOSESESSIONREQ): Promise<string>;
  AddNewReceipt(req: ADDNEWRECEIPTREQ): Promise<ADDNRWRECEIPTRES>;
  SessionReceipts(): Promise<SESSIONRECEIPTS[]>; // TODO
}
