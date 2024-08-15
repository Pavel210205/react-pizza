import React from "react";

export default function NotFaund() {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          К сожалению не удалось подключиться к сайту, попробуйте повторить
          запрос позже <span>😕</span>
        </h2>
        <p>
          Вероятней всего, программист наделал не пойми чего, в чем он сам не до
          конца разбирается.
          <br />
          Мы предпринимаем меры по устранению проблемы и в ближайшее время сайт
          продолжит свою работу!
        </p>
      </div>
    </>
  );
}
