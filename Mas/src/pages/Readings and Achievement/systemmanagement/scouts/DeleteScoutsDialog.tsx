import AlertDialog from "../../../../componenet/shared/AlertDialog";
import { useDeleteScout } from "./api/useDeleteScout";

export type DeleteScoutsDialogProps = {
  btnname: string;
  content: string;
  title: string;
  scoutId: number;
};
export default function DeleteScoutsDialog({
  btnname,
  content,
  title,
  scoutId,
}: DeleteScoutsDialogProps) {
  const { mutate } = useDeleteScout();

  const handleDelete = () => {
    mutate(scoutId);
  };
  return (
    <AlertDialog
      btnname={btnname}
      content={content}
      title={title}
      onDelete={handleDelete}
    />
  );
}
