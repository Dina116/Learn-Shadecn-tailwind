import { z } from "zod";

export const userSchema = z.object({
  jobCode: z.string(), //.min(1, "الكود الوظيفي مطلوب")
  username: z.string().min(1, "اسم المستخدم مطلوب"),
  password: z.string().min(6, "كلمة المرور لا تقل عن 6 أحرف"),
  entername: z.string().min(1, "اسم الدخول مطلوب"),
  // usercode: z.string(),

  company: z.string().min(1, "الشركة مطلوبة"),
  branch: z.string(), //.min(1, "الفرع مطلوب")
  defaultbranch: z.string(), //.min(1, "الفرع الافتراضي مطلوب")

  assignjob: z.string(), //.min(1, "الوظيفة مطلوبة")
  printtype: z.string(), //.min(1, "نوع الطباعة مطلوب")
  department: z.string(), //.min(1, "القسم مطلوب")

  status: z.boolean().optional(),
});
