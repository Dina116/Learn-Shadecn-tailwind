import Line from "@/components/sharedComponenet/Line";
import { SelectField } from "@/components/sharedComponenet/SharedSelect";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  selectedItemsDepartement,
  selectedItemsPrintData,
  selectItemsCompanyData,
  selectItemsJobsAndUserData,
  type UserFormProps,
  type userFormType,
} from "./types";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "./userSchema";

export const UserForm = ({ onSubmit, defaultValues }: UserFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<userFormType>({
    resolver: zodResolver(userSchema),
    defaultValues: defaultValues || {
      jobCode: "",
      username: "",
      password: "",
      entername: "",
      company: "",
      branch: "",
      defaultbranch: "",
      assignjob: "",
      printtype: "",
      department: "",
      status: true,
    },
  });
  const handleSubmition = (data: userFormType) => {
    onSubmit(data);
  };
  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit(handleSubmition)} dir="ltr">
        <div className="flex flex-row justify-between">
          <div className="grid  gap-3">
            <Label className="flex justify-end text-right font-semibold text-sm">
              الكود الوظيفي
            </Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  id="jobCode"
                  className="flex justify-end text-right"
                  placeholder="الكود الوظيفي"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="jobCode"
            />
            {errors.jobCode && (
              <span className="flex justify-end text-red-500 text-sm mt-1">
                {errors.jobCode.message}
              </span>
            )}
          </div>
          <div className="grid gap-1">
            <Label className=" flex justify-end text-right font-semibold text-sm">
              اسم المستخدم
            </Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  id="username"
                  className="flex justify-end text-right"
                  placeholder="اسم المستخدم"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="username"
            />
            {errors.username && (
              <span className="flex justify-end text-red-500 text-sm mt-1">
                {errors.username.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="grid  gap-3">
            <Label className=" flex justify-end text-right font-semibold text-sm">
              كلمة المرور
            </Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  id="password"
                  className="flex justify-end text-right"
                  placeholder="كلمة المرور"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="password"
            />
            {errors.password && (
              <span className="flex justify-end text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="flex justify-end text-right font-semibold text-sm">
              اسم الدخول
            </Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  id="entername"
                  className="flex justify-end text-right"
                  placeholder="اسم الدخول"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="entername"
            />
            {errors.entername && (
              <span className="flex justify-end text-red-500 text-sm mt-1">
                {errors.entername.message}
              </span>
            )}
          </div>
        </div>
        <Line lineName="بيانات الشركة" />
        <Controller
          control={control}
          render={({ field }) => (
            <SelectField
              label="الشركة"
              selectItems={selectItemsCompanyData}
              value={field.value}
              onChange={field.onChange}
            />
          )}
          name="company"
        />
        {errors.company && (
          <span className="flex justify-end text-red-500 text-sm mt-1">
            {errors.company.message}
          </span>
        )}
        <Controller
          control={control}
          render={({ field }) => (
            <SelectField
              label="الفرع"
              value={field.value}
              onChange={field.onChange}
            />
          )}
          name="branch"
        />
        {errors.branch && (
          <span className="flex justify-end text-red-500 text-sm mt-1">
            {errors.branch.message}
          </span>
        )}
        <Controller
          control={control}
          rules={{ required: "هذا الحقل مطلوب" }}
          render={({ field }) => (
            <SelectField
              label="الفرع الافتراضي"
              value={field.value}
              onChange={field.onChange}
            />
          )}
          name="defaultbranch"
        />
        {errors.defaultbranch && (
          <span className="flex justify-end text-red-500 text-sm mt-1">
            {errors.defaultbranch.message}
          </span>
        )}
        <Line lineName="الوظيفة والبيانات المرتبطه بالمستخدم" />
        <Controller
          control={control}
          render={({ field }) => (
            <SelectField
              label="تعيين الوظيفة"
              selectItems={selectItemsJobsAndUserData}
              value={field.value}
              onChange={field.onChange}
            />
          )}
          name="assignjob"
        />
        {errors.assignjob && (
          <span className="flex justify-end text-red-500 text-sm mt-1">
            {errors.assignjob.message}
          </span>
        )}
        <Controller
          control={control}
          render={({ field }) => (
            <SelectField
              label="نوع الطباعه"
              selectItems={selectedItemsPrintData}
              value={field.value}
              onChange={field.onChange}
            />
          )}
          name="printtype"
        />
        {errors.printtype && (
          <span className="flex justify-end text-red-500 text-sm mt-1">
            {errors.printtype.message}
          </span>
        )}
        <Controller
          control={control}
          render={({ field }) => (
            <SelectField
              label="الاقسام"
              selectItems={selectedItemsDepartement}
              value={field.value}
              onChange={field.onChange}
            />
          )}
          name="department"
        />
        {errors.department && (
          <span className="flex justify-end text-red-500 text-sm mt-1">
            {errors.department.message}
          </span>
        )}
        <div className="flex flex-row justify-end gap-2 mt-2">
          <Label>نشط</Label>
          <Controller
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
            name="status"
          />
          {errors.status && (
            <span className="flex justify-end text-red-500 text-sm mt-1">
              {errors.status.message}
            </span>
          )}
        </div>
        <hr className="mt-1 border-gray-200" />
        <div className="flex flex-row justify-end gap-2 mt-5 mb-5">
          <Button
            type="reset"
            variant="outline"
            className="border-1 border-blue-900"
            onClick={() => reset()}
          >
            إلغاء
          </Button>
          <Button
            type="submit"
            variant="default"
            className="bg-blue-900 hover:bg-blue-800"
          >
            حفظ
          </Button>
        </div>
      </form>
    </div>
  );
};
