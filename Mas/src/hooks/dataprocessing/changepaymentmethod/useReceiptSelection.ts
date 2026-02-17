import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import type { UnpostedDetail } from "../../../pages/Readings and Achievement/dataprocessing/types";


export default function useReceiptSelection(
  unpostedDetails: UnpostedDetail[] | undefined,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeMethodMutate: any,
) {
  const [bulkNewMethodId, setBulkNewMethodId] = useState<number | null>(null);
  const [selectedReceipts, setSelectedReceipts] = useState<string[]>([]);

  const handleSelectRow = useCallback((receiptNo: string) => {
    setSelectedReceipts((prev) =>
      prev.includes(receiptNo)
        ? prev.filter((id) => id !== receiptNo)
        : [...prev, receiptNo],
    );
  }, []);

  const handleSelectAll = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        const allReceipts = (unpostedDetails ?? []).map((d) => d.RECEIPT_NO);
        setSelectedReceipts(allReceipts);
      } else {
        setSelectedReceipts([]);
      }
    },
    [unpostedDetails],
  );

  const handleBulkSave = () => {
    if (!bulkNewMethodId) {
      toast.error("الرجاء اختيار طريقة دفع جديدة");
      return;
    }
    if (selectedReceipts.length === 0) {
      toast.error("الرجاء تحديد فاتورة واحدة على الأقل");
      return;
    }
    changeMethodMutate({
      Recipts: selectedReceipts,
      PaymentMethod: bulkNewMethodId,
    });
  };

  return {
    bulkNewMethodId,
    setBulkNewMethodId,
    selectedReceipts,
    setSelectedReceipts,
    handleSelectRow,
    handleSelectAll,
    handleBulkSave,
  };
}
