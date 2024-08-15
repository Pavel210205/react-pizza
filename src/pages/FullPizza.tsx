import axios from "axios";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const typePizzaName = ["тонкое", "традиционное"];

export default function FullPizza() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
  }>();

  React.useEffect(() => {
    async function fetchFullPizza() {
      try {
        const { data } = await axios.get(
          `https://661005660640280f219c1c83.mockapi.io/Cart/` + id
        );
        setPizza(data);
      } catch (error) {
        alert("произошла ошибочка");
        navigate("/");
      }
    }
    fetchFullPizza();
  }, []);
  if (pizza === undefined) {
    return <h2>Идет загрузка, пожалуйста подождите!</h2>;
  }
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={pizza.imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{pizza.title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {pizza.types.map((id: number, index: number) => (
            <li key={index}>{typePizzaName[id]}</li>
          ))}
        </ul>
        <ul>
          {pizza.sizes.map((number: number, index: number) => (
            <li key={index}>{number}см.</li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {pizza.price} ₽</div>
      </div>
    </div>
  );
}
