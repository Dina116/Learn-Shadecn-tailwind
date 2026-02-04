import z from "zod";

export const Schema = z.object({
  DESCRIPTION: z.string(),
  CTYPEGRP_ID: z.string(),
});
