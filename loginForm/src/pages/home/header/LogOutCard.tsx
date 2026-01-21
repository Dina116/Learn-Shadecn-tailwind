import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function LogOutCard() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    console.log("is log out")
    navigate("/");
     console.log("log out done ")
  };
  return (
    <Card className="bg-white rounded-md shadow-lg cursor-pointer"  onClick={()=>handleLogOut()}>
      <CardContent
       
        className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 text-left"
      >
        تسجيل الخروج
      </CardContent>
    </Card>
  );
}
