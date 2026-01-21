import { SharedDialog } from "@/components/sharedComponenet/SharedDialog";
import { JobForm, type jobFormProps } from "./JobForm";

export default function AddJobDialog({ onSubmit }: jobFormProps) {
  return (
    <SharedDialog
      btnName=" إضافة وظيفة"
      className="bg-orange-600  hover:bg-orange-700"
      children={
        <div className="max-h-[70vh] overflow-y-auto">
          <JobForm onSubmit={onSubmit} />
        </div>
      }
    />
  );
}
