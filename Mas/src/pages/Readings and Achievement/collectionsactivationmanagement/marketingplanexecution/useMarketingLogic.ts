import { useMemo, useState } from "react";
import type { GETMARKETINGPLANREQ } from "../types";
import toast from "react-hot-toast";
import { useApplMarketingPlanApi } from "./marketing";

export function useMarketingLogic() {
  const [rawFilters, setRawFilters] = useState<GETMARKETINGPLANREQ | null>(
    null,
  );
  const [selectedBillGroups, setSelectedBillGroups] = useState<string[]>([]);
  const filters = useMemo(() => {
    if (!rawFilters) return null;
    return {
      plan_id: rawFilters.plan_id,
      bilngDate: rawFilters.bilngDate,
      target: rawFilters.target,
      refAmount: rawFilters.refAmount,
      noMonthes: rawFilters.noMonthes,
      rejected: rawFilters.rejected,
    };
  }, [rawFilters]);
  const {
    data: apiResponse,
    isLoading,
    refetch,
  } = useApplMarketingPlanApi(filters);

  const handleFilterSubmit = (data: GETMARKETINGPLANREQ) => {
    console.log("تم استقبال بيانات الفلترة:", data);
    setRawFilters(data);
  };

  const handleSelectionChange = (selectedKeys: string[]) => {
    console.log("تم تحديث الاختيارات:", selectedKeys);
    setSelectedBillGroups(selectedKeys);
  };

  const handleExecute = () => {
    if (selectedBillGroups.length === 0) {
      toast.error("يجب اختيار مجموعة واحدة على الأقل للتنفيذ.");
      return;
    }
    console.log("سيتم التنفيذ على المجموعات:", selectedBillGroups);
    toast.success(
      `تم إرسال ${selectedBillGroups.length} مجموعة للتنفيذ بنجاح!`,
    );

    setSelectedBillGroups([]);
  };

  return {
    apiResponse,
    isLoading,
    selectedBillGroups,
    handleFilterSubmit,
    handleSelectionChange,
    handleExecute,
    refetch,
  };
}
