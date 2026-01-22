import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { formSchema } from "./formSchema";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import type { jobFormProps } from "./types";

export function JobForm({ onSubmit, defaultValues, onClose }: jobFormProps) {
  const [step, setStep] = useState(1);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues || {
      jobname: "",
      description: "",
      status: false,
      canEdit: false,
      canDelete: false,
      canViewReports: false,
    },
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmition = (data: z.infer<typeof formSchema>) => {
    onSubmit(data);
    onClose();
  };

  return (
    <Card className="w-full sm:max-w-md border-0 shadow-none" dir="ltr">
      <CardHeader className="flex flex-row justify-end ">
        <CardTitle className="text-gray-400">
          {step === 1 ? "بيانات الوظيفة" : "صلاحيات الشاشة"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(handleSubmition)}>
          {step === 1 && (
            <FieldGroup>
              <Controller
                name="jobname"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="jobname"
                      className="flex-flex-row justify-end text-right"
                    >
                      اسم الوظيفة
                    </FieldLabel>
                    <Input
                      {...field}
                      id="jobname"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                        className="flex-flex-row justify-end text-right"
                      />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="description"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="description"
                      className="flex-flex-row justify-end text-right"
                    >
                      الوصف
                    </FieldLabel>
                    <Input
                      {...field}
                      id="description"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError
                        errors={[fieldState.error]}
                        className="flex-flex-row justify-end text-right"
                      />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="status"
                control={form.control}
                render={({ field }) => (
                  <Field className="flex flex-row justify-end">
                    <FieldLabel
                      htmlFor="status"
                      className="flex-flex-row justify-end text-right text-sm"
                    >
                      نشط
                    </FieldLabel>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="flex-flex-row justify-end text-right max-w-4"
                    />
                  </Field>
                )}
              />
            </FieldGroup>
          )}
          {step === 2 && (
            <FieldGroup>
              <Controller
                name="canEdit"
                control={form.control}
                render={({ field }) => (
                  <Field className="flex flex-row justify-end">
                    <FieldLabel className="flex-flex-row justify-end text-right">
                      تعديل
                    </FieldLabel>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="flex-flex-row justify-end text-right max-w-4"
                    />
                  </Field>
                )}
              />
              <Controller
                name="canDelete"
                control={form.control}
                render={({ field }) => (
                  <Field className="flex flex-row justify-end">
                    <FieldLabel className="flex-flex-row justify-end text-right">
                      حذف
                    </FieldLabel>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="flex-flex-row justify-end text-right max-w-4"
                    />
                  </Field>
                )}
              />
              <Controller
                name="canViewReports"
                control={form.control}
                render={({ field }) => (
                  <Field className="flex flex-row justify-end">
                    <FieldLabel className="flex-flex-row justify-end text-right">
                      عرض التقارير
                    </FieldLabel>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="flex-flex-row justify-end text-right max-w-4"
                    />
                  </Field>
                )}
              />
            </FieldGroup>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 && (
          <Button
            onClick={prevStep}
            variant="outline"
            className="border:blue-900"
          >
            رجوع
          </Button>
        )}
        {step < 2 && (
          <Button
            type="button"
            onClick={nextStep}
            className="bg-blue-900 hover:bg-blue-600"
          >
            التالي
          </Button>
        )}
        {step === 2 && (
          <Button
            type="submit"
            form="form-rhf-demo"
            className="bg-blue-900 hover:bg-blue-600"
          >
            إرسال
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
