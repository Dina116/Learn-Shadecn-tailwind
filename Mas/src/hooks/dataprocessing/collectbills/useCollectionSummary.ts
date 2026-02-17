import type { UnpostedDetail } from "../../../pages/Readings and Achievement/dataprocessing/types";

export function useCollectionSummary(data: UnpostedDetail[] | undefined) {
  const safeData = data ?? [];

  const totalAmount = safeData.reduce(
    (sum, item) => sum + item.COLLECTED_AMOUNT,
    0,
  );

  const totalCount = safeData.length;

  return { totalAmount, totalCount };
}
