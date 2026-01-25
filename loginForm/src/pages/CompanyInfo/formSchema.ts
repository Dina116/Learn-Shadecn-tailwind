import z from "zod";

export const formSchema = z.object({
  companyid: z
    .string()
    .min(1, "هذا الحقل مطلوب")
    .max(32, "يجب ادخال اقل من 32 حرف"),
  companynumber: z
    .string()
    .min(1, "يجب ادخال اكتر من 20 حرف")
    .max(200, "اقصي عدد مسموح من الحروف 200"),
  branchnumber: z.number(),
  prepared: z.boolean(),
});
