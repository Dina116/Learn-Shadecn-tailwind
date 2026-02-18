import { forwardRef, useImperativeHandle, useMemo } from "react";
import type {
  ReaderFormValues,
  ReadersFormRef,
  renderFormProps,
} from "../../../types";
import { useForm } from "react-hook-form";
import { getActivityItems } from "../utils/getActivityItems ";
import { ReaderSelector } from "./ReaderSelector";
import { ActivityAndConsumpFields } from "./ActivityAndConsumpFields";

const ReadersForm = forwardRef<ReadersFormRef, renderFormProps>(
  ({ readers, onSubmit }, ref) => {
    const { control, handleSubmit, watch } = useForm<ReaderFormValues>({
      defaultValues: {
        readerId: undefined,
        activityId: undefined,
        consumpFrom: 100,
      },
    });

    const consumpFrom = watch("consumpFrom");
    const consumpTo = watch("consumpTo");
    const selectedActivityId = watch("activityId");

    const activityItems = useMemo(
      () => getActivityItems(consumpFrom, consumpTo),
      [consumpFrom, consumpTo],
    );

    const handleFormSubmit = (data: ReaderFormValues) => {
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
        <ReaderSelector readers={readers} control={control} />
        <ActivityAndConsumpFields
          control={control}
          activityItems={activityItems}
          selectedActivityId={selectedActivityId}
        />
      </form>
    );
  },
);

export default ReadersForm;
