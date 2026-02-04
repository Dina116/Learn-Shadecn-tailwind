import { useQuery } from "@tanstack/react-query";
import { unassignedMeterWalks } from "../../api/ReadingPathApi";

export const useUnassignedMeterWalks = (enabled: boolean) => {
  return useQuery({
    queryKey: ["meterwalks", "unassigned"],
    queryFn: () => {
      console.log("enabled from useUnassignedWalks:", enabled);
      return unassignedMeterWalks(true);
    },
    enabled: enabled,
  });
};
