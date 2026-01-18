export type InputFormData = {
  title: string;
  note: string;
};
export type NoteWithID = InputFormData & { id: string };
export type EditDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  note: NoteWithID | null;
  onSave: (formData: NoteWithID) => void;
};
export interface DataTableProps {
  notes: NoteWithID[];
  setNotes: (notes: NoteWithID[]) => void;
}