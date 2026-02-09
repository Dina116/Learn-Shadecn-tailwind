import { useCallback, useState } from "react";
import type { LoadType } from "../../../pages/Readings and Achievement/systemmanagement/bellingsystem/types";


export const useBellingSystem = () => {
  const [groupId, setGroupId] = useState<string>("");
  const [activeLoad, setActiveLoad] = useState<LoadType>(null);

  const handleLoadByGroup = () => {
    console.log("1. handleLoad called. Current groupId:", groupId);
    if (!groupId) {
      setGroupId("*");
      console.log("2. groupId was empty, setting to '*'");
    }
    setActiveLoad("byGroup");
    console.log("3. setLoad(true) executed.");
  };

  const handleLoadUnassigned = () => {
    setActiveLoad("unassigned");
  };
  const handleChange = useCallback(
    (
      e:
        | React.ChangeEvent<
            Omit<HTMLInputElement, "value"> & {
              value: string;
            }
          >
        | (Event & {
            target: {
              value: string;
              name: string;
            };
          }),
    ) => {
      setGroupId(e.target.value);
    },
    [],
  );
  return { groupId, activeLoad, handleLoadByGroup, handleLoadUnassigned ,handleChange};
};
