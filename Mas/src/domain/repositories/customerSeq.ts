/* eslint-disable @typescript-eslint/no-explicit-any */
import { BOOKSEQREQ, CUSTOMERSEQ } from '../entities/customerSeq';
import { Ipostreq } from '../entities/collection';

export interface ICustomerSeqRepo {
  getBookSeq: (
    req: BOOKSEQREQ,
  ) => Promise<CUSTOMERSEQ[]>;
  save: (req: CUSTOMERSEQ[]) => Promise<void>;
  post: (req: Ipostreq) => Promise<boolean>;
  postC: (req: Ipostreq) => Promise<void>;
  postR: (req: Ipostreq) => Promise<void>;
  postHq: (
    req: Ipostreq,
  ) => Promise<void>;
  PostToHqR(
    req: Ipostreq,
  ): Promise<any[]>;
  PostToHqC(
    req: Ipostreq,
  ): Promise<any[]>;
  SendToServer(
    req: Ipostreq,
  ): Promise<any[]>;
}
