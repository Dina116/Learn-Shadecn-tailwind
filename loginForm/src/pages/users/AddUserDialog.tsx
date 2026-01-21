import { SharedDialog } from "@/components/sharedComponenet/SharedDialog";
import { UserForm, type UserFormProps } from "./UserForm";

export default function AddUserDialog({ onSubmit }: UserFormProps) {

  return (
    <SharedDialog
      btnName="إضافة مستخدم"
      title="إضافة مستخدمين جدد"
      children={
        <div className="max-h-[70vh] overflow-y-auto">
          <UserForm onSubmit={onSubmit}/>
        </div>
      }
      className="bg-blue-900 hover:bg-blue-800"
    />
  );
}
