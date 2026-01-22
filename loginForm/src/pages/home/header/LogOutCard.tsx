import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function LogOutCard() {
  return (
    <Link to="/">
      <Card className="bg-white rounded-md shadow-lg cursor-pointer">
        <CardContent className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 text-left">
          تسجيل الخروج
        </CardContent>
      </Card>
    </Link>
  );
}
