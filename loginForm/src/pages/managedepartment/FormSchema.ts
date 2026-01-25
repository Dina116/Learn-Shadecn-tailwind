import z from "zod";

export const formSchema = z.object({
  departmentname: z
    .string()
    .min(1, "هذا الحقل مطلوب")
    .max(32, "يجب ادخال اقل من 32 حرف"),
  description: z
    .string()
    .min(1, "يجب ادخال اكتر من 20 حرف")
    .max(200, "اقصي عدد مسموح من الحروف 200"),
  departmentuser: z.string().min(1, "هذا الحقل مطلوب"),
  arabicdescription: z.string(),
  englishdescription: z.string(),
});
