import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { NoteWithID } from "./Types";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface DataTableProps {
  notes: NoteWithID[];
  setNotes: (notes: NoteWithID[]) => void;
}
export function NoteTable({ notes, setNotes }: DataTableProps) {
  const [editingNote, setEditingNote] = useState<NoteWithID | null>(null);
  console.log("notess", notes);

  return (
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
            const isEditing = editingNote?.id === item.id;
            return (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  {isEditing ? (
                    <input
                      type="text"
                      className="w-full border rounded px-2 py-1"
                      value={editingNote.title}
                      onChange={(e) =>
                        setEditingNote({
                          ...editingNote,
                          title: e.target.value,
                        })
                      }
                    />
                  ) : (
                    item.title
                  )}
                </TableCell>
                <TableCell>
                  {isEditing ? (
                    <input
                      type="text"
                      className="w-full border rounded px-2 py-1"
                      value={editingNote.note}
                      onChange={(e) =>
                        setEditingNote({
                          ...editingNote,
                          note: e.target.value,
                        })
                      }
                    />
                  ) : (
                    item.note
                  )}
                </TableCell>

                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    {isEditing ? (
                      <>
                        <Button
                          className="bg-green-600 text-white"
                          onClick={() => {
                            setNotes((prev) =>
                              prev.map((n) =>
                                n.id === editingNote.id ? editingNote : n
                              )
                            );
                            setEditingNote(null);
                          }}
                        >
                          Save
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => setEditingNote(null)}
                        >
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="ghost"
                          className="px-3 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-300"
                          onClick={() => setEditingNote(item)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={() =>
                            alert(
                              "Are you sure you want to delete this note?"
                            ) ||
                            setNotes((prev) =>
                              prev.filter((note) => note.id !== item.id)
                            )
                          }
                        >
                          Delete
                        </Button>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
