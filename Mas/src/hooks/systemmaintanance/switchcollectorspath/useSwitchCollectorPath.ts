import { useMutation, useQuery } from "@tanstack/react-query";

import { useState } from "react";
import type {
  SwitchFormType,
  WalkPath,
} from "../../../pages/Readings and Achievement/systemmaintanance/switchcollectorspath/types";
import { getCollectors, loadSwitchList } from "../../../api/systemmaintanance/switchcollectorspath/SwitchApi";

export default function useSwitchCollectorPath() {
  const [selectedFrom, setSelectedFrom] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [selectedTo, setSelectedTo] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const { data: emp = [] } = useQuery({
    queryKey: ["emp"],
    queryFn: () => getCollectors(),
  });
  console.log("emp from switch api", emp);

  const [switchData, setSwitchData] = useState<{
    from: WalkPath[];
    to: WalkPath[];
  }>({
    from: [],
    to: [],
  });

  const loadFromMutation = useMutation({
    mutationFn: (empid: string) => loadSwitchList(empid),
    onSuccess: (data) => setSwitchData((prev) => ({ ...prev, from: data })),
  });

  const loadToMutation = useMutation({
    mutationFn: (empid: string) => loadSwitchList(empid),
    onSuccess: (data) => setSwitchData((prev) => ({ ...prev, to: data })),
  });

  const handleSubmittion = (data: SwitchFormType) => {
    console.log("handleSubmittion called with:", data);

    const fromCollector = emp.find((e) => e.id === emp.ID);
    const toCollector = emp.find((e) => e.id === emp.ID);

    console.log("Found fromCollector:", fromCollector);
    console.log("Found toCollector:", toCollector);

    if (fromCollector)
      setSelectedFrom({ id: fromCollector.ID, name: fromCollector.FULL_NAME });
    console.log(
      "Selected From:",
      fromCollector
        ? { id: fromCollector.ID, name: fromCollector.FULL_NAME }
        : null,
    );

    if (toCollector)
      setSelectedTo({ id: toCollector.ID, name: toCollector.FULL_NAME });
    console.log(
      "Selected To:",
      toCollector ? { id: toCollector.ID, name: toCollector.FULL_NAME } : null,
    );

    loadFromMutation.mutate(data.from);
    loadToMutation.mutate(data.to);
  };

  return {
    emp,
    loadFromMutation,
    switchData,
    loadToMutation,
    handleSubmittion,
    selectedFrom,
    selectedTo,
  };
}
