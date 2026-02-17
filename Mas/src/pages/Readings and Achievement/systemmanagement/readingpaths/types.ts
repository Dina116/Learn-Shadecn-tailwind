export type ReadingTypes = {
  STATION_NO: number;
  BOOK_NO: string;
  WALK_NO: string;
  DESCRIBE: string;
  BILLGROUP: string;
  ASSIGNED_TO_HH: number;
};
export type Collectors = {
  ID: number;
  USER_NAME: string;
  PASSWORD: string;
  FULL_NAME: string;
  DEVICE_ID: string;
  BRANCH_ID: number;
  READING: boolean;
  COLLECTION: boolean;
  ENABLE_HH_PRINTING: boolean;
};
export type CollectorCellProps = {
  shownameWithId?: boolean;
  assignedCollectorId?: number;
  collectors: Collectors[];
  getOptionDisabled?: (option: Collectors) => boolean;
  onCollectorChange: (newCollectorId: number) => void;
};
export type LoadType = "byGroup" | "unassigned" | null;
export type ReadingTableProps = {
  loadType: "byGroup" | "unassigned";
  groupId: string | null;
};
