import { Status } from '@pages/controlPanel/shared/Tabel';

export interface CUSTOMERWALK {
  stationNo?: number;
  billgroup?: string;
  bookNo?: string;
  walkNo?: string;
  describe?: string;
  assignedToHh?: number;
  unused?: boolean;
  marketing?: number;
  isHhPrinting?: boolean;
  empName?: string;
  id?: number;
  changed?:boolean
  uniqueId?:string
  hhAssignedError?:boolean
  status?:Status
  rowIndex?:number
}
