import z from "zod";

export const ScoutesSchema = z.object({
  ID: z.number(),
  FULL_NAME: z.string().min(1, "برجاء ادخال اسم الكشاف"),
  BRANCH_ID: z.string().optional(),
  DEVICE_ID: z.string().optional(),
  READING: z.boolean().optional(),
  usercode: z.string().optional(),
  type: z.string().optional(),
  phone1: z.string().optional(),
  phone2: z.string().optional(),
  portalPhones: z.string().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
});
