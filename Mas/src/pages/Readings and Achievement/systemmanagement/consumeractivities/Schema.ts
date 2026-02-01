import z from "zod";

export const Schema = z.object({
  descreption: z.string(),
  code: z.string(),
});
