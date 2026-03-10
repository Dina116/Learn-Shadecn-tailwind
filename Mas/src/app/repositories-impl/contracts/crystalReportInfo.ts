import { CRYSTALREPORTPARAMETRAPI } from './crystalReportParameter';

export interface CRYSTALREPORTINFO {
  Name: string;
  Title: string;
  Path: string;
  Subject: string;
  Author: string;
  RevisionNumber: string;
  LastSavedBy: string;
  Comment: string;
  Parameters: CRYSTALREPORTPARAMETRAPI[];
}
