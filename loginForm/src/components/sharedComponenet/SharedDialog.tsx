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
import type { DialogProps } from "@/pages/sharedTypes";

export function SharedDialog(props: DialogProps) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="default" className="bg-blue-900 hover:bg-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white "
            >
              <path
                fill-rule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clip-rule="evenodd"
              />
            </svg>
            {props.btnName}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-right mt-5 text-gray-500">
              {props.title}
            </DialogTitle>
          </DialogHeader>
          <hr className="mt-1 border-gray-200" />
          {props.children}

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="border-1 border-blue-900">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-blue-900 hover:bg-blue-800">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
