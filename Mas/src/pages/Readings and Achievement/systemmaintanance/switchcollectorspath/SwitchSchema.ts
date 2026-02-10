import z from "zod";

export const SwitchSchema = z.object({
  from: z.coerce.string().min(1, "لابد من اختيار المحصل"),
  to: z.coerce.string().min(1, "لابد من اختيار المحصل"),
  group_id: z.number().optional(),
  date: z.string().optional(),
  include_previous_invoices: z.boolean().optional(),
  last_cycle_only: z.boolean().optional(),
});
