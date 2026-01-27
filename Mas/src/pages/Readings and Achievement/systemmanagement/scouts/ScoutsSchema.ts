import z from "zod";

export const ScoutesSchema = z.object({
  code: z.number(),
  name: z.string().min(1, "برجاء ادخال اسم الكشاف"),
  branch: z.string(),
  portalphone: z.string(),
  status: z.boolean().optional(),
  usercode: z.string(),
  type: z.string(),
  phone1: z.number(),
  phone2: z.number(),
});
