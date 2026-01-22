import { useState } from "react";
import { Controller, type UseFormReturn } from "react-hook-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import type { formSchema } from "./formSchema";
import type z from "zod";

type JobFormValues = z.infer<typeof formSchema>;
export function AccordionGroup({
  group,
  form,
}: {
  group: { name: string; permissions: { key: string; label: string }[] };
  form: UseFormReturn<JobFormValues>;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPermissions = group.permissions.filter((p) =>
    p.label.includes(searchTerm),
  );
  const selectedCount = group.permissions.filter(
    (p) => form.watch(`permissions.${p.key}`) === true,
  ).length;

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border rounded-md overflow-hidden"
      dir="rtl"
    >
      <AccordionItem value={group.name} className="border-none">
        <AccordionTrigger
          className=" bg-[#f3f4f6] hover:no-underline px-4 py-3 border-b"
          dir="rtl"
        >
          <div className="flex items-center justify-between w-full">
            <span className="font-bold text-[#374151]">{group.name}</span>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>عدد الصلاحيات المأخوذة</span>
              <span className="font-semibold text-gray-700">
                {selectedCount}
              </span>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent className="p-0">
          <div className="p-2 border-b bg-white flex justify-end items-center relative">
            <span className="absolute right-4 text-xs font-bold text-blue-900 bg-white pt-1 -top-0">
              بحث
            </span>
            <Input
              className="h-10 text-right pr-4 focus-visible:ring-1"
              placeholder=""
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#fdfdfd] ">
            {filteredPermissions.length === 0 && (
              <div className="col-span-full text-center text-sm text-gray-400">
                لا توجد صلاحيات
              </div>
            )}

            {filteredPermissions.map((perm) => (
              <div
                key={perm.key}
                className="flex items-center justify-end gap-3 border border-gray-100 p-2 py-1.5 rounded-sm hover:bg-gray-50 transition-colors min-h-[40px]"
              >
                <label
                  htmlFor={perm.key}
                  className="text-[12px] font-medium leading-tight cursor-pointer text-right flex-1 text-[#4b5563] overflow-hidden"
                >
                  {perm.label}
                </label>
                <Controller
                  name={`permissions.${perm.key}`}
                  control={form.control}
                  render={({ field }) => (
                    <Checkbox
                      id={perm.key}
                      checked={field.value}
                      onCheckedChange={(val) => field.onChange(!!val)}
                      className="h-4 w-4 border-gray-300 data-[state=checked]:bg-[#1e293b] rounded-[2px]"
                    />
                  )}
                />
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
