import { forwardRef, useImperativeHandle, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type {
  WalkFormProps,
  WalkFormUIRef,
  WalkFormValues,
} from "../../../types";
import { WalkFormSchema } from "../WalkFormSchema";

import WalkBasicFields from "./WalkBasicFields";
import WalkActivitySection from "./WalkActivitySection";
import { getActivityItems } from "../utils/getActivityItems ";


const WalkForm = forwardRef<WalkFormUIRef, WalkFormProps>(
  ({ onSubmit }, ref) => {
    const { control, handleSubmit, watch } = useForm<WalkFormValues>({
      resolver: zodResolver(WalkFormSchema),
      defaultValues: {
        WALK_NO: "",
        activityId: 0,
        BILLGROUP: "",
        BOOK_NO: "",
        consumpFrom: 0,
        consumpTo: 0,
      },
    });

    const consumpFrom = watch("consumpFrom");
    const consumpTo = watch("consumpTo");
    const selectedActivityId = watch("activityId");

    const activityItems = useMemo(
      () => getActivityItems(consumpFrom, consumpTo),
      [consumpFrom, consumpTo],
    );

    const handleFormSubmit = (data: WalkFormValues) => {
      console.log("Raw data from WalkForm to be sent to parent:", data);
      onSubmit?.(data);
    };

    useImperativeHandle(ref, () => ({
      submit: () => handleSubmit(handleFormSubmit)(),
    }));

    return (
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-3 p-4"
      >
        <WalkBasicFields control={control} />

        <WalkActivitySection
          control={control}
          activityItems={activityItems}
          selectedActivityId={selectedActivityId}
        />
      </form>
    );
  },
);

export default WalkForm;
