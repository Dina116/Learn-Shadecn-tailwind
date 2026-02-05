import { forwardRef, useImperativeHandle, useEffect } from "react";
import FormThreeFieldsUI from "./FormThreeFieldsUI";
import type {
  BookType,
  FormThreeFieldsProps,
  FormThreeFieldsRef,
  WalkType,
} from "../../types";
import { useFormThreeFieldsLogic } from "./useFormThreeField";

const FormThreeFieldsWrapper = forwardRef<
  FormThreeFieldsRef,
  FormThreeFieldsProps
>(({ onSubmit, data, id }, ref) => {
  const {
    control,
    errors,
    books,
    walks,
    selectedGroup,
    selectedBook,
    onValidSubmit,
    handleSubmit,
    handleGroupChange,
    handleBookChange,
  } = useFormThreeFieldsLogic({ onSubmit, data, id });

  // forward the submit function to parent
  useImperativeHandle(ref, () => ({
    submit: handleSubmit(onValidSubmit),
  }));

  useEffect(() => handleGroupChange(), [selectedGroup]);
  useEffect(() => handleBookChange(), [selectedBook]);

  return (
    <FormThreeFieldsUI
      control={control}
      errors={errors}
      dataOptions={
        data?.map((item) => ({
          value: item.GROUP_ID,
          label: `${item.GROUP_ID} - ${item.DESCRIPTION}`,
        })) || []
      }
      books={
        books?.map((b: BookType) => ({ value: b.BOOK_NO, label: b.BOOK_NO })) ||
        []
      }
      walks={
        walks?.map((w: WalkType) => ({
          value: w.WALK_NO,
          label: w.WALK_DESCRIPTION,
        })) || []
      }
      id={id}
    />
  );
});

export default FormThreeFieldsWrapper;
