import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import { HttpActionDevicesRepo } from "../app/repositories-impl/http/actionDevices";
import { HttpAuthRepo } from "../app/repositories-impl/http/auth";
import { HttpBadConnectsRepo } from "../app/repositories-impl/http/badConnects";
import { HttpBillingRepo } from "../app/repositories-impl/http/billing";
import { HttpBookRepo } from "../app/repositories-impl/http/book";
import { HttpCashBoxRepo } from "../app/repositories-impl/http/cashBox";
import { HttpCollectionRepo } from "../app/repositories-impl/http/collection";
import { HttpComplaintsRepo } from "../app/repositories-impl/http/compaints";
import { HttpCustomerSeqRepo } from "../app/repositories-impl/http/customerSeq";
import { HttpDevicesLocationRepo } from "../app/repositories-impl/http/devicesLocation";
import { HttpDevicesRegisterRepo } from "../app/repositories-impl/http/devicesRegister";
import { HttpEmpRepo } from "../app/repositories-impl/http/emps";
import { HttpHHDevicesRepo } from "../app/repositories-impl/http/hhDevices";
import { HttpLookupRepo } from "../app/repositories-impl/http/lookup";
import { HttpMarketingRepo } from "../app/repositories-impl/http/marketing";
import { HttpMessgeRepo } from "../app/repositories-impl/http/message";
import { HttpMonitorRepo } from "../app/repositories-impl/http/monitor";
import { HttpPortalRepo } from "../app/repositories-impl/http/portal";
import { HttpQueryRepo } from "../app/repositories-impl/http/query";
import { HttpReadingRepo } from "../app/repositories-impl/http/reading";
import { HttpReCalcModiIncoicesRepo } from "../app/repositories-impl/http/reCalcModifyInvoices";
import { HTTPStationRepo } from "../app/repositories-impl/http/station";
import { HttpSyncRepo } from "../app/repositories-impl/http/sync";
import { HttpSystemLookupRepo } from "../app/repositories-impl/http/systemLookup";
import { HttpTaxRepo } from "../app/repositories-impl/http/tax";
import { HttpUpdatingDataRepo } from "../app/repositories-impl/http/updatingData";
import { HttpUserRepo } from "../app/repositories-impl/http/users";
import {  mashh_biClient as Mashh_biClient } from "../domain/entities/_gen/bi_pb.client";
import { BillerSystemClient } from "../domain/entities/_gen/biller-sys_pb.client";
import {
  GoAuthClient,
  loginClient as LoginClient,
} from "../domain/entities/_gen/GoAuth_pb.client";
import { govcollectorClient } from "../domain/entities/_gen/gov_collection_pb.client";
// import type { RpcTransport } from "@connectrpc/connect";
import { MasProviderClient } from "../domain/entities/_gen/MasProvider_pb.client";
import { BillingEngineServiceClient } from "../domain/entities/_gen/operation_pb.client";
import { StatementsServiceClient } from "../domain/entities/_gen/statments_pb.client";
import type { IActionDevicesRepo } from "../domain/repositories/actionDevices";
import type { IAuthRepo } from "../domain/repositories/auth";
import type { IBadConnectsRepo } from "../domain/repositories/badConnects";
import type { IBillerRepo } from "../domain/repositories/biller-sys";
import type { IBillingRepo } from "../domain/repositories/billing";
import type { IBookRepo } from "../domain/repositories/book";
import type { ICashBoxRepo } from "../domain/repositories/cashBox";
import type { ICollectionRepo } from "../domain/repositories/collection";
import type { IComplaintsRepo } from "../domain/repositories/complaints";
import type { ICustomerSeqRepo } from "../domain/repositories/customerSeq";
import type { IDevicesLocationRepo } from "../domain/repositories/devicesLocation";
import type { IDevicesRegisterRepo } from "../domain/repositories/devicesRegister";
import type { IOperationRepo } from "../domain/repositories/edamsOperation";
import type { IEmpRepo } from "../domain/repositories/emps";
import type { IGoAuthRepo } from "../domain/repositories/goAuth";
import type { IgoveCollectionRepo } from "../domain/repositories/govCollection";
import type { IHHDevicesRepo } from "../domain/repositories/hHDevices";
import type { ILoginRepo } from "../domain/repositories/loginClient";
import type { ILookupRepo } from "../domain/repositories/lookup";
import type { IMarketingRepo } from "../domain/repositories/marketing";
import type { IMashh_biClient } from "../domain/repositories/masDashboard";
import type { IMasProvider } from "../domain/repositories/masProvider";
import type { IMessageRepo } from "../domain/repositories/message";
import type { IMicroStatments } from "../domain/repositories/microStatments";
import type { IMonitorRepo } from "../domain/repositories/monitor";
import type { IPortalRepo } from "../domain/repositories/portal";
import type { IQueryRepo } from "../domain/repositories/query";
import type { IReadingRepo } from "../domain/repositories/readings";
import type { IReCalcModifyInvoices } from "../domain/repositories/reCalcMod";
import type { IStationRepo } from "../domain/repositories/station";
import type { SyncRepo } from "../domain/repositories/sync";
import type { ISystemLookupRepo } from "../domain/repositories/systemLookup";
import type { ITaxRepo } from "../domain/repositories/tax";
import type { IUpdatingDataRepo } from "../domain/repositories/updatingData";
import type { IUserRepo } from "../domain/repositories/users";
import type { IService, IServiceConfig } from "../domain/service";

// import { } from "@/domain/entities/_gen/bi_pb.client";

interface IConstruc {
  grpcCongig: (isBiller?: boolean) => RpcTransport;
  httpConfig: IServiceConfig;
}
export class GrpcHttpService implements IService {
  govClient: IgoveCollectionRepo;

  billerClient: IBillerRepo;

  // goBillerServiceClient: IGoBillerServiceRepo;

  authClient: IAuthRepo;

  goAuthClient: IGoAuthRepo;

  loginClient: ILoginRepo;

  edamsOperation: IOperationRepo;

  masProvider: IMasProvider;

  microStatments: IMicroStatments;

  // masCustomers: ICustomerRepo;

  // loginClient: ILoginRepo;

  // transport: GrpcWebFetchTransport;

  // http
  collection: ICollectionRepo;

  actionDevices: IActionDevicesRepo;

  emps: IEmpRepo;

  users: IUserRepo;

  cashbox: ICashBoxRepo;

  lookup: ILookupRepo;

  hhDevice: IHHDevicesRepo;

  badConnection: IBadConnectsRepo;

  complaints: IComplaintsRepo;

  updateData: IUpdatingDataRepo;

  deviceRegester: IDevicesRegisterRepo;

  reading: IReadingRepo;

  billingService: IBillingRepo;

  stations: IStationRepo;

  customerSeq: ICustomerSeqRepo;

  reCalcModifyInvoice: IReCalcModifyInvoices;

  bookService: IBookRepo;

  systemLookup: ISystemLookupRepo;

  devicesLocation: IDevicesLocationRepo;

  marketing: IMarketingRepo;

  messageService: IMessageRepo;

  monitorService: IMonitorRepo;

  portalService: IPortalRepo;

  syncService: SyncRepo;

  query: IQueryRepo;

  taxService: ITaxRepo;

  mashhBiClient: IMashh_biClient;

  constructor(props: IConstruc) {
    this.govClient = new govcollectorClient(props.grpcCongig());

    // this.goBillerServiceClient = new BillingTariffProviderClient(
    //   props.grpcCongig(true),
    // );
    this.billerClient = new BillerSystemClient(props.grpcCongig(true));
    this.edamsOperation = new BillingEngineServiceClient(props.grpcCongig());
    this.authClient = new HttpAuthRepo(props.httpConfig);
    this.goAuthClient = new GoAuthClient(props.grpcCongig());
    this.loginClient = new LoginClient(props.grpcCongig());
    this.masProvider = new MasProviderClient(props.grpcCongig());
    this.microStatments = new StatementsServiceClient(props.grpcCongig());
    // this.masCustomers = new MasCustomersClient(props.grpcCongig());

    this.collection = new HttpCollectionRepo(props.httpConfig);
    this.actionDevices = new HttpActionDevicesRepo(props.httpConfig);
    this.emps = new HttpEmpRepo(props.httpConfig);
    this.users = new HttpUserRepo(props.httpConfig);
    this.cashbox = new HttpCashBoxRepo(props.httpConfig);
    this.lookup = new HttpLookupRepo(props.httpConfig);
    this.hhDevice = new HttpHHDevicesRepo(props.httpConfig);
    this.badConnection = new HttpBadConnectsRepo(props.httpConfig);
    this.complaints = new HttpComplaintsRepo(props.httpConfig);
    this.updateData = new HttpUpdatingDataRepo(props.httpConfig);
    this.deviceRegester = new HttpDevicesRegisterRepo(props.httpConfig);
    this.reading = new HttpReadingRepo(props.httpConfig);
    this.billingService = new HttpBillingRepo(props.httpConfig);
    this.stations = new HTTPStationRepo(props.httpConfig);
    this.customerSeq = new HttpCustomerSeqRepo(props.httpConfig);
    this.reCalcModifyInvoice = new HttpReCalcModiIncoicesRepo(props.httpConfig);
    this.bookService = new HttpBookRepo(props.httpConfig);
    this.systemLookup = new HttpSystemLookupRepo(props.httpConfig);
    this.devicesLocation = new HttpDevicesLocationRepo(props.httpConfig);
    this.marketing = new HttpMarketingRepo(props.httpConfig);
    this.messageService = new HttpMessgeRepo(props.httpConfig);
    this.monitorService = new HttpMonitorRepo(props.httpConfig);
    this.portalService = new HttpPortalRepo(props.httpConfig);
    this.syncService = new HttpSyncRepo(props.httpConfig);
    this.query = new HttpQueryRepo(props.httpConfig);
    this.taxService = new HttpTaxRepo(props.httpConfig);
    this.mashhBiClient = new Mashh_biClient(props.grpcCongig());
  }
}
