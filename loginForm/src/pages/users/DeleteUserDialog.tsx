import ShortDialog from "@/components/sharedComponenet/ShortDialog";

type DeleteUserDialogProps = {
  onDelete: () => void;
  btnname: string;
  message: string;
};

export default function DeleteUserDialog({
  onDelete,
  btnname,
  message,
}: DeleteUserDialogProps) {
  return (
    <ShortDialog btnname={btnname} message={message} onDelete={onDelete} />
  );
}
