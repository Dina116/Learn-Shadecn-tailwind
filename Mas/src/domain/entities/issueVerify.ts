export interface AbstractVerificationRole {
  Billgroup: string;
  BilngDate: string | null;
  Code: string;
  Description: string;
  ExpectedStatment: string;
  ValueStatment: string;
  CssClass: string;
}

export interface IssueVerificationResultItem {
  role: AbstractVerificationRole;
  Description: string;
  ExpectedValue: number | null;
  Value: number | null;
  ErrorMessage: string;
  WarningMessageMessage: string;
  Note: string;
  IsExecuted: boolean;
  Diff: number | null;
  DiffPercentage: number | null;
  DiffPercentageStr: string;
  cssClss: string;
  CssClass: string;
}
