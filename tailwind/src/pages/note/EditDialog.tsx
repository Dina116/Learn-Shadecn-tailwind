import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";
import type { EditDialogProps } from "./Types";

export function EditDialog({
  open,
  onOpenChange,
  note,
  onSave,
}: EditDialogProps) {

  const [title, setTitle] = useState(note?.title || "");
  const [noteContent, setNoteContent] = useState(note?.note || "");

  console.log(
    "EditDialog RENDERED. Received props: open is:",
    open,
    "Note is:",
    note,
  );
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setNoteContent(note.note);
    }
  }, [note]);
  const handleSave = () => {
    onSave({ ...note, title, note: noteContent });
  };

  if (!open) {
    console.log("EditDialog: 'open' is false, so returning null.");
    return null;
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Note</DialogTitle>
        </DialogHeader>
        <form>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="note">Note</Label>
              <Input
                id="note"
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
              />
            </div>
          </div>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" onClick={handleSave}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
