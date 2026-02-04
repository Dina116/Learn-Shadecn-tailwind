import { useQuery } from "@tanstack/react-query";
import { getCollectors, getCustomerWalks } from "../../api/BellingApi";
export const useCustomerWalks = (groupId: string | null, load: boolean) => {
  console.log(
    "5. useCustomerWalks received -> load:",
    load,
    "groupId:",
    groupId,
  );
  const isQueryEnabled = load && !!groupId;
  console.log("6. Is query enabled?", isQueryEnabled);
  const walksQuery = useQuery({
    queryKey: ["walks"],
    queryFn: () => {
      console.log("7. EXECUTING queryFn for walks with groupId:", groupId);
      return getCustomerWalks(groupId!);
    },
    enabled: isQueryEnabled,
  });
  const collectorsQuery = useQuery({
    queryKey: ["collectors"],
    queryFn: () => {
      console.log("8. EXECUTING queryFn for collectors with groupId:", groupId);
      return getCollectors(groupId!);
    },
    enabled: isQueryEnabled,
  });
  return {
    walks: walksQuery.data ?? [],
    collectors: collectorsQuery.data ?? [],
    isLoading: walksQuery.isLoading || collectorsQuery.isLoading,
  };
};
