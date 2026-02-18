import z from "zod";

export const WalkFormSchema = z.object({
  BILLGROUP: z.string().min(1, "المجموعة مطلوبة"),
  WALK_NO: z.string().min(1, "المسار مطلوب"),
  BOOK_NO: z.string().min(1, "السجل مطلوب"),
  activityId: z.number().nullable(),
  consumpFrom: z.number().optional(),
  consumpTo: z.number().optional(),
});
