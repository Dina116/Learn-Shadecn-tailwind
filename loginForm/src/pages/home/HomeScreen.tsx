import { Button } from "@/components/ui/button";

export default function HomeScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
      <Button
        variant="default"
        className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
      >
        Home
      </Button>
    </div>
  );
}
