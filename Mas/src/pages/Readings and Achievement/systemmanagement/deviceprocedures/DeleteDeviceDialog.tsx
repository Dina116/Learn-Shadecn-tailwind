import AlertDialog from "../../../../componenet/shared/AlertDialog";

export type DeleteDeviceDialogProps = {
  btnname: string;
  content: string;
  title: string;
  onDelete: () => void;
};
export default function DeleteDeviceDialog({
  btnname,
  content,
  title,
  onDelete,
}: DeleteDeviceDialogProps) {
  return (
    <AlertDialog
      btnname={btnname}
      content={content}
      title={title}
      onDelete={onDelete}
    />
  );
}
