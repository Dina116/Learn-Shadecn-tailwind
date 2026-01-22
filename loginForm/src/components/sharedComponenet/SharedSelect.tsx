import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SelectProps } from "@/pages/sharedTypes";
import { Label } from "../ui/label";

export function SelectField(props: SelectProps) {
  return (
    <div className="flex flex-col items-end gap-2 w-full" dir="ltr">
      <Label>{props.label}</Label>
      <Select
        value={props.value}
        onValueChange={(val) => {
          props.onChange?.(val);
        }}
      >
        <SelectTrigger className="w-full flex flex-row-reverse">
          <SelectValue placeholder={props.label} className="w-full" />
        </SelectTrigger>
        <SelectContent className=" w-full">
          {props.selectItems?.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
