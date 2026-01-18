import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { DataTableProps, NoteWithID } from "./Types";
import { Button } from "@/components/ui/button";
import { EditDialog } from "./EditDialog";
import { useState } from "react";
import DeleteDialog from "./DeleteDialog";

export function NoteTable({ notes, setNotes }: DataTableProps) {
  const [editingNote, setEditingNote] = useState<NoteWithID | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  console.log(
    "NoteTable RENDERED. isDialogOpen is:",
    isEditDialogOpen,
    "Editing note is:",
    editingNote,
  );

  const handleEditClick = (note: NoteWithID) => {
    console.log("--- EDIT BUTTON CLICKED ---");
    console.log("Setting state: isDialogOpen -> true, editingNote ->", note);
    setEditingNote(note);
    setIsEditDialogOpen(true);
  };

  const handleSaveChanges = (formData: NoteWithID) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === editingNote.id ? { ...note, ...formData } : note,
      ),
    );
    setIsEditDialogOpen(false);
  };

  const handleDelete = (item: NoteWithID) => {
    setNotes((prev) => prev.filter((note) => note.id !== item.id));
  };
  return (
    <>
      <div className="overflow-hidden rounded-md border mt-10">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Note</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notes.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.note}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                      <Button
                        variant="ghost"
                        className="px-3 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-300"
                        onClick={() => {
                          handleEditClick(item);
                        }}
                      >
                        Edit
                      </Button>
                      <DeleteDialog onDelete={() => handleDelete(item)} />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <EditDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        note={editingNote}
        onSave={handleSaveChanges}
      />
    </>
  );
}
