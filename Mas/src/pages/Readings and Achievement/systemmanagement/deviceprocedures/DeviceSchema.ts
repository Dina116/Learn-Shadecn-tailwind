import z from "zod";

export const DeviceSchema = z.object({
  type: z.string(),
  code: z.string(),
});
