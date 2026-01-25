import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { formSchema } from "./FormSchema";
import type { departmentFormProps } from "./types";

export function DepartmentForm({ onSubmit, onClose }: departmentFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      departmentname: "",
      description: "",
      departmentuser: "",
      arabicdescription: "",
      englishdescription: "",
    },
  });

  const handleSubmition = (data: z.infer<typeof formSchema>) => {
    onSubmit(data);
    console.log(data);
    onClose();
  };

  return (
    <Card className="w-full sm:max-w-md border-0 shadow-none" dir="ltr">
      <CardHeader className="flex flex-row justify-end "></CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(handleSubmition)}>
          <FieldGroup>
            <div className="flex flex-row justify-between gap-10">
              <Controller
                name="departmentname"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="jobname"
                      className="flex-flex-row justify-end text-right"
                    >
                      اسم القسم
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
            </div>

            <Controller
              name="departmentuser"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="description"
                    className="flex-flex-row justify-end text-right"
                  >
                    تعيين مستخدمين القسم
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
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          type="reset"
          variant="outline"
          className="border-1 border-blue-900"
          onClick={() => {
            onClose();
          }}
        >
          إلغاء
        </Button>
        <Button
          type="submit"
          form="form-rhf-demo"
          className="bg-blue-900 hover:bg-blue-600"
        >
          حفظ
        </Button>
      </CardFooter>
    </Card>
  );
}
