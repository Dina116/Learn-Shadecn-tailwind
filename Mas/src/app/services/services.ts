import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import type { IService, IServiceConfig } from "@/domain/service";
import type { IGoAuthRepo } from "@/domain/repositories/goAuth";
import { GoAuthClient } from "@/domain/entities/_gen/GoAuth_pb.client";

interface IConstruc {
  grpcCongig: (isBiller?: boolean) => GrpcWebFetchTransport;
  httpConfig: IServiceConfig;
}
export class GrpcHttpService implements IService {
  goAuthClient: IGoAuthRepo;
  constructor(props: IConstruc) {
    this.goAuthClient = new GoAuthClient(props.grpcCongig());
  }
}
