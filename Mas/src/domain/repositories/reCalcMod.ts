/* eslint-disable @typescript-eslint/no-explicit-any */
import { CUSTMODDATA, GETRECALCMODIFYINVICEREQ } from '../entities/custModData';
import { FILLRECALCREQ, FILLRECALCRES } from '../entities/fillRecalcres';
import { IHHProcessResponceMessage } from '../entities/hhProcessResponseMessage';
import { METERCONDITION } from '../entities/meterCondition';
import { METERSIZE } from '../entities/meterSize';
import {
  MODIFYRECALCREQ,
  MODIFYRECALCRES,
} from '../entities/modifyAndExcuteRecalc';
import { CTGS } from '../entities/systemMangement/cTG';

export interface IReCalcModifyInvoices {
  GetRecalModifyInvoices: (req: GETRECALCMODIFYINVICEREQ) => Promise<void>;
  GetCustomerData: (custkey: string) => Promise<CUSTMODDATA>;
  LoadMeterConditions(): Promise<METERCONDITION[]>;
  LoadMeterSize(): Promise<METERSIZE[]>;
  PostCustomerData(req: CUSTMODDATA): Promise<IHHProcessResponceMessage>;
  FillRecal(req: FILLRECALCREQ): Promise<FILLRECALCRES>;
  ModifyAndExecute(
    req: MODIFYRECALCREQ,
    data: MODIFYRECALCRES,
  ): Promise<FILLRECALCRES>;
  getCTG(): Promise<CTGS[]>;
}
