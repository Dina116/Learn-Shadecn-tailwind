import { HANDMHSTApi } from './handMhSt';
import { HHBCYCApi } from './hh-bcyc';
import { EXTREADINGApi } from './extReading';

export interface ReADINGRESPONSEAPI {
  Hand: HANDMHSTApi;
  Bcyc: HHBCYCApi;
  Portal: EXTREADINGApi;
  ALLOW_BATCH_ESTIM_READING: boolean;
  ALLOW_ESTIM_CONSUMP: boolean;
  ALLOW_ESTIM_READING: boolean;
  CTYPE_DESC: string;
}
