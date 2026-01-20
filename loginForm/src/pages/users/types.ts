export type UserCredentails = {
  id: string;
  userCode: string;
  status: "active" | "processing" | "offline";
  userName: string;
  branch: string;
  jobs: string;
  actions: string;
};
