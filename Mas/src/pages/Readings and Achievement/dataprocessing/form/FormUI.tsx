import React, { forwardRef } from "react";
import { RenderForm } from "./FormCases";
import type {
  formInputDataType,
  formtDataType,
  FormUIRef,
  Receipt,
} from "../types";
import { useFormContext } from "react-hook-form";

type Props = {
  id: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  data?: formtDataType[];
  onFetchComplete: (
    fetchedData: Partial<formInputDataType>,
    fieldNames: string[],
  ) => void;
  disabledFields: string[];
  tableData: Receipt[];
  selectedRows: Receipt[];
  setSelectedRows: (rows: Receipt[]) => void;
};
const FormUI = forwardRef<FormUIRef, Props>(
  ({
    id,
    disabledFields,
    onFetchComplete,
    tableData,
    selectedRows,
    setSelectedRows,
  }) => {
    const formRef = React.useRef<HTMLFormElement>(null);
    const {
      control,
      formState: { errors },
      watch,
    } = useFormContext<formInputDataType>();
    return (
      <form ref={formRef} noValidate dir="rtl" style={{ padding: "16px" }}>
        {RenderForm({
          id,
          control,
          errors,
          watch,
          disabledFields,
          onFetchComplete,
          selectedRows,
          setSelectedRows,
          tableData,
        })}
      </form>
    );
  },
);
export default FormUI;
