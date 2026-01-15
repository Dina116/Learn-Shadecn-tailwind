import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { NoteWithID } from "./Types";
import type { InputFormData } from "./Types";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  note: z.string().min(1, { message: "Note is required" }),
});
interface FormProps {
  onSubmit: (data: NoteWithID) => void;
}
export default function MyForm(props: FormProps) {
  const { register, handleSubmit, formState, reset } = useForm<InputFormData>({
    defaultValues: {
      title: "",
      note: "",
    },
    resolver: zodResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = (data: InputFormData) => {
    const note: NoteWithID = { ...data, id: crypto.randomUUID() };
    props.onSubmit(note);
    reset();
  };
  return (
    <div className="flex flex-col w-full max-w-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center  mt-5 gap-4 w-full max-w-md"
      >
        <Input
          {...register("title", { required: true })}
          placeholder="Enter note title"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        <Input
          {...register("note", { required: true })}
          placeholder="Enter note details"
        />
        {errors.note && <p className="text-red-500">{errors.note.message}</p>}
        <Button
          variant="destructive"
          className="bg-slate-900 hover:bg-slate-600 text-white"
          size="lg"
          type="submit"
        >
          Save
        </Button>
      </form>
    </div>
  );
}
