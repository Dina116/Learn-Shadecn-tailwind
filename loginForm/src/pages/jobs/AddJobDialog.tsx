import { SharedDialog } from "@/components/sharedComponenet/SharedDialog";
import { JobForm } from "./JobForm";
import type { jobFormProps } from "./types";

export default function AddJobDialog({ onSubmit }: jobFormProps) {
  return (
    <SharedDialog
      btnName=" إضافة وظيفة"
      className="bg-orange-600  hover:bg-orange-700"
      // children={
      //   <div className="max-h-[70vh] overflow-y-auto">
      //     <JobForm onSubmit={onSubmit} />
      //   </div>
      // }
      showPlusIcon={true}
    >
      {(closeDialog: () => void) => (
        <div className="max-h-[70vh] overflow-y-auto">
          <JobForm onSubmit={onSubmit} onClose={closeDialog} />
        </div>
      )}
    </SharedDialog>
  );
}
