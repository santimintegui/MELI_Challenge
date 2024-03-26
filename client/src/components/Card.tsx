import { Item } from "../types/Item";
import freeShippingLogo from "../assets/shipping.png";

type CardProps = {
  item: Item;
  isLast: boolean;
};

function Card({ item, isLast }: CardProps) {
  const { price, title, free_shipping, picture, location = "" } = item;

  return (
    <div className={`card-container ${isLast ? "last" : ""}`}>
      <img src={picture} height={180} width={180} />
      <div>
        <div className="shipping">
          $ <a>{price.amount}</a>
          {free_shipping && (
            <img src={freeShippingLogo} height={20} width={20} />
          )}
        </div>
        <h1>{title}</h1>
      </div>
      <div className="location">{location}</div>
    </div>
  );
}

export default Card;
