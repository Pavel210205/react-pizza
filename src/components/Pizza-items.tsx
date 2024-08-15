import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addBasket,
  selectorBasketCartItem,
} from "../features/counter/basketSlise.js";

const typePizzaName = ["тонкое", "традиционное"];
type cardPropsType = {
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  id: string;
};

function Card({ title, price, imageUrl, sizes, types, id }: cardPropsType) {
  const basketItem = useSelector(selectorBasketCartItem(id));
  const count: number = basketItem ? basketItem.count : 0;

  const [pizaType, setPizaType] = React.useState<number>(0);
  const [pizaSize, setPizaSize] = React.useState<number>(0);
  const dis = useDispatch();
  const addBtnPizza: () => void = function () {
    const size: number = sizes[pizaSize];
    const item = {
      id,
      price,
      title,
      imageUrl,
      size,
      type: typePizzaName[pizaType],
    };
    dis(addBasket(item));
  };

  return (
    <div className="pizza-block">
      <Link to={"/" + id}>
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </Link>
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((id: number, index: number) => (
            <li
              key={index}
              onClick={() => setPizaType(index)}
              className={index === pizaType ? "active" : ""}
            >
              {typePizzaName[id]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((number, index) => (
            <li
              key={index}
              onClick={() => setPizaSize(index)}
              className={index === pizaSize ? "active" : ""}
            >
              {number}см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div
          onClick={addBtnPizza}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {count > 0 && <i>{count}</i>}
        </div>
      </div>
    </div>
  );
}
export default Card;
