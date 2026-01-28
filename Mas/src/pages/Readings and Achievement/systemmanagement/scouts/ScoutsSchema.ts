import z from "zod";

export const ScoutesSchema = z.object({
  Code: z.number(),
  name: z.string().min(1, "برجاء ادخال اسم الكشاف"),
  branch: z.string(),
  portalPhone: z.string(),
  status: z.boolean().optional(),
  usercode: z.string(),
  type: z.string(),
  phone1: z.number().optional(),
  phone2: z.number().optional(),
});
