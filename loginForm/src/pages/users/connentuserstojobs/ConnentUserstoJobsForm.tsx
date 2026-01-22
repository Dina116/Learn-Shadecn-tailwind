import { SharedRadioGroup } from "@/components/sharedComponenet/SharedRadioGroup";
import { SelectField } from "@/components/sharedComponenet/SharedSelect";
import { Button } from "@/components/ui/button";

export const ConnentUserstoJobsForm = () => {
  return (
    <form className="flex-flex-col justify-end items-start " dir="ltr">
      <div className="flex flex-row justify-end gap-5 pb-3">
        <SharedRadioGroup name={"الغاء التعيين"} />
        <SharedRadioGroup name={"تعيين"} />
      </div>
      <SelectField label="اسم المستخدم" />
      <SelectField label="اسم الوظيفة" />
      <div className="flex flex-row justify-end mt-5">
        <Button
          className=" text-right bg-sky-800 hover:bg-sky-900"
          type="submit"
        >
          حفظ
        </Button>
      </div>
    </form>
  );
};