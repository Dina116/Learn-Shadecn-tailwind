import { useQuery } from "@tanstack/react-query";
import { getCollectors } from "./SwitchApi";

export default function useSwitchCollectorPath() {
  const { data: emp = [] } = useQuery({
    queryKey: ["emp"],
    queryFn: () => getCollectors(),
  });
  console.log("emp from switch api", emp);
  return { emp };
}
