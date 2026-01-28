import AlertDialog from "../../../../componenet/shared/AlertDialog";

export type DeleteScoutsDialogProps = {
  btnname: string;
  content: string;
  title: string;
  onDelete: () => void;
};
export default function DeleteScoutsDialog({
  btnname,
  content,
  title,
  onDelete
}: DeleteScoutsDialogProps) {
  return <AlertDialog btnname={btnname} content={content} title={title} onDelete={onDelete} />;
}
