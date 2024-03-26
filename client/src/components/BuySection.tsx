import { Price } from "../types/Item";

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
  const showCondition = condition === "new" ? "Nuevo" : "Usado";

  return (
    <div className="title">
      <div>
        <a>
          {showCondition} - {sold_quantity} vendidos
        </a>
        <h1>{title}</h1>
      </div>
      <div className="price">
        <span className="amount">$ {price.amount}</span>
        <span className="decimals">{price.decimals}</span>
      </div>
      <button>Comprar</button>
    </div>
  );
}

export default BuySection;
