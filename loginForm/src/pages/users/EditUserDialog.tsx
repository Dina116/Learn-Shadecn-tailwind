import { SharedDialog } from "@/components/sharedComponenet/SharedDialog";
import { UserForm } from "./UserForm";
import type { EditUserDialogProps } from "./types";

export default function EditUserDialog({
  rowdata,
  onSubmit,
}: EditUserDialogProps) {
  return (
    <SharedDialog
      btnName=" ✏️"
      title="تعديل مستخدم (SYSTEM)"
      className="bg-white hover:bg-gray-100  p-1 rounded"
      showPlusIcon={false}
    >
      {(closeDialog: () => void) => (
        <div className="max-h-[70vh] overflow-y-auto">
          <UserForm
            onSubmit={onSubmit}
            onClose={closeDialog}
            defaultValues={rowdata}
          />
        </div>
      )}
    </SharedDialog>
  );
}
