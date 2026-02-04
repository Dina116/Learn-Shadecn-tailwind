import z from "zod";

export const portalSchema = z.object({
  ID: z.string().min(1, "هذا الحقل مطلوب"),
  DEVICE_ID: z.string().min(1, "هذا الحقل مطلوب"),
  branch: z.string().optional(),
  dedicatedto: z.string().optional(),
  status: z.string().optional(),
  chipnumber: z.number().optional(),
  company: z.string().optional(),
  model: z.string().optional(),
  notes: z.string().optional(),
  operatingsystem: z.string().optional(),
  osversion: z.string().optional(),
  idnumber: z.number().optional(),
  paymentdate: z.date().optional(),
  warranty: z.number().optional(),
  internetstartdate: z.date().optional(),
  packagerenewal: z.number().optional(),
  charger: z.string(),
});
