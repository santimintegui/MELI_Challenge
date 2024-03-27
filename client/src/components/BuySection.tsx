import { Price } from "../types/Item";
import { formatPrice, mappingCondition } from "../utils/utils";

type TitleItemProps = {
  title: string;
  price: Price;
  sold_quantity: number;
  condition: string;
};

function BuySection({
  title,
  price,
  sold_quantity,
  condition,
}: TitleItemProps) {
  return (
    <div className="title">
      <div>
        <a>
          {mappingCondition(condition)} -{" "}
          {formatPrice(sold_quantity.toString())} vendidos
        </a>
        <h1>{title}</h1>
      </div>
      <div className="price">
        <span className="amount">$ {formatPrice(price.amount)}</span>
        <span className="decimals">{price.decimals}</span>
      </div>
      <button>Comprar</button>
    </div>
  );
}

export default BuySection;
