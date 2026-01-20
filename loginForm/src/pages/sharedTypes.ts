import type { JobesCredentails } from "./jobs/types";
import type { UserCredentails } from "./users/types";

export interface Columns {
  key: string;
  label: string;
}
export type TableProbs = {
  columns: Columns[];
  userdata?: UserCredentails[];
  jobdata?: JobesCredentails[];
};
