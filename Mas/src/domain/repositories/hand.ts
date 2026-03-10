import { HANDMHST } from '../entities/handMhSt';

export interface IHandRepo {
  getHandMhst(): Promise<HANDMHST[]>;
}
