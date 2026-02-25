import z from "zod";

export const formSchema = z.object({
  description: z.string().min(1, "هذا الحقل مطلوب"),
  refAmount: z.coerce.number().min(1, "هذا الحقل مطلوب"),
  noMonthes: z.coerce.number().min(1, "هذا الحقل مطلوب"),
});
