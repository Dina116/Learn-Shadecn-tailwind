/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConsumptionTypes } from '@/app/repositories-impl/contracts/Lookups';
import { CTGS } from '../entities/systemMangement/cTG';
import { BILLGROUPS } from '../entities/billGroups';
import { OPSTATUS } from '../entities/opStatus';
import { BILLSTATUS } from '../entities/billStatus';

export interface ILookupRepo {
  getCTGS: () => Promise<CTGS[]>;
  getConsumptionTypes: () => Promise<ConsumptionTypes[]>;
  getEmpTypes: () => Promise<Array<any>>;
  getBillGroups: () => Promise<BILLGROUPS[]>;
  getOpStatus: () => Promise<OPSTATUS[]>;
  getBillStatus: () => Promise<BILLSTATUS[]>;
  getReadingNote: () => Promise<Array<any>>;
}
