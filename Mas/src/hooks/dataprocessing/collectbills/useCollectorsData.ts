import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  Collectors,
  UnpostedDetail,
} from "../../../pages/Readings and Achievement/dataprocessing/types";
import {
  collectBill,
  getCollectors,
  GetUnPostedDetails,
} from "../../../api/dataparocessing/collectbills/CollectBillsApi";
import toast from "react-hot-toast";

export function useCollectors() {
  return useQuery<Collectors[]>({
    queryKey: ["collectors"],
    queryFn: getCollectors,
  });
}
export function useUnpostedDetails(empid: number | null) {
  return useQuery<UnpostedDetail[]>({
    queryKey: ["unpostedDetails", empid],
    queryFn: () => GetUnPostedDetails({ empid: empid! }),
    enabled: !!empid,
  });
}

export default function useCollectBill(
  selectedCollectorId: number | null,
  onCollectError: (msg: string) => void,
) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: collectBill,

    onSuccess: () => {
      toast.success("تم تحصيل الفاتورة بنجاح!");

      queryClient.invalidateQueries({
        queryKey: ["unpostedDetails", selectedCollectorId],
      });
    },

    onError: (error) => {
      if (error instanceof Error) {
        onCollectError(error.message);
      } else {
        onCollectError("حدث خطأ غير معروف");
      }
    },
  });

  return mutation;
}
