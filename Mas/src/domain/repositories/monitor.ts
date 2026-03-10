import { HHBCYC } from '../entities/hhBcyc';
import { PROCESS } from '../entities/process';

export interface IMonitorRepo {
  Processes(): Promise<PROCESS[]>;
  HhStatus(): Promise<HHBCYC[]>;
}
