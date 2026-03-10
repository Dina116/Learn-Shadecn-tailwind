import { IActionDevicesRepo } from '../repositories/actionDevices';
import { IAuthRepo } from '../repositories/auth';
import { IBadConnectsRepo } from '../repositories/badConnects';
import { IBillingRepo } from '../repositories/billing';
import { IBookRepo } from '../repositories/book';
import { ILookupRepo } from '../repositories/lookup';
import { ICashBoxRepo } from '../repositories/cashBox';
import { ICollectionRepo } from '../repositories/collection';
import { IComplaintsRepo } from '../repositories/complaints';
import { ICustomerSeqRepo } from '../repositories/customerSeq';
import { IDevicesRegisterRepo } from '../repositories/devicesRegister';
import { IEmpRepo } from '../repositories/emps';
import { IHHDevicesRepo } from '../repositories/hHDevices';
import { ISystemLookupRepo } from '../repositories/systemLookup';
// import { ILoginRepo } from '../repositories/login';
import { IReCalcModifyInvoices } from '../repositories/reCalcMod';
import { IReadingRepo } from '../repositories/readings';
import { IStationRepo } from '../repositories/station';
import { IUpdatingDataRepo } from '../repositories/updatingData';
import { IUserRepo } from '../repositories/users';
import { IDevicesLocationRepo } from '../repositories/devicesLocation';
import { IMarketingRepo } from '../repositories/marketing';
import { IMessageRepo } from '../repositories/message';
import { IMonitorRepo } from '../repositories/monitor';
import { IPortalRepo } from '../repositories/portal';
import { SyncRepo } from '../repositories/sync';
import { IQueryRepo } from '../repositories/query';
import { ITaxRepo } from '../repositories/tax';
import { IgoveCollectionRepo } from '../repositories/govCollection';
import { IBillerRepo } from '../repositories/biller-sys';
import { IGoAuthRepo } from '../repositories/goAuth';
import { ILoginRepo } from '../repositories/loginClient';
import { IOperationRepo } from '../repositories/edamsOperation';
import { IMasProvider } from '../repositories/masProvider';
import { IMicroStatments } from '../repositories/microStatments';
import { IMashh_biClient } from '../repositories/masDashboard';
// import { ICustomerRepo } from '../repositories/customers';

export type Protocol = 'grpc' | 'http' | 'cache';

export interface IServiceConfig {
  baseUrl: string;
  headers: { [key: string]: string };
}
export interface IService {
  goAuthClient: IGoAuthRepo;
  loginClient: ILoginRepo;
  govClient: IgoveCollectionRepo;
  billerClient: IBillerRepo;
  edamsOperation: IOperationRepo;
  masProvider: IMasProvider;
  microStatments: IMicroStatments;
  // httpservice
  authClient: IAuthRepo;
  collection: ICollectionRepo;
  actionDevices: IActionDevicesRepo;
  users: IUserRepo;
  emps: IEmpRepo;
  cashbox: ICashBoxRepo;
  lookup: ILookupRepo;
  hhDevice: IHHDevicesRepo;
  stations: IStationRepo;
  badConnection: IBadConnectsRepo;
  complaints: IComplaintsRepo;
  updateData: IUpdatingDataRepo;
  deviceRegester: IDevicesRegisterRepo;
  reading: IReadingRepo;
  billingService: IBillingRepo;
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
  // masCustomers:ICustomerRepo
}
