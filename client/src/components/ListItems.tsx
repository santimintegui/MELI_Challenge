import Card from "./common/Card";
import { Item } from "../types/Item";

type ListItemsProps = {
  items: Item[];
  showInfo: (id: string) => void;
};

function ListItems({ items, showInfo }: ListItemsProps) {
  return (
    <div>
      {items.map((item: Item, index: number) => (
        <div
          key={item.id}
          onClick={() => showInfo(item.id)}
          data-testid={item.id}
        >
          <Card item={item} isLast={index === items.length - 1} />
        </div>
      ))}
    </div>
  );
}

export default ListItems;
