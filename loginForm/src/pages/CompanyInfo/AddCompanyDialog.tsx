import { SharedDialog } from "@/components/sharedComponenet/SharedDialog";
import { CompanyForm } from "./CompanyForm";
import type { companyFormProps } from "./types";

export default function AddCompanyDialog({ onSubmit }: companyFormProps) {
  return (
    <SharedDialog
      btnName="اضافة شركة"
      showPlusIcon={true}
      title="اضافة قسم جديد"
      className="bg-orange-600  hover:bg-orange-700"
      iconChildren={undefined}
    >
      {(closeDialog: () => void) => (
        <div className="max-h-[70vh] overflow-y-auto">
          <CompanyForm onSubmit={onSubmit} onClose={closeDialog} />
        </div>
      )}
    </SharedDialog>
  );
}
