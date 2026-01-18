import { useState } from "react";
import type { NoteWithID } from "./Types";

export const useNote = () => {
  const [notes, setNotes] = useState<NoteWithID[]>([]);
    const handleSetNote = (data: NoteWithID) => {
    setNotes((prev) => [...prev, data]);
  };
  return { notes, setNotes, handleSetNote };
};
