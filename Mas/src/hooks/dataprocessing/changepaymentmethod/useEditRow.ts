import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import type { UnpostedDetail } from "../../../pages/Readings and Achievement/dataprocessing/types";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useEditRow(changeMethodMutate: any) {
  const [editingRowKey, setEditingRowKey] = useState<string | null>(null);
  const [selectedNewMethodId, setSelectedNewMethodId] = useState<number | null>(
    null,
  );

  const handleSaveClick = useCallback(
    (row: UnpostedDetail) => {
      if (selectedNewMethodId === null || selectedNewMethodId === undefined) {
        toast.error("الرجاء اختيار طريقة دفع جديدة");
        return;
      }
      changeMethodMutate({
        Recipts: [row.RECEIPT_NO],
        PaymentMethod: selectedNewMethodId,
      });

      setEditingRowKey(null);
    },
    [changeMethodMutate, selectedNewMethodId],
  );

  return {
    editingRowKey,
    setEditingRowKey,
    selectedNewMethodId,
    setSelectedNewMethodId,
    handleSaveClick,
  };
}
