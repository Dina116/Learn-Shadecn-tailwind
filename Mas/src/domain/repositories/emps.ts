import { ADDEMPREQ, DELETEEMPREQ, EMPS, UPDATEEMPREQ } from '../entities/systemMangement/emp';

export interface IEmpRepo {
  addNewEmp: (req: ADDEMPREQ) => Promise<void>;
  getEmps: () => Promise<EMPS[]>;
  updateEmp: (req:UPDATEEMPREQ) => Promise<void>;
  deleteEmp: (req: DELETEEMPREQ) => Promise<EMPS>;
  getAllCollectors: () => Promise<EMPS[]>;
  getAllReader: () => Promise<EMPS[]>;
}
