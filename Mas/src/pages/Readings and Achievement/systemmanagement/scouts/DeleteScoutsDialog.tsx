import AlertDialog from "../../../../componenet/shared/AlertDialog";

export type DeleteScoutsDialogProps = {
  btnname: string;
  content: string;
  title: string;
};
export default function DeleteScoutsDialog({
  btnname,
  content,
  title,
}: DeleteScoutsDialogProps) {
  return <AlertDialog btnname={btnname} content={content} title={title} />;
}
