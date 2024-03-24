import Card from "./Card";
import { ITEM } from "../types/Item";

type ListItemsProps = {
  items: ITEM[];
  showInfo: (id: string) => void;
};

function ListItems({ items, showInfo }: ListItemsProps) {
  return (
    <div className="list-container">
      {items.map((item: any) => (
        <div key={item.id} onClick={() => showInfo(item.id)}>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
}

export default ListItems;
