import type z from "zod";
import type { formSchema } from "./formSchema";

export type JobesCredentails = {
  id: string;
  jobName: string;
  description: string;
  userNumber: number;
  status: "active" | "inactive";
  actions: string;
};
export type jobFormType=z.infer<typeof formSchema>
