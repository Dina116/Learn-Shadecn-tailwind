import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "./header/Navbar";

export default function HomeScreen() {
  const navigation = useNavigate();
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-col gap-4  ">
        <Button
          variant="default"
          className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigation("/")}
        >
          Home
        </Button>
      </div>
    </>
  );
}
