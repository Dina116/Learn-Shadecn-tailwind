import { useState } from "react";
import toast from "react-hot-toast";
import type { mistakeTableTypes } from "../types";
import { buildErrorEntry } from "./collectionErrors";

export default function useCollectionErrors() {
  const [errorLog, setErrorLog] = useState<mistakeTableTypes[]>([]);

  const handleCollectionError = (errorMessage: string) => {
    const newError = buildErrorEntry(errorMessage);

    setErrorLog((prev) => [...prev, newError]);
    toast.error(errorMessage);
  };

  return { errorLog, handleCollectionError };
}
