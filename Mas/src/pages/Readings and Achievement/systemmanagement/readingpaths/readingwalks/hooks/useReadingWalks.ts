import { useQuery } from "@tanstack/react-query";
import { getMeterWalks, getReaders } from "../../api/ReadingPathApi";
export const useReadingWalks = (groupId: string | null, load: boolean) => {
  console.log(
    "5. useReadingWalks received -> load:",
    load,
    "groupId:",
    groupId,
  );
  const isQueryEnabled = load && !!groupId;
  console.log("6. Is query enabled?", isQueryEnabled);

  const walksQuery = useQuery({
    queryKey: ["meterwalks"],
    queryFn: () => {
      console.log("7. EXECUTING queryFn for walks with groupId:", groupId);
      return getMeterWalks(groupId!);
    },
    enabled: isQueryEnabled,
  });
  const collectorsQuery = useQuery({
    queryKey: ["readers"],
    queryFn: () => {
      console.log("8. EXECUTING queryFn for readers with groupId:", groupId);
      return getReaders();
    },
    enabled: isQueryEnabled,
  });
  return {
    walks: walksQuery.data ?? [],
    collectors: collectorsQuery.data ?? [],
    isLoading: walksQuery.isLoading || collectorsQuery.isLoading,
  };
};
