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
import { formSchema } from "./formSchema";
import type { companyFormProps } from "./types";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export function CompanyForm({ onSubmit, onClose }: companyFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      branchnumber: 0,
      companyid: "",
      companynumber: "",
      prepared: false,
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
                name="companyid"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="companyid"
                      className="flex-flex-row justify-end text-right"
                    >
                      الشركة (clientID)
                    </FieldLabel>
                    <Input
                      {...field}
                      id="companyid"
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
                name="companynumber"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="companynumber"
                      className="flex-flex-row justify-end text-right"
                    >
                      الشركة المرتبطة
                    </FieldLabel>
                    <Input
                      {...field}
                      id="companynumber"
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
            <div className="flex flex-row justify-end gap-2 mt-2">
              <Label>تجريبي</Label>
              <Controller
                control={form.control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
                name="prepared"
              />
            </div>
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
