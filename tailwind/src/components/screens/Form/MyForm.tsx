import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type defaultValue = {
  title: string;
  note: string;
};
const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  note: z.string().min(1, { message: "Note is required" }),
});
export default function MyForm() {
  const { register, handleSubmit, formState, reset } = useForm<defaultValue>({
    resolver: zodResolver(schema),
  });
  const { errors } = formState;
  const onSubmit = (data: defaultValue) => {
    console.log(data);
    reset();
  };
  return (
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
  );
}
