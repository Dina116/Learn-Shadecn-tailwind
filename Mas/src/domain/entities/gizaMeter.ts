import { PortalReadingRejection } from '@/app/repositories-impl/contracts/PortalReadingRejection';

export interface GIZAMETER {
  SURNAME: string;
  CUSTKEY: string;
  ADDRESS: string;
  SERIAL_NO: string;
  INSTALL_DATE: string | null;
  INSTALL_TYPE: number | null;
  USER_NAME: string;
  CONTRACTOR: string;
  LAT: string;
  LNG: string;
  ACCURECY: number | null;
  DEVICE_ID: string;
}
export interface GIZAMETERREQ extends PortalReadingRejection {
  custkey: string;
  serial_no: string;
  from?: Date | string;
  to?: Date | string;
  user: string;
  install_type?: number;
  contractor: string;
}
