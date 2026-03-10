import { ISSUEtYPE } from '../entities/issueType';

export interface ISystemLookupRepo {
  getCompanyName: () => Promise<string>;
  getIsHeadQuarter: () => Promise<boolean>;
  getIssueType: () => Promise<ISSUEtYPE>;
}
