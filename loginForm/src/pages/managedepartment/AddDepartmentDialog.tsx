import { SharedDialog } from "@/components/sharedComponenet/SharedDialog";
import { DepartmentForm } from "./DepartmentForm";
import type { departmentFormProps } from "./types";

export default function AddDepartmentDialog({ onSubmit }: departmentFormProps) {
  return (
    <SharedDialog
      btnName="اضافة قسم"
      showPlusIcon={true}
      title="اضافة قسم جديد"
      className="bg-orange-600  hover:bg-orange-700"
      iconChildren={undefined}
    >
      {(closeDialog: () => void) => (
        <div className="max-h-[70vh] overflow-y-auto">
          <DepartmentForm onSubmit={onSubmit} onClose={closeDialog} />
        </div>
      )}
    </SharedDialog>
  );
}
