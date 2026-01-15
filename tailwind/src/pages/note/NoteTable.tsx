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

interface DataTableProps {
  notes: NoteWithID[];
  setNotes: (notes: NoteWithID[]) => void;
}
export function NoteTable({ notes, setNotes }: DataTableProps) {
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
          {notes.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.note}</TableCell>
              <TableCell className="text-right">
                <div className="flex gap-2 justify-end">
                  <Button
                    variant="ghost"
                    className="px-3 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-300"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() =>
                      alert("Are you sure you want to delete this note?") ||
                      setNotes((prev) =>
                        prev.filter((note) => note.id !== item.id)
                      )
                    }
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
