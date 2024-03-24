import { ITEM } from "../types/Item";
import freeShippingLogo from "../assets/shipping.png";

type CardProps = {
  item: ITEM;
};

function Card(item: CardProps) {
  console.log({ item });

  const { id, price, title, free_shipping, picture } = item.item;

  return (
    <div className="card-container">
      <img src={picture} height={180} width={180} />
      <div className="middle">
        <div className="price">
          $ <a className="amount">{price.amount}</a>
          {free_shipping && (
            <img src={freeShippingLogo} height={20} width={20} />
          )}
        </div>
        <h1>{title}</h1>
      </div>
      <div>location</div>
    </div>
  );
}

export default Card;
