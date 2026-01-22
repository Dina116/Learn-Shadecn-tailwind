import { SharedDialog } from "@/components/sharedComponenet/SharedDialog";
import { JobForm } from "./JobForm";
import type { EditUserDialogProps } from "./types";

export default function EditUserDialog({
  rowdata,
  onSubmit,
}: EditUserDialogProps) {
  return (
    <SharedDialog
      btnName=" ✏️"
      title="تعديل مستخدم (SYSTEM)"
      children={
        <div className="max-h-[70vh] overflow-y-auto">
          <JobForm onSubmit={onSubmit} defaultValues={rowdata} />
        </div>
      }
      className="bg-gray-100 hover:bg-gray-100 p-1 rounded"
      showPlusIcon={false}
    />
  );
}
