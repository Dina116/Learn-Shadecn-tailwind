import AlertDialog from "../../../../componenet/shared/AlertDialog";
import { useDeletePortal } from "./api/useDeletePortal";

export type DeletePortalDialogProps = {
  btnname: string;
  content: string;
  title: string;
  portalId: number;
};
export default function DeletePortalDialog({
  btnname,
  content,
  title,
  portalId,
}: DeletePortalDialogProps) {
  const { mutate } = useDeletePortal();
  
    const handleDelete = () => {
      console.log("Deleting device id:", portalId);
      mutate(portalId);
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
