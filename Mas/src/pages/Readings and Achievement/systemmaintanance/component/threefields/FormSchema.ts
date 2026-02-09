import z from "zod";

export const FormSchema = z.object({
  BILLGROUP: z.string().min(1, "هذا الحقل مطلوب"),
  BOOK_NO: z.string().min(1, "هذا الحقل مطلوب"),
  WALK_DESCRIPTION: z.string().min(1, "هذا الحقل مطلوب"),
  Collection_Count: z.coerce.number().optional(),
  ID: z.string().optional(),
});
