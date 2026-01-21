import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type DeleteJobDialogProps = {
  onDelete: () => void;
};

export default function DeleteJobDialog({ onDelete }: DeleteJobDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gray-100 hover:bg-gray-100 p-1 rounded">
          🗑️
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>هل أنت متأكد من حذف الوظيفة؟</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline"> إلغاء</Button>
          </DialogClose>
          <Button type="submit" onClick={onDelete} variant="destructive">
            نعم
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
