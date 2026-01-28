import z from "zod";

export const portalSchema = z.object({
  devicenumber: z.string().min(1, "هذا الحقل مطلوب"),
  devicecode: z.string().min(1, "هذا الحقل مطلوب"),
  branch: z.string(),
  dedicatedto: z.string(),
  status: z.string(),
  chipnumber: z.number(),
  company: z.string(),
  model: z.string(),
  notes: z.string(),
  operatingsystem: z.string(),
  osversion: z.string(),
  idnumber: z.number(),
  paymentdate: z.date(),
  warranty: z.number(),
  internetstartdate: z.date(),
  packagerenewal: z.number(),
  charger: z.string(),
});
