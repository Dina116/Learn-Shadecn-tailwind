import z from "zod";

export const ScoutesSchema = z.object({
  ID: z.number(),
  FULL_NAME: z.string().min(1, "برجاء ادخال اسم الكشاف"),
  BRANCH_ID: z.string(),
  DEVICE_ID: z.string(),
  READING: z.boolean().optional(),
  usercode: z.string(),
  type: z.string(),
  phone1: z.number().optional(),
  phone2: z.number().optional(),
  portalPhones: z.string(),
  username: z.string(),
  password: z.string(),
});
