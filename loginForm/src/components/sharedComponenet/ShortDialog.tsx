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

type ShortDialogProps = {
  onDelete: () => void;
  btnname: string;
  message: string;
};

export default function ShortDialog({
  onDelete,
  btnname,
  message,
}: ShortDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white hover:bg-white p-1 rounded">
          {btnname}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{message}</DialogTitle>
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
