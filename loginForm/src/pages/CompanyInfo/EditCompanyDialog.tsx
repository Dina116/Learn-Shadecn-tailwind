import { SharedDialog } from "@/components/sharedComponenet/SharedDialog";
import type { EditCompanyDialogProps } from "./types";
import { CompanyForm } from "./CompanyForm";

export default function EditCompanyDialog({
  rowdata,
  onSubmit,
}: EditCompanyDialogProps) {
  return (
    <SharedDialog
      btnName=" ✏️"
      title="تعديل مستخدم (SYSTEM)"
      className="bg-white hover:bg-gray-100  p-1 rounded"
      showPlusIcon={false}
      iconChildren={undefined}
    >
      {(closeDialog: () => void) => (
        <div className="max-h-[70vh] overflow-y-auto">
          <CompanyForm
            onSubmit={onSubmit}
            onClose={closeDialog}
            defaultValues={rowdata}
          />
        </div>
      )}
    </SharedDialog>
  );
}
