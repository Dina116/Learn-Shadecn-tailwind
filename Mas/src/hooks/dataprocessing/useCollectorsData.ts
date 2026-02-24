import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  Collectors,
  PaymentType,
  UnpostedDetail,
} from "../../pages/Readings and Achievement/dataprocessing/types";
import {
  changePaymentMethod,
  collectBill,
  getCollectors,
  getPaymentMethods,
  GetUnPostedDetails,
} from "../../api/dataparocessing/collectbills/CollectBillsApi";
import toast from "react-hot-toast";
import { GetCustomerReader } from "../../api/dataparocessing/DataProcessingApi";

export function useCollectors() {
  return useQuery<Collectors[]>({
    queryKey: ["collectors"],
    queryFn: getCollectors,
  });
}

export function usePaymentMethods() {
  return useQuery<PaymentType[]>({
    queryKey: ["paymentMethods"],
    queryFn: async () => {
      const res = await getPaymentMethods();
      return res;
    },
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

export function useChangePaymentMethod(empid: number | null) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: changePaymentMethod,

    onSuccess: () => {
      toast.success("تم تغيير طريقة الدفع بنجاح!");
      queryClient.invalidateQueries({
        queryKey: ["unpostedDetails", empid],
      });
    },

    onError: (error: Error) => {
      toast.error(`فشل التغيير: ${error.message}`);
    },
  });

  return mutation;
}

export function useGetCustomerReader() {
  const mutation = useMutation({
    mutationFn: GetCustomerReader,
  });

  return mutation;
}
