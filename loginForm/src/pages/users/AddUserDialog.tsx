import { SharedDialog } from "@/components/sharedComponenet/SharedDialog";
import { UserForm } from "./UserForm";
import type { UserFormProps } from "./types";

export default function AddUserDialog({ onSubmit }: UserFormProps) {
  return (
    <SharedDialog
      btnName="إضافة مستخدم"
      title="إضافة مستخدمين جدد"
      className="bg-sky-800 hover:bg-sky-900"
      showPlusIcon={true}
    >
      {(
        closeDialog: () => void,
      ) => (
        <div className="max-h-[70vh] overflow-y-auto">
          <UserForm onSubmit={onSubmit} onClose={closeDialog} />
        </div>
      )}
    </SharedDialog>
  );
}
