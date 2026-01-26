import z from "zod";

export const formSchema = z.object({
  departmentname: z
    .string()
    .min(1, "هذا الحقل مطلوب"),
  description: z
    .string()
    .min(1, "هذا الحقل مطلوب"),
  departmentuser: z.string().min(1, "هذا الحقل مطلوب"),
  arabicdescription: z.string(),
  englishdescription: z.string(),
});
