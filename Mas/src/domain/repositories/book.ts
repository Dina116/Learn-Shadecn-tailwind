import { BILLGROUPCYCLE } from '../entities/billGroupCycle';
import {
  CUSTOMERBOOK,
  CUSTOMERWALKREQ,
  UPDATECUSTOMERWALKREQ,
} from '../entities/book';
import { BOOKCYCLE } from '../entities/bookCycle';
import {
  METERWALK,
  METERWALKREQ,
  PUTMETERWALKREQ,
} from '../entities/meterWalk';
import {
  IBillGroupBookWalk,
  IBillGroupBookWalkBilng,
  SWITCHRREQ,
} from '../entities/reading';
import { CUSTOMERWALK } from '../entities/systemMangement/customerWalk';
import {
  BOOKIDREQ,
  WALKDELIVERY,
  WALKDELEVERYRESPONSE,
} from '../entities/walkDelivery';
import { METERBOOK } from '../entities/meterBook';
import { BookCycleForEmp, EmpIdReq } from '../entities/switchBooks';

export interface IBookRepo {
  getCustomerBookList: () => Promise<CUSTOMERBOOK[]>;
  getCustomerWalk: (req: CUSTOMERWALKREQ) => Promise<CUSTOMERWALK[]>;
  updateCustomerWalk: (req: UPDATECUSTOMERWALKREQ) => Promise<void>;
  meterWalks: (req: METERWALKREQ) => Promise<METERWALK[]>;
  SwitchHistory: (req: IBillGroupBookWalk) => Promise<WALKDELIVERY[]>;
  SwitchList: (req: IBillGroupBookWalkBilng) => Promise<BOOKCYCLE[]>;
  CustomerWalkCycle: (req: IBillGroupBookWalkBilng) => Promise<BOOKCYCLE[]>;
  MeterWalkCycle: (req: IBillGroupBookWalkBilng) => Promise<BOOKCYCLE[]>;
  BookCycle: (req: IBillGroupBookWalkBilng) => Promise<BOOKCYCLE[]>;
  Allow: (req: BOOKCYCLE) => Promise<BOOKCYCLE>;
  BookCycleFunc: (req: IBillGroupBookWalkBilng) => Promise<BOOKCYCLE[]>;
  BillingStatus: () => Promise<BILLGROUPCYCLE[]>;
  SwitchC: (req: IBillGroupBookWalk) => Promise<boolean>;
  SwitchR(req: SWITCHRREQ): Promise<boolean>;
  PutMeterWalk(req: PUTMETERWALKREQ): Promise<boolean>;
  BillGroupsStatus: () => Promise<BILLGROUPCYCLE[]>;
  CancelSwitchC(req: BOOKIDREQ): Promise<boolean>;
  SwitchDetails(req: BOOKIDREQ): Promise<WALKDELEVERYRESPONSE>;
  MeterBooks(): Promise<METERBOOK>;
  BillgroupsStatusBilingDate: (
    req: IBillGroupBookWalkBilng,
  ) => Promise<BILLGROUPCYCLE[]>;
  BookCycleByEmpId: (req?: EmpIdReq) => Promise<BookCycleForEmp[]>;
  UpdateBooksForEmp: (req: BookCycleForEmp[]) => Promise<boolean>;
}
