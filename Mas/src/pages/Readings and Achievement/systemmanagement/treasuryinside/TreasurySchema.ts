import z from "zod";

export const TreasurySchema = z.object({
  code: z.string(),
  descriprtion: z.string(),
  branch: z.string(),
});
