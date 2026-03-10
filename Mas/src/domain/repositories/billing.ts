import { CUSTOMERINFORMATION, GETLASTBILLINGREADINGREQ, TRUNCATEREQ } from '../entities/customerInformation';
import { CANCELSEWERREQ, HHttpActionResult } from '../entities/hhttpActionres';
import { IssueVerificationResultItem } from '../entities/issueVerify';
import { MODIFYPREVREADINGREQ, VERIFYISSUEREQ } from '../entities/reading';
import { READINGRECORD } from '../entities/readingRecord';

export interface IBillingRepo {
  getBillingInformation: (custkey: string) => Promise<CUSTOMERINFORMATION>;
  refreshCustomerBooks: (req:TRUNCATEREQ) => Promise<number>;
  UpdateBilngCustomerWalks: () => Promise<number>;
  RefreshMeterBooks: (req:TRUNCATEREQ) => Promise<number>;
  RefreshConsumptionTypes: (req:TRUNCATEREQ) => Promise<string[]>;
  GetLastBilngReading: (req:GETLASTBILLINGREADINGREQ) => Promise<READINGRECORD>;
  ModifyPrevReading: (req: MODIFYPREVREADINGREQ) => Promise<number>;
  CancelSewerService(req: CANCELSEWERREQ): Promise<HHttpActionResult>;
  VerifyIssue(req:VERIFYISSUEREQ): Promise<IssueVerificationResultItem[]>;
  RefreshBillGroups(req:TRUNCATEREQ): Promise<number>;
  RefreshConsumptionTypesGroups(req: TRUNCATEREQ): Promise<number>;
  RefreshAccessCodes(req: TRUNCATEREQ): Promise<number>
  RefreshAll(req: TRUNCATEREQ): Promise<number>
}
