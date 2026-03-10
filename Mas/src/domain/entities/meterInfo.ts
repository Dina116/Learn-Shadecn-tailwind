import { METERRDG } from './meterRdg';

export interface METERINFORMATION {
  meterType?: string;
  meterRef?: string;
  meterCondition?: string;
  opStatus?: number;
  status?: number;
  size?: string;
  make?: string;
  installDate?: string | null;
  removalDate?: string | null;
  conversionFactor?: number;
  serialNo?: string;
  readingsList: METERRDG[];
  meterId?: number;
  insCycleId?: number;
  updCycleId?: number;
  wtransNo?: number;
  stransNo?: number;
  propertyId?: number;
  propRef?: string;
  noDials?: number;
}
