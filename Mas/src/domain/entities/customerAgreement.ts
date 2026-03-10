import { AGREEMINSTALMENT } from './agreemInstalment';

export interface CustAgreem {
  agrmNo?: number;
  custkey?: string;
  agrmRef?: string;
  effDate?: string | null;
  completionDate?: string | null;
  agrmValue?: number;
  agrmImmpay?: number;
  immpayRcptno?: string;
  noInstalments?: number;
  reminderNoInstalments?: number;
  reminderAmount?: number;
  instlmAmount?: number;
  agrmType?: number;
  agrmStatus?: number;
  trnsType?: number;
  trnsStype?: number;
  instalmentsList: AGREEMINSTALMENT[];
  agremName?: string;
}
