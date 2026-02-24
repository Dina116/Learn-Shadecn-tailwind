import RefreshIcon from "@mui/icons-material/Refresh";
import { useFormContext } from "react-hook-form";
import type { formInputDataType, RefreshButtonProps } from "../types";

export default function RefreshButton({
  valueToFetch,
  fetchFn,
  onFetchComplete,
  paramName,
  extraParams,
}: RefreshButtonProps) {
  const { setValue } = useFormContext<formInputDataType>();

  const handleClick = async () => {
    console.log("handleClick triggered inside RefreshButton.");
    const value = valueToFetch;
    console.log("Value received from prop 'valueToFetch':", value);

    if (value === null || value === undefined || String(value).trim() === "") {
      console.warn("Value is null, undefined, or empty. Aborting fetch.");
      return;
    }
    console.log(`Proceeding to fetch with value: "${value}"`);
    try {
      const payload = {
        [paramName]: value,
        ...extraParams,
      };
      console.log("Payload being sent to fetchFn:", payload);
      console.log(
        "[RefreshButton] Final payload being sent to fetchFn:",
        payload,
      );
      const data = await fetchFn(payload);

      console.log("Data received from API to be set in form:", data);

      const updatedFields: string[] = [];

      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const rawValue = data[key as keyof typeof data];
          setValue(key as keyof formInputDataType, rawValue);
          updatedFields.push(key);
        }
      }
      onFetchComplete?.(data, updatedFields);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };
  return (
    <RefreshIcon
      sx={{ marginTop: "20px", color: "gray" }}
      onClick={handleClick}
    />
  );
}
