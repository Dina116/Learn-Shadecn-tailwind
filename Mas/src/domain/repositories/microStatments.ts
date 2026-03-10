import { Empty } from '../entities/_gen/biller-sys_pb';
import { VersionResponse } from '../entities/_gen/common_pb';
import {
  PullStatmentsReq,
  PullStatmentsReply,
  HistoryRequest,
  HistoryReply,
} from '../entities/_gen/statments_pb';
import { MyResponse } from './grpc';

export interface IMicroStatments {
  version(input: Empty): MyResponse<VersionResponse>;
  pullStatmentsFromBilling(
    input: PullStatmentsReq,
  ): MyResponse<PullStatmentsReply>;
  getHistory(input: HistoryRequest): MyResponse<HistoryReply>;
}
