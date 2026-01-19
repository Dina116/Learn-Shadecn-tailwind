import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(1, "هذا الحقل مطلوب"),
  password: z.string().min(6, "يجب أن تكون كلمة المرور 6 أحرف على الأقل"),
});
