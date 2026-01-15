import MyForm from "./MyForm";
import { NoteTable } from "./NoteTable";
import type { NoteWithID } from "./Types";
import { useNote } from "./useNote";
export default function FormScreen() {
  const { notes, setNotes } = useNote();
  const handleSetNote = (data: NoteWithID) => {
    setNotes((prev) => [...prev, data]);
  };
  return (
    <>
      <div className="bg-slate-900 p-5">
        <p className="text-3xl font-semibold text-center text-white">
          Todo List
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <MyForm onSubmit={handleSetNote} />
        <NoteTable notes={notes} />
      </div>
    </>
  );
}
