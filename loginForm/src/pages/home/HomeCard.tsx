import { Card, CardContent, CardHeader } from "@/components/ui/card";

type HomeCardProps = {
  children: React.ReactNode;
  title: string;
  subTitle: string;
  onClick?: () => void;
};
export default function HomeCard({
  children,
  title,
  subTitle,
  onClick,
}: HomeCardProps) {
  return (
    <Card
      className="shadow-lg w-60 h-60 flex flex-col items-center justify-center
     p-4 bg-white text-center text-blue-900 hover:text-white hover:bg-blue-900  transition-all rounded-full cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="p-0 gap-0 px-2 items-center">
        {" "}
        {children}
      </CardHeader>
      <CardContent className="font-bold text-lg p-0 ">{title}</CardContent>
      <CardContent className="p-0 gap-0 px-2 items-center text-center text-xs font-normal text-gray-500">
        {subTitle}
      </CardContent>
    </Card>
  );
}
