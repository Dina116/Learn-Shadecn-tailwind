import type { LineProp } from "@/pages/sharedTypes";

export default function Line(lineName?: LineProp) {
  return (
    <div className="relative my-6 flex items-center">
      <div className="flex-grow border-t border-gray-200" />

      <span className="mx-4 rounded-full bg-orange-500 px-4 py-1 text-sm text-white">
        {lineName?.lineName}
      </span>
      <div className="flex-grow border-t border-gray-200" />
    </div>
  );
}
