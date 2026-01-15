export type InputFormData = {
  title: string;
  note: string;
};
export type NoteWithID = InputFormData & { id: string };