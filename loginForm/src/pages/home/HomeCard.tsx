import { Card, CardContent } from "@/components/ui/card";

export type HomeCardProps = {
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
      className="shadow-lg w-50 h-50 flex flex-col items-center justify-center
     p-4 bg-white text-center text-sky-900 hover:text-white hover:bg-sky-900  transition-all rounded-full cursor-pointer"
      onClick={onClick}
    >
      <CardContent>
        <div className="flex flex-col justify-center items-center">
          <p>{children}</p>
          <p className="font-bold text-lg p-0 ">{title}</p>
          <p className="p-0 gap-0 px-2 items-center text-center text-xs font-normal text-gray-500">
            {subTitle}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
