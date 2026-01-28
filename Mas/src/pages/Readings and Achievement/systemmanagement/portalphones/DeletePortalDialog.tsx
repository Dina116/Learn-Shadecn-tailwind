import AlertDialog from "../../../../componenet/shared/AlertDialog";

export type DeletePortalDialogProps = {
  btnname: string;
  content: string;
  title: string;
  onDelete: () => void;
};
export default function DeletePortalDialog({
  btnname,
  content,
  title,
  onDelete
}: DeletePortalDialogProps) {
  return <AlertDialog btnname={btnname} content={content} title={title} onDelete={onDelete} />;
}
