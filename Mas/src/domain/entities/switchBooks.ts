export interface BookCycleForEmp {
    BILLGROUP: string;
    BOOK_NO: string;
    WALK_NO: string;
    READER: string;
    COLLECTOR: string;
    IS_COLLECTION: boolean;
    IS_READING: boolean;
    STATION_NO?: number | null;
    EMPID?: number | null;
    EMPID_C ?: number | null;
    EMPID_R?: number | null;
  }

  export interface EmpIdReq {
    empid?: string;
  }
