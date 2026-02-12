import type { CardReadingItem } from "../types";
import CardWithButton from "./CardWithButton";

type ReadingCardsProps = {
  items: CardReadingItem[];
  onCardClick: (id: string) => void;
};
export default function ReadingCards({
  items,
  onCardClick,
}: ReadingCardsProps) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      style={{ direction: "rtl" }}
    >
      {items.map((item) => (
        <div key={item.id} className="w-full mx-auto">
          <CardWithButton
            children={item.icon}
            content={item.content}
            onClick={() => onCardClick(item.id)}
          />
        </div>
      ))}
    </div>
  );
}
