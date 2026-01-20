export type JobesCredentails = {
  id: string;
  jobName: string;
  description: string;
  userNumber: number;
  status: "active" | "inactive";
  actions: string;
};
