import z from "zod";

export const formSchema = z.object({
  companyid: z.string().min(1, "هذا الحقل مطلوب"),
  companynumber: z.string().min(1, "هذا الحقل مطلوب"),
  branchnumber: z.number(),
  prepared: z.boolean(),
});
