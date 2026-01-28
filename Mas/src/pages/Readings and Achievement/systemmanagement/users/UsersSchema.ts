import z from "zod";

export const UsersSchema = z.object({
  Code: z.number(),
  name: z.string(),
  jobs: z.string(),
  username: z.string(),
  branchname: z.string(),
});
