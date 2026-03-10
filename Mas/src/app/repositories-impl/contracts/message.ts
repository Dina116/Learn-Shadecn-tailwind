export interface MESSAGEApi {
  ID: number;
  MESSAGE_TYPE: number;
  MESSAGE_CONTENET: string;
  FROM: string;
  TO: string;
  SUBJECT: string;
  SEND_DATE: string | null;
  RECIVE_DATE: string | null;
  EXPIRE_DATE: string | null;
  IS_RECIVED: boolean | null;
  IS_EXPIRED: boolean | null;
}
