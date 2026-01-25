import ShortDialog from "@/components/sharedComponenet/ShortDialog";
import type { DeleteDepartmentDialogProps } from "./types";

export default function DeleteDepartmentDialog({
  btnname,
  message,
  onDelete,
}: DeleteDepartmentDialogProps) {
  return (
    <ShortDialog btnname={btnname} message={message} onDelete={onDelete} />
  );
}
