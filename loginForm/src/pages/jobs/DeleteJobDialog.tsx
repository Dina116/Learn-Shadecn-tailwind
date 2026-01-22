import ShortDialog from "@/components/sharedComponenet/ShortDialog";
import type { DeleteJobDialogProps } from "./types";

export default function DeleteJobDialog({
  onDelete,
  btnname,
  message,
}: DeleteJobDialogProps) {
  return (
    <ShortDialog btnname={btnname} message={message} onDelete={onDelete} />
  );
}
