import ShortDialog from "@/components/sharedComponenet/ShortDialog";

type DeleteJobDialogProps = {
  onDelete: () => void;
  btnname: string;
  message: string;
};

export default function DeleteJobDialog({
  onDelete,
  btnname,
  message,
}: DeleteJobDialogProps) {
  return (
    <ShortDialog btnname={btnname} message={message} onDelete={onDelete} />
  );
}
