import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SelectProps } from "@/pages/sharedTypes";
import { Label } from "../ui/label";

export function SelectField(props: SelectProps) {
  return (
    <div className="flex flex-col items-end gap-2 w-full">
      <Label>{props.label}</Label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={props.label} className="w-full" />
        </SelectTrigger>
        <SelectContent className="w-full">
          <SelectGroup>
            <SelectLabel>{props.label}</SelectLabel> 
            {props.selectItems?.map((item) => (
              <SelectItem value={item}>{item}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
