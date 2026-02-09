import AlertDialog from "../../../../componenet/shared/AlertDialog";
import { useDeleteDevice } from "../../../../hooks/systemmanagement/deviceprocedures/useDeleteDevice";


export type DeleteDeviceDialogProps = {
  btnname: string;
  content: string;
  title: string;
  deviceId: number;
};
export default function DeleteDeviceDialog({
  btnname,
  content,
  title,
  deviceId,
}: DeleteDeviceDialogProps) {
  const { mutate } = useDeleteDevice();
  const handleDelete = () => {
    console.log("Deleting device id:", deviceId);
    mutate(deviceId);
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
