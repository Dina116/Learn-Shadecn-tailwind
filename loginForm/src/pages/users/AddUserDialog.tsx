import Line from "@/components/sharedComponenet/Line";
import { SharedDialog } from "@/components/sharedComponenet/SharedDialog";
import { SelectField } from "@/components/sharedComponenet/SharedSelect";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// eslint-disable-next-line react-refresh/only-export-components
export const selectItemsCompanyData = ["هيئة المجتمعات العمرانية"];
// eslint-disable-next-line react-refresh/only-export-components
export const selectItemsJobsAndUserData = ["admin profile", "خدمة عملاء"];
// eslint-disable-next-line react-refresh/only-export-components
export const selectedItemsPrintData = ["عادي", "حراري"];
// eslint-disable-next-line react-refresh/only-export-components
export const selectedItemsDepartement = ["first", "second"];
const DialogJSX = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="grid  gap-3">
          <Label className="text-right font-semibold text-sm">
            الكود الوظيفي
          </Label>
          <Input id="username-1" name="username" />
        </div>
        <div className="grid gap-1">
          <Label className="text-right font-semibold text-sm">
            اسم المستخدم
          </Label>
          <Input id="name-1" name="name" />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="grid  gap-3">
          <Label className="text-right font-semibold text-sm">
            كلمة المرور
          </Label>
          <Input id="username-1" name="username" />
        </div>
        <div className="grid gap-1">
          <Label className="text-right font-semibold text-sm">اسم الدخول</Label>
          <Input id="name-1" name="name" />
        </div>
      </div>
      <Line lineName="بيانات الشركة" />
      <SelectField label="الشركة" selectItems={selectItemsCompanyData} />
      <SelectField label="الفرع" />
      <SelectField label="الفرع الافتراضي" />
      <Line lineName="الوظيفة والبيانات المرتبطه بالمستخدم" />
      <SelectField
        label="تعيين الوظيفة"
        selectItems={selectItemsJobsAndUserData}
      />
      <SelectField label="نوع الطباعه" selectItems={selectedItemsPrintData} />
      <SelectField label="الاقسام" selectItems={selectedItemsDepartement} />
      <div className="flex flex-row justify-end gap-2 mt-2">
        <Label>نشط</Label>
        <Checkbox id="terms" defaultChecked />
      </div>
      <hr className="mt-1 border-gray-200" />
      <div className="flex flex-row justify-end gap-2 mt-5 mb-5">
        <Button variant="outline" className="border-1 border-blue-900">
          إلغاء
        </Button>
        <Button variant="default" className="bg-blue-900 hover:bg-blue-800">
          حفظ
        </Button>
      </div>
    </div>
  );
};
export default function AddUserDialog() {
  return (
    <SharedDialog
      btnName="إضافة مستخدم"
      title="إضافة مستخدمين جدد"
      children={
        <div className="max-h-[70vh] overflow-y-auto">{DialogJSX()}</div>
      }
    />
  );
}
