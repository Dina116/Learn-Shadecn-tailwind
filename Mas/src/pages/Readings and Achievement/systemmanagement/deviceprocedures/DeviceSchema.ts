import z from "zod";

export const DeviceSchema = z.object({
  DESCRIPTION: z.string(),
  ACTION_ID: z.coerce.number()
});
