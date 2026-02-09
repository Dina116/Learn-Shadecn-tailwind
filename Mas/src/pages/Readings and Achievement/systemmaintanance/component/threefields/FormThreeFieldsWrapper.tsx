import { forwardRef, useImperativeHandle, useEffect } from "react";
import FormThreeFieldsUI from "./FormThreeFieldsUI";
import type {
  BookType,
  Emp,
  FormThreeFieldsProps,
  FormThreeFieldsRef,
  WalkType,
} from "../../types";
import { useRef } from "react";
import { useFormThreeFieldsLogic } from "../../../../../hooks/systemmaintanance/useFormThreeField";

const FormThreeFieldsWrapper = forwardRef<
  FormThreeFieldsRef,
  FormThreeFieldsProps
>(({ onSubmit, data, id }, ref) => {
  const formRef = useRef<HTMLFormElement>(null);
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
    emp,
  } = useFormThreeFieldsLogic({ onSubmit, data, id });

  useImperativeHandle(ref, () => ({
    submit: () => {
      console.log("Attempting to submit from wrapper...");
      handleSubmit(
        (data) => {
          console.log("Validation successful, calling onValidSubmit.");
          onValidSubmit(data);
        },
        (errors) => {
          console.error("Validation failed!", errors);
        },
      )();
    },
  }));

  useEffect(() => handleGroupChange(), [selectedGroup]);
  useEffect(() => handleBookChange(), [selectedBook]);
  console.log("emp from wrapper", emp);
  
  return (
    <FormThreeFieldsUI
      formRef={formRef}
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
      emp={
        emp?.map((item: Emp) => ({
          value: item.ID,
          label: `${item.ID} - ${item.FULL_NAME}`,
        })) || []
      }
      id={id}
    />
  );
});

export default FormThreeFieldsWrapper;
