import MyForm from "./MyForm";
export default function FormScreen() {
  return (
    <>
      <div className="bg-slate-900 p-5">
        <p className="text-3xl font-semibold text-center text-white">
          Todo List
        </p>
      </div>
      <div className="flex justify-center mt-5">
        <MyForm />
      </div>
    </>
  );
}
