import { useState } from "react";
import type { NoteWithID } from "./Types";

export const useNote = () => {
  const [notes, setNotes] = useState<NoteWithID[]>([]);
  return { notes, setNotes };
};
