import ShortDialog from "@/components/sharedComponenet/ShortDialog";
import type { DeleteUserDialogProps } from "./types";

export default function DeleteUserDialog({
  onDelete,
  btnname,
  message,
}: DeleteUserDialogProps) {
  return (
    <ShortDialog btnname={btnname} message={message} onDelete={onDelete} />
  );
}
