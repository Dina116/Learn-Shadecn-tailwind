import z from "zod";

export const SwitchSchema = z.object({
  from: z.string().min(1, "لابد من اخنيار المحصل"),
  to: z.string().min(1, "لابد من اخنيار المحصل"),
  group_id: z.number().optional(),
  date: z.string().optional(),
  include_previous_invoices: z.boolean().optional(),
  last_cycle_only: z.boolean().optional(),
});
