import { useQuery } from "@tanstack/react-query";
import { unassignedWalks } from "../../../../pages/Readings and Achievement/systemmanagement/bellingsystem/api/BellingApi";


export const useUnassignedWalks = (enabled: boolean) => {
  return useQuery({
    queryKey: ["walks", "unassigned"],
    queryFn: () => {
      console.log("enabled from useUnassignedWalks:", enabled);
      return unassignedWalks(true);
    },
    enabled: enabled,
  });
};
