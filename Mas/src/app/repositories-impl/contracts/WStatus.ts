export interface WStatus {
  BOOK_NO: string;
  WALK_NO: number;
  DESCRIBE: string;
  BILLGROUP: string;
  NO_WALKS: number | null;
  ASSIGNED_TO: string;
  ASSIGNED_TO_HH: number | null;
  IsCompleted: number | null;
  IsPostToHH: number | null;
}
