import { Item } from "../types/Item";
import BuySection from "./BuySection";

type ItemInfoProps = {
  item: Item;
};

function ItemInfo({
  item: {
    picture,
    description = "No contiene descripcion",
    price,
    condition = "not_specified",
    sold_quantity = 0,
    title,
  },
}: ItemInfoProps) {
  return (
    <>
      <div className="image">
        <img
          src={picture}
          style={{ maxWidth: "100%", height: "auto", width: "680px" }}
        />
      </div>
      <BuySection
        title={title}
        price={price}
        sold_quantity={sold_quantity}
        condition={condition}
      />
      <div className="description">
        <h1>Descripcion del producto</h1>
        <p>{description === "" ? "No contiene descripcion" : description}</p>
      </div>
    </>
  );
}

export default ItemInfo;
