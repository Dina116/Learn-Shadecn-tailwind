import { METERINFORMATION } from './meterInfo';

export interface ConnectionInfo {
  propRef?: string;
  connectionDate?: string | null;
  connStatus?: number;
  meterinfo: METERINFORMATION;
}
