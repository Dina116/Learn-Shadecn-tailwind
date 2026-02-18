import { useState } from "react";
import toast from "react-hot-toast";
import type { mistakeTableTypes } from "../../../pages/Readings and Achievement/dataprocessing/types";
import { buildErrorEntry } from "../../../pages/Readings and Achievement/dataprocessing/collecting/collectbills/collectionErrors";

export default function useCollectionErrors() {
  const [errorLog, setErrorLog] = useState<mistakeTableTypes[]>([]);

  const handleCollectionError = (errorMessage: string) => {
    const newError = buildErrorEntry(errorMessage);

    setErrorLog((prev) => [...prev, newError]);
    toast.error(errorMessage);
  };

  return { errorLog, handleCollectionError };
}
