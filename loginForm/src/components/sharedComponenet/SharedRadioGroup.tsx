import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export type RadioGroupProps = {
  name: string;
  className?: string;
};
export function SharedRadioGroup({ name }: RadioGroupProps) {
  return (
    <RadioGroup defaultValue="comfortable" className="w-fit">
      <div className="flex flex-row justify-between gap-2">
        <Label htmlFor="r1">{name}</Label>
        <RadioGroupItem
          value={name}
          id={name}
          className="w-5 h-5 border-gray-400 checked:border-sky-900"
        />
      </div>
    </RadioGroup>
  );
}
