import { GardRequest, GardResponse } from '../entities/_gen/bi_pb';
import { MyResponse } from './grpc';

/* eslint-disable @typescript-eslint/naming-convention */
export interface IMashh_biClient {
  // dashboradAppsMashh(req: Empty): unknown;
  getGovGard(input: GardRequest): MyResponse<GardResponse>;
}
