import { ConnectionInfo } from './connectionInfo';
import { CUSTOMERCTG } from './customerCtg';

export interface PROPINFO {
  propRef?: string;
  waterService?: boolean;
  sewerService?: boolean;
  isMultiCtypes?: boolean;
  ctgList: Array<CUSTOMERCTG>;
  connectioninfo: ConnectionInfo;
}
