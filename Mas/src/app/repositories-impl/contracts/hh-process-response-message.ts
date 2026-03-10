import { IPullStatmentReply } from '@/domain/entities/hhProcessResponseMessage';
import { CollectionDestributionItem } from './collectionDestributionItem';

export enum ProcessStatus {
  NOT_PROCESSED,
  RUNNING,
  SUCCEED,
  FAILED,
  OTHER,
  SUCCSSED_PARTIAL,
}

export interface HHProcessResponceMessageApi {
  Custkey: string;
  Billgroup: string;
  BookNo: string;
  Walkno: string;
  CycleId: number;
  BilngDate: string | null;
  ProcessId: string;
  User: string;
  RemoteAddress: string;
  HasError: boolean;
  ErrorMessage: string;
  AffectedRows: number;
  Status: ProcessStatus;
  StartDate: string | null;
  EndDate: string | null;
  Period: number;
  Description: string;
  DeviceId: string;
  Deleted: number | null;
  Inserted: number | null;
  Updated: number | null;
  DepositId: number | null;
  Payment?: CollectionDestributionItem;
  PullStatmentsReply:IPullStatmentReply
}
