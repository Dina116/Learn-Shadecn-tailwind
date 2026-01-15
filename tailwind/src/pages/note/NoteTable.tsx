import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { NoteWithID } from "./Types";


interface DataTableProps {
  notes: NoteWithID[];
}
export function NoteTable({ notes }: DataTableProps) {
  console.log("notess", notes);

  return (
    <div className="overflow-hidden rounded-md border mt-10">
      <Table>
        <TableCaption>Your Notes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Note</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notes.map((notes) => (
            <TableRow key={notes.id}>
              <TableCell className="font-medium">{notes.title}</TableCell>
              <TableCell>{notes.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
