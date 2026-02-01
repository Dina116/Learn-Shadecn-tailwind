import AlertDialog from "../../../../componenet/shared/AlertDialog";

export type DeleteTreasuryDialogProps = {
  btnname: string;
  content: string;
  title: string;
  onDelete: () => void;
};
export default function DeleteTreasuryDialog({
  btnname,
  content,
  title,
  onDelete,
}: DeleteTreasuryDialogProps) {
  return (
    <AlertDialog
      btnname={btnname}
      content={content}
      title={title}
      onDelete={onDelete}
    />
  );
}
